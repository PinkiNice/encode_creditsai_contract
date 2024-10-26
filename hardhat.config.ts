import { vars, type HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ignition";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-viem";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-chai-matchers-viem";

import { parseEther } from "viem";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
};

export default config;

const accounts = [vars.get("DEPLOYER_PRIVATE_KEY")];

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: config.solidity,
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: [
        {
          privateKey: vars.get("DEPLOYER_PRIVATE_KEY"),
          balance: parseEther("1").toString(),
        },
      ],
    },
    arbitrumSepolia: {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      chainId: 421614,
    },
    arbitrumOne: {
      url: "https://arb1.arbitrum.io/rpc",
    },
    opSepolia: {
      chainId: 11155420,
      url: "https://sepolia.optimism.io",
      accounts,
    },
    baseSepolia: {
      chainId: 84532,
      url: "https://base-sepolia-rpc.publicnode.com",
      accounts,
    },
  },
};
