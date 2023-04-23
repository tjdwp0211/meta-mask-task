import React from "react";
import styled from "@emotion/styled";
import * as T from "../../types/components";

function Text({ family, size, className, children }: T.TextProps) {
  return (
    <TextContainer family={family} size={size} className={className}>
      {children}
    </TextContainer>
  );
}

export default Text;

const TextContainer = styled.p<Pick<T.TextProps, "family" | "size">>`
  font-family: ${props => props.family};
  font-size: ${props => props.size}px;
  margin: 0;
`;
