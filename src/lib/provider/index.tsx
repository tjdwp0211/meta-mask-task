import React from "react";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

interface Web3EthersProviderProps {
  children: React.ReactNode;
}

declare global {
  interface Window {
    web3?: Web3;
  }
}

function Web3EthersProvider({ children }: Web3EthersProviderProps) {
  const getLibrary = provider => {
    return new Web3Provider(provider, "any");
  };
  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  );
}

export default Web3EthersProvider;
