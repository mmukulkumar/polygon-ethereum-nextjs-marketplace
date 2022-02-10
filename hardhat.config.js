require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "77e443de0ff7652636f22f0b7b40f50ef0c005317a3b6ee9c9aa4c4de34da4d3";

// infuraId is optional if you are using Infura RPC
const ganache = fs.readFileSync(".ganache").toString().trim() || "77e443de0ff7652636f22f0b7b40f50ef0c005317a3b6ee9c9aa4c4de34da4d3";
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};