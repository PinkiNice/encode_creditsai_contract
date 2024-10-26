import { defineConfig } from "@wagmi/cli";
import { hardhat } from "@wagmi/cli/plugins";
import { type HardhatConfig } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "./artifacts/wagmi-abis.ts",
  plugins: [
    hardhat({
      project: "./",
      artifacts: "./artifacts",
    }),
  ],
});
