import { GlobalStyle } from "@/styles/global";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <GlobalStyle />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
