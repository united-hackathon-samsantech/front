import { Html, Head, Main, NextScript } from "next/document";
import styled from "@emotion/styled";
import Image from "next/image";
import { Rectangle } from "@/assets";

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
  display: flex;
`;
