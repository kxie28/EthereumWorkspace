const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);
const {interface, bytecode} = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy
  // the contract
  //Teaches web3 about what methods an Inbox contract has
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    //Tells web3 that we want to deploy a new copy of this contract
    .deploy({
      data: bytecode,
      arguments: ['Hi there!']
    })
    //Instructs web3 to send out a transaction that creates this contract
    .send({
      from: accounts[0],
      gas: '1000000'
    });
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
    //console.log(inbox.options.address);
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi there!')
  });

  it('can change the message', async () => {
    await inbox.methods.setMessage('bye').send({
      from: accounts[0]
    });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye');
  });

});


/*
//Creating a mocha testing sample
class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}

let car;

beforeEach(() => {
  car = new Car();
})

describe('Car', () => {
  it('can park', () => {
    assert.equal(car.park(), 'stopped');
  });

  it('can drive', () => {
    assert.equal(car.drive(), 'vroom');
  });
});
*/
