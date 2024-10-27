require("dotenv").config();
const fs = require("fs");
require("@nomiclabs/hardhat-waffle");

const privateKey = process.env.PRIVATE_KEY;

// Chainstack Execution client HTTPS endpoint for Holeski
const HOLESKY_RPC_URL =
  "https://ethereum-holesky.core.chainstack.com/8954c85445cf77eb57d4e2730cf8f368";

module.exports = {
  solidity: "0.8.4",
  networks: {
    holeski: {
      url: HOLESKY_RPC_URL,
      accounts: [privateKey],
      chainId: 17000, // Holeski testnet chain ID
    },
  },
};
