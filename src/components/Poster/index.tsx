import React from "react";
import styled from "@emotion/styled";
import { PALETTE } from "../../styles";
import Img from "../Img";

interface PosterProps {
  data: { src: string }[];
}

function Poster({ data }: PosterProps) {
  const printOutSubImag = () => {
    return (data.splice(1) as { src: string }[]).map((el, i) => (
      <Img src={el.src} size={{ w: 89, h: 101 }} key={i} alt="dummy" />
    ));
  };
  return (
    <Wrapper>
      <div>
        <Img src={data[0].src} size={{ w: 190, h: 205 }} alt="dummy" />
        <GridWrapper>{printOutSubImag()}</GridWrapper>
      </div>
    </Wrapper>
  );
}

export default Poster;

const Wrapper = styled.div`
  width: 100%;
  height: 331px;
  border-radius: 10px;
  border: 1px solid ${PALETTE.gray.dark};
  padding: 4px;
  img {
    border-radius: 10px;
  }
  & > div {
    display: flex;
    justify-content: center;
    gap: 4px;
    & > img {
      width: calc(50%);
    }
  }
`;

const GridWrapper = styled.div`
  display: grid;
  width: 181px;
  justify-items: center;
  grid-template-columns: repeat(2, calc(50% - 1.5px));
  gap: 3px;
`;
