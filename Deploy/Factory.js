const { ethers } = require("hardhat");

const main = async () => {
  const [Owner] = await ethers.getSigners();
  console.log(Owner.address);
  const contractFactory = await ethers.getContractFactory("UniswapV2Factory");
  const contract = await contractFactory.deploy(Owner.address);
  await contract.waitForDeployment();
  const FactoryAddress = await contract.getAddress();
  console.log("Factory Smart Contract Deployed Address: ", FactoryAddress);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
