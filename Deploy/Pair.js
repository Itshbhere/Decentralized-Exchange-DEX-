const { ethers } = require("hardhat");

const main = async () => {
  const [Owner] = await ethers.getSigners();
  console.log(Owner.address);
  const Factory = "0xC09e62c18D2836d120D276182c24329892B93F4a";
  const WETH = "0x61a05bDDB6175e0b696de47dC07Eb630dbB2DB28";
  const contractFactory = await ethers.getContractFactory("UniswapV2Router02");
  const Router = await contractFactory.deploy(Factory, WETH);
  await Router.waitForDeployment();
  const RouterAddress = await Router.getAddress();
  console.log("Router Smart Contract Deployed Address: ", RouterAddress);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
