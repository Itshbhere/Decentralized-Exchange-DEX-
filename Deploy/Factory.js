const { ethers } = require("hardhat");

const main = async () => {
  const [Owner] = await ethers.getSigners();
  console.log(Owner.address);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
