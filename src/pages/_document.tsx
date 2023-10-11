import { Html, Head, Main, NextScript } from "next/document";
import styled from "@emotion/styled";
import Image from "next/image";
import { Rectangle } from "@/assets";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <Body>
        <RectangleWrapper>
          <Image src={Rectangle} fill alt="" />
        </RectangleWrapper>
        <Main />
        <NextScript />
      </Body>
    </Html>
  );
};

export default Document;

const RectangleWrapper = styled.div`
  width: 1028px;
  height: 1080px;
  position: absolute;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

const Body = styled.body`
  overflow-y: hidden;
`;
