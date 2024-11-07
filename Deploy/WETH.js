const { ethers } = require("hardhat");

const main = async () => {
  const [Owner] = await ethers.getSigners();
  console.log(Owner.address);
  const contractFactory = await ethers.getContractFactory("WETH9");
  const WETH = await contractFactory.deploy();
  await WETH.waitForDeployment();
  const WETHAddress = await WETH.getAddress();
  console.log("WETH Smart Contract Deployed Address: ", WETHAddress);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
