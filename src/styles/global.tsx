import React from "react";
import { css, Global } from "@emotion/react";
import { ResetCSS } from "./reset";

const globalStyle = css`
  * {
    line-height: normal;

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
