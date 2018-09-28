import Web3 from 'web3';

// taking the web3 provider from the injected metamask web3 provider to use
// for ourselves
const web3 = new Web3(window.web3.currentProvider);

export default web3;
