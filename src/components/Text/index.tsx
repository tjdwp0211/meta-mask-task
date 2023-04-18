import React from "react";
import styled from "@emotion/styled";

interface TextProps {
  family: string;
  size: number;
  children: React.ReactNode;
  className?: string;
}

function Text({ family, size, className, children }: TextProps) {
  return (
    <TextContainer family={family} size={size} className={className}>
      {children}
    </TextContainer>
  );
}

export default Text;

const TextContainer = styled.p<Pick<TextProps, "family" | "size">>`
  font-family: ${props => props.family};
  font-size: ${props => props.size};
  margin: 0;
`;
