const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

// listing of all the different accounts on the local ganache network
let accounts;
// reference to the deployed instance of te factory that will be made
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccount();

  // deploy an instance of the factory contract with the compiledFactory, b/c
  // the Contract constructor is expecting a javascript object and not a json,
  // which compiledFactory returns, so we need to parse it.
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactor.bytecode })
    .send({ from: accounts[0], gas: "1000000" });
});
