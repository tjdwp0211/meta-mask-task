import React from "react";
import Image from "next/image";

interface ImgProps {
  src: string;
  size: { w: number; h: number };
  alt: string;
}

function Img({ src, size, alt }: ImgProps) {
  return <Image src={src} width={size.w} height={size.h} alt={alt} priority />;
}

export default Img;
