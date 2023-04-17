import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

function index() {
  return (
    <Wrapper>
      HELLO WORLD
      <Image
        src={"/renaissance-lab.svg"}
        width={100}
        height={24}
        alt="logo"
      ></Image>
    </Wrapper>
  );
}

export default index;

const Wrapper = styled.div``;
