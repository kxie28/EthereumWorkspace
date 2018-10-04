// Setup the web3 instance

// This code is executed a total of two times, once on the server, then once on
// the browser

import Web3 from "web3";

// uses metamask provider and assumes users that visit have metamask running.
// "window not defined" b/c window is only available in the browser window,
// not in node.js, where the server is rendering our code in the Next server
// *****const web3 = new Web3(window.web3.currentProvider);*****

// To fix this problem, we will do the following..
let web3;

// check if the code is being run the window or in node, if it is running the
// window, we'll be getting a type object returned. Second check is to see if
// the window has metamask running and injected web3
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We want to make our own copy of web3 and assigned it to a variable
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask.
  // We set up our own provider that connects to rinkeby set up by infura
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/f022a9841e9347e193c7e4f5071be4b7"
  );
  // create our own instance of web3 again and pass in the provider we just made
  web3 = new Web3(provider);
}
export default web3;
