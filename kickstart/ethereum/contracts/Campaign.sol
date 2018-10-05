pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}
contract Campaign {
    // Struct is a brand new type into contract (like address, string, uit, etc)
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    // need an approversCount b/c we need the count of how many people have
    // contributed and b/c the approvers have a mapping type, we are not able to
    // itereate through and count, therefore we have to increment approversCount
    // after each contribution
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    // payable makes this function able to receive money
    function contribute() public payable {
        require(msg.value > minimumContribution);

        // adding a new key of this address to the mapping and gives it a value
        // of true, but first check if they have already contributed
        if (!approvers[msg.sender]) {
            approvers[msg.sender] = true;
            approversCount++;
        } else {
            approvers[msg.sender] = true;
        }
    }

    function createRequest(string description, uint value, address recipient)
        public restricted {
        // Request (reference to the struct from above) newRequest (variable
        // name) Request({}) (new instance of a Request)
        Request memory newRequest = Request({   // Request here is created in MEMORY
           description: description,            // b/c of that, newRequest can't point
           value: value,                        // to storage b/c it's only in MEMORY
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        // since requests[index] will be called multiple times, we will assign
        // it as a local variable, we make it storage b/c we need it look at the
        // same copy of request everytime
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        // add this user to the list of approvals so they won't be able to vote
        // for the same request again.
        request.approvals[msg.sender] = true;
        // increment the approval count
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        // check if there is a majority who have approved the contract
        require(request.approvalCount > (approversCount / 2));
        // check if request is already complete or not
        require(!request.complete);

        // because recipient is an address, it has a method called transfer()
        // the Request struct has a value field
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns (
      uint, uint, uint, uint, address
      ) {
        return (
          minimumContribution,
          this.balance,
          requests.length,
          approversCount,
          manager
        );
    }

    function getRequestCount() public view returns (uint) {
      return requests.length;
    }
}
