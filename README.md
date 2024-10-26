# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

## Deploy
npx hardhat vars set DEPLOYER_PRIVATE_KEY

npx hardhat ignition deploy ./ignition/modules/CreditsNFTMModule.ts
npx hardhat ignition deploy ./ignition/modules/CreditsNFTMModule.ts --network hardhat
npx hardhat ignition deploy ./ignition/modules/CreditsNFTMModule.ts --network opSepolia
npx hardhat ignition deploy ./ignition/modules/CreditsNFTMModule.ts --network baseSepolia
## Wagmi
generate ABIS
npx wagmi generate

## Base Sepolia