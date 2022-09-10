const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  // http://127.0.0.1:7545
  const provider = new ethers.providers.JsonRpcProvider(
    "http:////127.0.0.1:7545"
  );
  const privateKey = new ethers.Wallet.fromMnemonic(
    "cousin across swim harvest obtain perfect crawl huge lock muffin survey parade"
  ).privateKey; // Sharing this menmonic is fine, it's just locally used for testing
  const wallet = new ethers.Wallet(privateKey, provider);
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
