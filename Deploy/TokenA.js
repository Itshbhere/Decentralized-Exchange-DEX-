const { ethers } = require("hardhat");

const main = async () => {
  const [Owner] = await ethers.getSigners();
  console.log(Owner.address);
  const InitialSupply = 69000000000000000000000n;
  const contractFactory = await ethers.getContractFactory("ERC20");
  const TokenA = await contractFactory.deploy(InitialSupply);
  await TokenA.waitForDeployment();
  const TokenAAddress = await TokenA.getAddress();
  console.log("Token A Smart Contract Deployed Address: ", TokenAAddress);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
