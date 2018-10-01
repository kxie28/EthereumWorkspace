const path = require("path");
const solc = require("solc");
// access to the local file system (but with extra it has extra functions tied
// to it)
const fs = require("fs-extra");

// __dirname is the curent working directory
const buildPath = path.resolve(__dirname, "build");
// removing the build folder after compiling so every compile will create the
// most recent build
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
// reading in the source code
const source = fs.readFileSync(campaignPath, "utf8");
// compiling everything in the source read file and we only care about the
// contracts output
const output = solc.compile(source, 1).contracts;

// checks if directory exists, if it doesn't, it will create the folder
fs.ensureDirSync(buildPath);

// Now we loop over output object (step 18),  take each contract inside and
// write it to a different file in the directory
// console.log(output);
// the for-in loop is used to iterate over the keys of an object, so iterating
// over both CampaignFactory and Campaign
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract] // the actual contents written to the json file
  );
}
