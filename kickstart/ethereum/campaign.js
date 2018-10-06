import web3 from "./web3";
import Campaign from "./build/Campaign.json";

// create a function that receives an address, use that address to create a new
// campaign.
export default address => {
  return new web3.eth.Contract(JSON.parse(Campaign.interface), address);
};
