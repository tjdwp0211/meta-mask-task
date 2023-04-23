import React, { useCallback, useEffect } from "react";
import * as S from "./styled";
import * as T from "../../types/components";
import Text from "../Text";
import Web3 from "web3";
import { AIRBNBCEREAL_W } from "../../styles";
import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "../../lib";
import { metamaskLogo } from "../../assets/imgs";

function Popup(props: T.PopupProps) {
  const { view, setPipeLineWithPopup } = props;
  const { account, active, activate, deactivate } = useWeb3React();

  const getBalance = useCallback(async () => {
    if (account) {
      const web3 = new Web3(window.web3.currentProvider);
      const balance = await web3.eth.getBalance(account);

      setPipeLineWithPopup(pre => ({
        ...pre,
        account: account,
        balance: balance,
      }));
    }
  }, [account, setPipeLineWithPopup]);

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  const handleConnect = () => {
    if (active) {
      setPipeLineWithPopup(pre => {
        return { ...pre, view: false, account: null, balance: null };
      });
      deactivate();
    } else {
      activate(injectedConnector.injected, err => {
        if (injectedConnector.isNoEthereumObject(err))
          window.open("https://metamask.io/download.html");
      });
    }
  };

  const maskingAccount = () => {
    const { length: leng } = account;
    return (
      account && `${account.slice(0, 6)}...${account.slice(leng - 6, leng)}`
    );
  };

  return (
    <S.Wrapper view={view} active={active}>
      {active && (
        <S.MetamaskLogo
          src={metamaskLogo}
          size={{ w: 21, h: 21 }}
          alt="metamask"
        />
      )}
      <S.MaskingAccountContainer active={active}>
        {!active ? "Connect" : maskingAccount()}
      </S.MaskingAccountContainer>
      {active && (
        <Text family={AIRBNBCEREAL_W.medium} size={15}>
          Settings
        </Text>
      )}
      <S.ConnectingButon onClick={handleConnect} active={active}>
        <Text family={AIRBNBCEREAL_W.medium} size={15}>
          {!active ? "Connect Wallet" : "Disconnect"}
        </Text>
      </S.ConnectingButon>
    </S.Wrapper>
  );
}

export default Popup;
