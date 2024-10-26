import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
const OWNER: string = "0x8aC7Ba450bEa997fE00b2dd1bd6fD844521d7e55";

const CreditsNFTModule = buildModule("CreditsNFTModule", (m) => {
  const owner = m.getParameter("owner", OWNER);
  const providerName = m.getParameter("providerName", "MistralAI");

  const token = m.contract("CreditsNFT", [providerName, owner]);

  return { token };
});

export default CreditsNFTModule;
