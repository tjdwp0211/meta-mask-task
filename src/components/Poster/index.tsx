import React from "react";
import * as S from "./styled";
import * as T from "../../types/components";
import Img from "../Img";
import Text from "../Text";
import { ethereumLogo } from "../../assets/imgs";
import { URBANIST } from "../../styles";

function Poster({ data }: T.PosterProps) {
  const printOutSubImag = () => {
    return (data.slice(1) as { src: string }[]).map((el, i) => (
      <Img src={el.src} size={{ w: 89, h: 101 }} key={i} alt="sub images" />
    ));
  };

  const ethereumLogoProps = (alt: string) => {
    return {
      src: ethereumLogo,
      size: { w: 21, h: 21 },
      alt: alt,
    };
  };

  return (
    <S.Wrapper>
      <S.ImgsWrapper>
        <Img src={data[0].src} size={{ w: 190, h: 205 }} alt="main image" />
        <S.GridWrapper>{printOutSubImag()}</S.GridWrapper>
        <S.Hits family={URBANIST.bold} size={13}>
          +2.2k
        </S.Hits>
      </S.ImgsWrapper>
      <S.BodyWrapper>
        <S.BodyContainer>
          <Text>{data[0].title}</Text>
          <S.AboutEthereums>
            <Text family={URBANIST.medium} size={14}>
              Price
            </Text>
            <S.EthereumLogo {...ethereumLogoProps("ethereum price")} />
            <Text family={URBANIST.semiBold} size={16}>
              27.5 ETH
            </Text>
            <Text family={URBANIST.medium} size={14}>
              Market Cap
            </Text>
            <S.EthereumLogo {...ethereumLogoProps("ethereum market cap")} />
            <Text family={URBANIST.semiBold} size={16}>
              27.5 ETH
            </Text>
          </S.AboutEthereums>
        </S.BodyContainer>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}

export default Poster;
