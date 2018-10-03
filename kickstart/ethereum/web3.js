// Setup the web3 instance

import Web3 from "web3";

// uses metamask provider and assumes users that visit have metamask running
const web3 = new Web3(window.web3.currentProvider);

export default web3;
