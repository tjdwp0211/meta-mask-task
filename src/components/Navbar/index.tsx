import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { AIRBNBCEREAL_W, PALETTE } from "../../styles";
import Text from "../Text";

function Navbar() {
  const dummy = {
    all: "420k",
    collections: "220k",
    singles: "352k",
  };

  return (
    <Wrapper>
      <Container>
        <List>
          <Link href={"/"}>
            <NavText>All</NavText>
            <NavText>{dummy.all}</NavText>
          </Link>
        </List>
        <List>
          <Link href={"/collections"}>
            <NavText>Collections</NavText>
            <NavText>{dummy.collections}</NavText>
          </Link>
        </List>
        <List>
          <Link href={"/singles"}>
            <NavText>Singles</NavText>
            <NavText>{dummy.singles}</NavText>
          </Link>
        </List>
      </Container>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.nav`
  width: 100%;
  border-bottom: 1px solid ${PALETTE.gray.soft};
  padding: 34px 0 8px 0;
`;

const Container = styled.ul`
  width: 403px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding-left: clamp(40px, 10vw, 122px);
  a {
    display: flex;
    height: 26px;
    gap: 4px;
    p:nth-last-of-type(1) {
      color: ${PALETTE.gray.strong};
    }
  }
`;

const List = styled.li`
  all: unset;
`;

const NavText = styled(Text)`
  display: flex;
  align-items: center;
  font-family: ${AIRBNBCEREAL_W.bold};
  font-weight: 700;
  font-size: 15px;
`;
