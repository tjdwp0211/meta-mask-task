import React from "react";
import styled from "@emotion/styled";
import { Text } from "../components";
import { PALETTE } from "../styles";

export const Header = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px 0 36px;
`;

export const Main = styled.main`
  width: 100%;
  height: fit-content;
  padding: 0 clamp(40px, 10vw, 120px);
  padding-bottom: 24px;
`;

export const MainLogoWrapper = styled(Text)`
  height: 23px;
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 36px;
    height: 20px;
  }
`;

export const UserProfileWrapper = styled.aside`
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

export const EthereumBalanceWrapper = styled.div`
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
