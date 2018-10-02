const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

// listing of all the different accounts on the local ganache network
let accounts;
// reference to the deployed instance of the factory that will be made
let factory;
// address of campaign
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  // deploy an instance of the factory contract with the compiledFactory, b/c
  // the Contract constructor is expecting a javascript object and not a json,
  // which compiledFactory returns, so we need to parse it.
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods.createCampaign("100").send({
    from: accounts[0],
    gas: "1000000"
  });

  // take the first element of campaignAddress and assign it to the
  // campaignAddress variable
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  // if we already deployed a contract, we need to pass in an address of the
  // already deployed contract as the second argument
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe("Campaigns", () => {
  it("deploys a factory and a campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it("marks caller as the campaign manager", async () => {
    const manager = await campaign.methods.manager().call();
    assert.ok(accounts[0], manager);
  });

  it("allows people to contribute money and marks them as approvers", async () => {
    await campaign.methods.contribute().send({
      value: "200",
      from: accounts[1]
    });
    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });

  it("requires a minimum contribution", async () => {
    try {
      await campaign.methods.contribute().send({
        value: "10",
        from: accounts[0]
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("manager has the ability to create a payment request", async () => {
    await campaign.methods
      .createRequest("buy supplies", "1000", accounts[0])
      .send({
        from: accounts[0],
        gas: "1000000"
      });
    // b/c everytime we send a transaction, we get no return value. So here we
    // need to reach back into the contract after creation to pull out the
    // request that was just made. We get requests at index of 0 since it was
    // just added to that array from Requests[] public requests in Campaign.sol
    const request = await campaign.methods.requests(0).call();
    // check that the description created by contract is equal to what we set interval
    // at
    assert.equal("buy supplies", request.description);
  });

  it("process requests", async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei("10", "ether")
    });

    await campaign.methods
      .createRequest("Buy car", web3.utils.toWei("5", "ether"), accounts[1])
      .send({
        from: accounts[0],
        gas: 1000000
      });

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: 1000000
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: 1000000
    });

    // created as let b/c we'll be reassigning balances
    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    // built in helper and takes a string and tries to turn it into a float
    balance = parseFloat(balance);
    console.log(balance);
    assert(balance > 104);
  });
});
