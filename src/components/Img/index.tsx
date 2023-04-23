import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import * as T from "../../types/components";

function Img({ src, size, alt, className }: T.ImgProps) {
  return (
    <Container
      src={src}
      width={size.w}
      height={size.h}
      alt={alt}
      className={className}
      priority
    />
  );
}

export default Img;

const Container = styled(Image)`
  width: 100%;
  height: 100%;
`;
