import React from "react";
import styled from "@emotion/styled";
import Text from "../Text";
import { PALETTE } from "../../styles";

export const Wrapper = styled.nav`
  width: 100%;
  border-bottom: 1px solid ${PALETTE.gray.soft};
  padding: 34px 0 0 0;
`;

export const Container = styled.ul<{ path: string }>`
  width: 403px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding-left: clamp(40px, 10vw, 122px);
  ${props => {
    const styleTarget = "#" + props.path;
    const otherElements = `li:not(${styleTarget})`;
    return {
      [styleTarget]: { borderBottom: "2px solid black", paddingBottom: "6px" },
      [otherElements]: { paddingBottom: "8px" },
    };
  }}
`;

export const List = styled.li`
  all: unset;
  height: 100%;
  a {
    display: flex;
    height: 26px;
  }
`;

export const NavText = styled(Text)`
  display: flex;
  align-items: center;
  gap: 4px;
  span {
    color: ${PALETTE.gray.strong};
  }
`;
