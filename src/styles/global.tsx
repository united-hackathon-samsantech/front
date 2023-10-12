import React from "react";
import { css, Global } from "@emotion/react";
import { ResetCSS } from "./reset";

const globalStyle = css`
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Cafe24Simplehae";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Simplehae.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "TmonMonsori";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/TmonMonsori.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: Pretendard;
    line-height: 120%;
    box-sizing: border-box;
  }

  body {
    font-weight: normal;
  }
`;

export const GlobalStyle = () => {
  return (
    <>
      <Global styles={ResetCSS} />
      <Global styles={globalStyle} />
    </>
  );
};
