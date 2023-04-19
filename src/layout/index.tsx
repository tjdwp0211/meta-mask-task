import React from "react";
import styled from "@emotion/styled";
import { Img, Navbar, Text } from "../components";
import { arrowButton, renaissanceLabLogo } from "../assets/imgs";
import { PALETTE, URBANIST } from "../styles";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const handleArrowButtonClick = () => {
    console.log("Arrow Button Click");
  };

  return (
    <>
      <Header>
        <MainLogoWrapper family={URBANIST.extraBold} size={18}>
          <Img src={renaissanceLabLogo} size={{ w: 36, h: 20 }} alt="logo" />
          Renaissance Lab.
        </MainLogoWrapper>
        <UserProfileWrapper>
          <div></div>
          <button onClick={handleArrowButtonClick}>
            <Img src={arrowButton} size={{ w: 24, h: 24 }} alt="opener" />
          </button>
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
  height: 948px;
  padding: 0 clamp(40px, 10vw, 120px);
`;

const MainLogoWrapper = styled(Text)`
  height: 23px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserProfileWrapper = styled.aside`
  display: flex;
  align-items: center;
  gap: 4px;
  & > div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${PALETTE.gray.dark};
  }
`;
