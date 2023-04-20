import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

interface ImgProps {
  src: string;
  size: { w: number; h: number };
  alt: string;
  className?: string;
}

function Img({ src, size, alt, className }: ImgProps) {
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
