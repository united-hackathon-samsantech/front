import React from "react";
import { css, Global } from "@emotion/react";
import { ResetCSS } from "./reset";

const globalStyle = css`
  * {
    box-sizing: border-box;
    font-weight: 600;
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
