import React from "react";
import { Global, css } from "@emotion/react";
import { URBANIST } from "..";

function GlobalStyle() {
  const globalStyle = css`
    body {
      margin: 0;
    }
    #__next {
      width: 100vw;
      height: 100vh;
      background-color: white;
      font-family: ${URBANIST.bold};
      & > * {
        box-sizing: border-box;
      }
    }
    button,
    input,
    a,
    link {
      all: unset;
      cursor: pointer;
    }
  `;

  return <Global styles={globalStyle} />;
}

export default GlobalStyle;
