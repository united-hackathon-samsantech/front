/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import Image from "next/image";
import { css } from "@emotion/react";
import { Logo } from "@/components";
import { useState } from "react";

const colors = [
  {
    color: "#000000",
    name: "black",
  },
  {
    color: "#ffffff",
    name: "white",
  },
];

const frames = [
  "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=11288788&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNS8wMi9DTFM2OS9OVVJJXzAwMV8wMjc0X251cmltZWRpYV8yMDE1MTIwMw==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006",
  "https://png.pngtree.com/background/20230610/original/pngtree-landscape-wallpaper-fb-wallpapers-picture-image_3017516.jpg",
  "https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2020/10/background-ideas-20.jpg",
];

const FrameSelectPage = () => {
  const [selectedFrame, setSelectedFrame] = useState<number>(0);

  return (
    <BackGround>
      <Main>
        <Frame
          css={css`
            ${selectedFrame < 3
              ? `background-image: url(${frames[selectedFrame]});`
              : "background: " + (selectedFrame === 3 ? "black;" : "white;  ")}
            ${selectedFrame === 4 && "border: solid 1px black"};
          `}
        ></Frame>
        <Contents>
          <Title>프레임 선택</Title>
          <Section>
            <SectionTitle>AI 지니가 생성한 프레임</SectionTitle>
            <FrameImages>
              {frames.map((image, i) => (
                <FrameImage
                  onClick={() => setSelectedFrame(i)}
                  css={
                    i === selectedFrame &&
                    css`
                      box-shadow: 15px 15px 13px #666;
                      position: relative;
                      bottom: 10px;
                      transition: ease-in-out 0.3s;
                    `
                  }
                >
                  <Image unoptimized src={image} alt="FrameImage" fill />
                </FrameImage>
              ))}
            </FrameImages>
          </Section>
          <Section>
            <SectionTitle>일반 프레임</SectionTitle>
            <Colors>
              {colors.map((color, i) => (
                <Color
                  onClick={() => setSelectedFrame(i + 3)}
                  isSelect={i + 3 === selectedFrame}
                  css={
                    color.name === "white" &&
                    css`
                      border: black 1px solid;
                    `
                  }
                  color={color.color}
                />
              ))}
            </Colors>
          </Section>
        </Contents>
      </Main>
      <Logo />
    </BackGround>
  );
};

export default FrameSelectPage;

const BackGround = styled.div`
  width: 1871px;
  height: 1000px;
  margin: 22px 0 0 22px;
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 389px;
`;

const Main = styled.div`
  display: flex;
  gap: 74px;
`;

const Frame = styled.div`
  width: 473px;
  height: 787px;
  background-color: gray;

  overflow: hidden;
  position: relative;
  transition: ease-in-out 0.2s;
  img {
    object-fit: cover;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "GmarketSansMedium";
`;

const Title = styled.h1`
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "GmarketSansMedium";
  font-size: 48px;
  color: #000;
  font-weight: 700;
  letter-spacing: -2.4px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.span`
  color: #f76687;
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "GmarketSansMedium";
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -1.6px;
`;

const FrameImages = styled.div`
  display: flex;
  gap: 22px;
`;

const FrameImage = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  background: #d9d9d9;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img {
    object-fit: cover;
  }
`;

const Color = styled.button<{ color: string; isSelect: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background-color: ${({ color }) => color};
  ${({ isSelect, color }) =>
    isSelect &&
    "box-shadow: 0 0 10px 5px " + (color === "#ffffff" ? "gray" : color)};
`;

const Colors = styled.div`
  display: flex;
  gap: 12px;
`;
