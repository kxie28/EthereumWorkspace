// This factory.js file is so that if we need access to our deployed factory instance
// we don't have to go through the steps of importing web3, the interface, and
// getting the address, etc.. Now we just need import this factory.js file
// and we get our preconfigured instance of CampaignFactory

import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

// need to create the contract instance with the address of the contract
// we deployed earlier with npm deploy.js command
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x91e6709aE97fDeb8c7f63cE9371D45bdd3C9B2bf"
);

export default instance;
