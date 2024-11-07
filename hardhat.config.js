require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },

  networks: {
    Sepolia: {
      url: "https://mainnet.infura.io/v3/f66cd0a825834054b4fb156af5735664",
      accounts: [
        "d7ba93e4324cd43781a68a565eff5a0352fe4075f2d3c86391d0a14c80b150c7",
      ],
    },
  },
};
