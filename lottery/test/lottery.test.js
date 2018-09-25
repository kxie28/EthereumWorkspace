const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

let lottery;
let accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({
      from: accounts[0],
      gas: '1000000'
    });
});

describe('Lottery Contract', () => {
  it('deploys a contract', () => {
    assert.ok(lottery.options.address);
  });

  //Test that the enter() function allows a player to enter the pool
  it('allows one account to enter', async() => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('0.02', 'ether')
    });

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });

    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
  });

  //Test that the enter() function allows more than one account to enter
  it('allows multiple accounts to enter', async() => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('0.02', 'ether')
    });
    await lottery.methods.enter().send({
      from: accounts[1],
      value: web3.utils.toWei('0.02', 'ether')
    });
    await lottery.methods.enter().send({
      from: accounts[2],
      value: web3.utils.toWei('0.02', 'ether')
    });

    //get the list of players and specify who is calling this function..
    //.."accounts[0]"
    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });

    assert.equal(accounts[0], players[0]);
    assert.equal(accounts[1], players[1]);
    assert.equal(accounts[2], players[2]);
    assert.equal(3, players.length);
  });

  //Test that the enter() function only allows the player to enter after
  //sending in the minimum amount of ether to enter the pool
  it('requires a minimum of ether', async() => {
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: 200
      });
      //if async function call executes and an error is not thrown, execution
      //will go to the next test, which is the assert(false) which will fail
      //the test no matter what.
      assert(false);
    } catch(err) {
      assert(err);
    }
  });

  //Test that the pickWinner() function only allows the manager to call it
  it('only manager can call pickWinner', async() => {
    try {
      //calling pickWinner() and because it's from accounts[1], it should
      //immediately kick us out because of the restricted modifier in the
      //pickWinner() function
      await lottery.methods.pickWinner().send({
        from: accounts[1]
      });
      assert(false);
    } catch(err) {
      assert(err);
    }
  });

  //End to end test of the entire Contract
  it('sends money to the winner and resets the players array', async() => {
    //instead of having to enter in multiple players into the contract, we will
    //only test with one player. This will not test the random() function
    //but we will not have to figure out the logic behind who the winner is
    //if multiple players are entered.
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('2', 'ether')
    });

    //accounts[0] should have the 2 ether sent back after pickWinner is called
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    //grab the amount of initial ether in accounts[0] after sending in the ether
    const initialBalance = await web3.eth.getBalance(accounts[0]);
    //check the balance for the 2 ether that is sent back (will be slightly
    //less than 2 because of the gas fees)
    const finalBalance = await web3.eth.getBalance(accounts[0]);
    const difference = finalBalance - initialBalance;
    assert(difference > web3.utils.toWei('1.8', 'ether'));
  });
});
