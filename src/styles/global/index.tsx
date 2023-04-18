import React from "react";
import { Global, css } from "@emotion/react";

function GlobalStyle() {
  const globalStyle = css`
    body {
      margin: 0;
    }
    #__next {
      width: 100vw;
      height: 100vh;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  return <Global styles={globalStyle} />;
}

export default GlobalStyle;
