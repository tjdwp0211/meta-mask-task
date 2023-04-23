import React, { useEffect, useRef, useState } from "react";
import * as S from "./styled";
import * as T from "../types/components";
import { Img, Navbar, Popup, Text } from "../components";
import { arrowButton, ethereumLogo, renaissanceLabLogo } from "../assets/imgs";
import { AIRBNBCEREAL_W, URBANIST } from "../styles";
import Jazzicon from "@metamask/jazzicon";

function Layout({ children }: T.LayoutProps) {
  const jazziconRef = useRef<HTMLDivElement>(null);
  const [pipeLineWithPopup, setPipeLineWithPopup] = useState({
    view: false,
    account: null,
    balance: null,
  });

  const handleArrowButtonClick = () => {
    setPipeLineWithPopup(prev => ({ ...prev, view: !prev.view }));
  };

  const handleJazziconRef = () => {
    jazziconRef.current.firstChild.remove();
  };

  useEffect(() => {
    if (pipeLineWithPopup.account && jazziconRef.current) {
      const userIcon: HTMLDivElement = Jazzicon(16, pipeLineWithPopup.account);
      userIcon.style.width = "40px";
      userIcon.style.height = "40px";

      jazziconRef.current.appendChild(userIcon);
    }
  }, [pipeLineWithPopup.account]);

  const createEthereumBalance = () => {
    return (
      <S.EthereumBalanceWrapper>
        <Img
          src={ethereumLogo}
          size={{ w: 25, h: 25 }}
          alt="Ethereum balance"
        />
        <Text family={AIRBNBCEREAL_W.bold} size={18}>
          {pipeLineWithPopup.balance} ETH
        </Text>
      </S.EthereumBalanceWrapper>
    );
  };

  return (
    <>
      <S.Header>
        <S.MainLogoWrapper family={URBANIST.extraBold} size={18}>
          <Img src={renaissanceLabLogo} size={{ w: 36, h: 20 }} alt="logo" />
          Renaissance Lab.
        </S.MainLogoWrapper>
        <S.UserProfileWrapper>
          {pipeLineWithPopup.account && createEthereumBalance()}
          <div className="user-profile" ref={jazziconRef} />
          <button onClick={handleArrowButtonClick}>
            <Img src={arrowButton} size={{ w: 24, h: 24 }} alt="opener" />
          </button>
          <Popup
            view={pipeLineWithPopup.view}
            setPipeLineWithPopup={setPipeLineWithPopup}
            deleteJazziconRef={handleJazziconRef}
          />
        </S.UserProfileWrapper>
      </S.Header>
      <Navbar />
      <S.Main>{children}</S.Main>
    </>
  );
}

export default Layout;
