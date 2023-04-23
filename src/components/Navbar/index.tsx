import React, { useEffect, useState } from "react";
import * as S from "./styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { AIRBNBCEREAL_W } from "../../styles";

function Navbar() {
  const { asPath } = useRouter();
  const [navigateTo, setNavigateTo] = useState("");
  const dummy = {
    all: "420k",
    collections: "220k",
    singles: "352k",
  };
  useEffect(() => {
    setNavigateTo(prev => {
      return asPath.slice(1, asPath.length) || "all";
    });
  }, [asPath]);

  return (
    <S.Wrapper>
      <S.Container path={navigateTo}>
        <S.List id="all">
          <Link href="/">
            <S.NavText family={AIRBNBCEREAL_W.bold} size={15}>
              All<span>{dummy.all}</span>
            </S.NavText>
          </Link>
        </S.List>
        <S.List id="collections">
          <Link href="/collections">
            <S.NavText family={AIRBNBCEREAL_W.bold} size={15}>
              Collections<span>{dummy.collections}</span>
            </S.NavText>
          </Link>
        </S.List>
        <S.List id="singles">
          <Link href="/singles">
            <S.NavText family={AIRBNBCEREAL_W.bold} size={15}>
              Singles<span>{dummy.singles}</span>
            </S.NavText>
          </Link>
        </S.List>
      </S.Container>
    </S.Wrapper>
  );
}

export default Navbar;
