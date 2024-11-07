const { ethers } = require("hardhat");

const main = async () => {
  const [Owner] = await ethers.getSigners();
  console.log(Owner.address);
  const InitialSupply = 69000000000000000000000n;
  const contractFactory = await ethers.getContractFactory("TokenB");
  const TokenB = await contractFactory.deploy(InitialSupply);
  await TokenB.waitForDeployment();
  const TokenBAddress = await TokenB.getAddress();
  console.log("Token B Smart Contract Deployed Address: ", TokenBAddress);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
