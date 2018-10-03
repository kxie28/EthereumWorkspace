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
  "0x6882e07C7Db8c0d91FD532F57267ff190ECB55F3"
);

export default instance;
