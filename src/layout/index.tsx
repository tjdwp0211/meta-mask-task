import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Img, Navbar, Popup, Text } from "../components";
import { arrowButton, ethereumLogo, renaissanceLabLogo } from "../assets/imgs";
import { AIRBNBCEREAL_W, PALETTE, URBANIST } from "../styles";
import Jazzicon from "@metamask/jazzicon";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
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
      <EthereumBalanceWrapper>
        <Img
          src={ethereumLogo}
          size={{ w: 25, h: 25 }}
          alt="Ethereum balance"
        />
        <Text family={AIRBNBCEREAL_W.bold} size={18}>
          {pipeLineWithPopup.balance} ETH
        </Text>
      </EthereumBalanceWrapper>
    );
  };

  return (
    <>
      <Header>
        <MainLogoWrapper family={URBANIST.extraBold} size={18}>
          <Img src={renaissanceLabLogo} size={{ w: 36, h: 20 }} alt="logo" />
          Renaissance Lab.
        </MainLogoWrapper>
        <UserProfileWrapper>
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
        </UserProfileWrapper>
      </Header>
      <Navbar />
      <Main>{children}</Main>
    </>
  );
}

export default Layout;

const Header = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px 0 36px;
`;

const Main = styled.main`
  width: 100%;
  height: fit-content;
  padding: 0 clamp(40px, 10vw, 120px);
  padding-bottom: 24px;
`;

const MainLogoWrapper = styled(Text)`
  height: 23px;
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 36px;
    height: 20px;
  }
`;

const UserProfileWrapper = styled.aside`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
  position: relative;
  .user-profile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 20px;
    background-color: ${PALETTE.gray.dark};
  }
`;

const EthereumBalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p:nth-of-type(1) {
    color: ${PALETTE.black.soft};
  }
  img {
    width: 16px;
    height: 16px;
    padding: 4px;
    border-radius: 50%;
    background-color: ${PALETTE.blue.light};
  }
`;
