pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;
    address public playerWinner;

    function Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable{
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }

    function random() private view returns (uint) {
        //sha3 will create a large number with the block difficulty,
        //the current time (now), and the array of player addresses and
        //turn it into a uint
        return uint(keccak256(block.difficulty, now, players));
    }

    function pickWinner() public restricted {
        uint index = random() % players.length;
        players[index].transfer(this.balance);
        address playerWinner = players[index];
        //recreate a players array with size 0 to reset the lottery contract
        players = new address[](0);
    }

    //defining a new function modifier to the contract - reduce the amount of
    //code to write. (used in line 23). Basically when a function has
    //"restricted", the code under that function is replaced into the "_;" into
    //this modifier function
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }
}
