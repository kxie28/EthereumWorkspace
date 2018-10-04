"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// uses metamask provider and assumes users that visit have metamask running.
// "window not defined" b/c window is only available in the browser window,
// not in node.js, where the server is rendering our code in the Next server
// *****const web3 = new Web3(window.web3.currentProvider);*****

// To fix this problem, we will do the following..
var web3 = void 0;

// check if the code is being run the window or in node, if it is running the
// window, we'll be getting a type object returned. Second check is to see if
// the window has metamask running and injected web3
// Setup the web3 instance

// This code is executed a total of two times, once on the server, then once on
// the browser

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We want to make our own copy of web3 and assigned it to a variable
  // We are in the browser and metamask is running.
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask.
  // We set up our own provider that connects to rinkeby set up by infura
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/f022a9841e9347e193c7e4f5071be4b7");
  // create our own instance of web3 again and pass in the provider we just made
  web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0EsQUFBTzs7Ozs7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLFlBQUo7O0FBRUE7QUFDQTtBQUNBO0FBakJBOztBQUVBO0FBQ0E7O0FBZUEsSUFBSSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQW5ELEFBQTRELGFBQWEsQUFDdkU7QUFDQTtBQUNBO1NBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUM3QjtBQUpELE9BSU8sQUFDTDtBQUNBO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDZixBQUVGO0FBQ0E7U0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNqQjtBQUNEO2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvS2V2aW4vRGVza3RvcC9FdGhlcmV1bVdvcmtzcGFjZS9raWNrc3RhcnQifQ==