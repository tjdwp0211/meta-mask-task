import styled from "@emotion/styled";
import Img from "../Img";
import Text from "../Text";
import { PALETTE } from "../../styles";

export const Wrapper = styled.div`
  aspect-ratio: 383 / 331;
  width: calc(100% - 8px);
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: 10px;
  border: 1px solid ${PALETTE.gray.dark};
  img {
    border-radius: 10px;
  }
`;

export const ImgsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 4px;
  & > img {
    width: 50%;
    aspect-ratio: 190 / 205;
  }
  position: relative;
`;

export const GridWrapper = styled.div`
  display: grid;
  width: 181px;
  justify-items: center;
  grid-template-columns: repeat(2, calc(50% - 1.5px));
  gap: 3px;
`;

export const Hits = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12.5%;
  height: 30px;
  border-radius: 8px 0;
  background-color: ${PALETTE.gray.light};
`;

export const BodyWrapper = styled.div`
  width: calc(100% - 16px);
  padding: 20px 8px 16px 8px;
  flex: 2;
`;

export const BodyContainer = styled.div`
  height: 100%;
  & > p {
    width: 80%;
    height: 26px;
    font-size: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const AboutEthereums = styled.div`
  display: grid;
  padding-top: 12px;
  grid-template-columns: 21px 0.5fr 21px 1fr;
  column-gap: 8px;
  grid-auto-rows: repeat(2, 1fr);
  row-gap: 5.5px;
  align-items: center;
  p:nth-of-type(2n-1) {
    color: ${PALETTE.gray.charcoal};
    white-space: nowrap;
  }
  p:nth-of-type(2n) {
    color: ${PALETTE.black.light};
    grid-row: 2;
  }
  p:nth-of-type(3) {
    grid-column: 3;
  }
`;

export const EthereumLogo = styled(Img)`
  width: 15px;
  height: 15px;
  padding: 3px;
  grid-row: 2;
  background-color: ${PALETTE.blue.light};
`;
