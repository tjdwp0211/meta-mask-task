import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: undefined,
});

const NO_ETHEREUM_OBJECT = /No Ethereum provider was found on window.ethereum/;
export const isNoEthereumObject = err => {
  return NO_ETHEREUM_OBJECT.test(err);
};
