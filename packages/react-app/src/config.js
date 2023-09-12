import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x8ade1413C22662e7943F84E2Fbfd50EC93710CCE"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/SulYir_4Wdgl_rvqY-oqqYIW8286uBSZ",
  },
};