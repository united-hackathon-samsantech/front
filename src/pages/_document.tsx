import { Html, Head, Main, NextScript } from "next/document";
import styled from "@emotion/styled";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <Body>
        <Main />
        <NextScript />
      </Body>
    </Html>
  );
};

export default Document;

const Body = styled.body`
  overflow-y: hidden;
`;
