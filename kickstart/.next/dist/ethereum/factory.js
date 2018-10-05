"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require("./build/CampaignFactory.json");

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// need to create the contract instance with the address of the contract
// we deployed earlier with npm deploy.js command
// This factory.js file is so that if we need access to our deployed factory instance
// we don't have to go through the steps of importing web3, the interface, and
// getting the address, etc.. Now we just need import this factory.js file
// and we get our preconfigured instance of CampaignFactory

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), "0x91e6709aE97fDeb8c7f63cE9371D45bdd3C9B2bf");

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQXFCOzs7Ozs7QUFFNUI7QUFDQTtBQVRBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDNUIsS0FBQSxBQUFLLE1BQU0sMEJBREksQUFDZixBQUEyQixZQUQ3QixBQUFpQixBQUVmLEFBR0Y7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvS2V2aW4vRGVza3RvcC9FdGhlcmV1bVdvcmtzcGFjZS9raWNrc3RhcnQifQ==