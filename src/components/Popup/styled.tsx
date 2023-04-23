import React from "react";
import styled from "@emotion/styled";
import * as T from "../../types/components";
import Img from "../Img";
import { AIRBNBCEREAL_W, PALETTE } from "../../styles";

const RootStyle = styled.div<Pick<T.PopupProps, "view">>`
  height: fit-content;
  width: 248px;
  position: absolute;
  top: 76px;
  right: 0;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 0px 60px 4px rgba(0, 0, 0, 0.2);
  visibility: ${props => (props.view ? "visible" : "hidden")};
  z-index: 1;
`;

export const Wrapper = styled(RootStyle)<{ active: boolean }>`
  &,
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  flex-direction: column;
  ${props => {
    if (props.active) {
      return {
        padding: "28px 20px 2px 20px",
        gap: "0",
        p: {
          width: "100%",
          padding: "20px 0",
          borderTop: `1px solid ${PALETTE.gray.whitish}`,
        },
      };
    } else {
      return {
        padding: "24px 20px 22px 24px",
        gap: "17px",
        button: { height: "41px" },
      };
    }
  }};
`;

export const ConnectingButon = styled.button<{ active: boolean }>`
  width: 204px;
  ${props =>
    props.active
      ? { color: "balck", backgroundColor: "white", width: "100%" }
      : { color: "white", backgroundColor: PALETTE.black.dark }}
  border-radius: 10px;
`;

export const MaskingAccountContainer = styled.span<{ active: boolean }>`
  width: 100%;
  text-align: center;
  padding: ${props => props.active && "10px 0 22px 0"};
  font-family: ${AIRBNBCEREAL_W.bold};
  font-size: 16px;
`;

export const MetamaskLogo = styled(Img)`
  width: 21px;
  height: 21px;
`;
