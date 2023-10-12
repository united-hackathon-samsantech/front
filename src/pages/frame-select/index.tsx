/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import Image from "next/image";
import { css } from "@emotion/react";
import { Logo } from "@/components";
import { useState } from "react";
import { SmallLogo } from "@/assets/frame";
import { Vector } from "@/assets";

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

const images = [
  "https://img.hankyung.com/photo/202109/BF.27474984.1-1200x.jpg",
  "https://img.hankyung.com/photo/202109/BF.27474984.1-1200x.jpg",
  "https://img.hankyung.com/photo/202109/BF.27474984.1-1200x.jpg",
  "https://img.hankyung.com/photo/202109/BF.27474984.1-1200x.jpg",
];

const frames = [
  "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=11288788&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNS8wMi9DTFM2OS9OVVJJXzAwMV8wMjc0X251cmltZWRpYV8yMDE1MTIwMw==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006",
  "https://png.pngtree.com/background/20210709/original/pngtree-spray-powder-glare-colorful-background-picture-image_623477.jpg",
  "https://toktok.io/wp-content/uploads/iphone-13-official-wallpaper.jpg",
];

const FrameSelectPage = () => {
  const [selectedFrame, setSelectedFrame] = useState<number>(0);

  return (
    <BackGround>
      <Header>
        <MoveBtn>
          <Vector direction="left" />
          <BtnText>돌아가기</BtnText>
        </MoveBtn>
        <Description>프레임 생성을 위해 태그를 선택해주세요</Description>
        <MoveBtn>
          <BtnText>인쇄 하기</BtnText>
          <Vector direction="right" />
        </MoveBtn>
      </Header>
      <Main>
        <Frame
          css={css`
            ${selectedFrame < 3
              ? `background-image: url(${frames[selectedFrame]});`
              : "background: " + (selectedFrame === 3 ? "black;" : "white;  ")}
            background-size: cover;
            ${selectedFrame === 4 && "border: solid 1px black"};
          `}
        >
          <ImageContainer>
            {images.map((image) => (
              <Image
                alt={image}
                src={image}
                width={186}
                height={251}
                unoptimized
              />
            ))}
          </ImageContainer>
          <Image src={SmallLogo} alt="logo" width={159} height={85} />
        </Frame>
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
            <ReCreateWrapper>
              <MoveBtn>
                <BtnText>재생성 하기</BtnText>
                <Vector direction="right" />
              </MoveBtn>
            </ReCreateWrapper>
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
`;

const Main = styled.div`
  padding-left: 389px;
  display: flex;
  gap: 74px;
`;

const Frame = styled.div`
  width: 473px;
  height: 787px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 88px;
  gap: 32px;

  transition: ease-in-out 0.2s;
`;

const ImageContainer = styled.div`
  width: 392px;
  height: 532px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px 16px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  font-family: "GmarketSansMedium";
`;

const Title = styled.h1`
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

const Header = styled.div`
  width: calc(100vw - 100px);
  display: flex;
  padding: 45px 46px 72px 46px;
  justify-content: space-between;
`;

const MoveBtn = styled.button`
  display: inline-flex;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  gap: 12px;
  background: #f76687;
`;

const BtnText = styled.span`
  color: #fff;
  font-family: "Cafe24Simplehae";
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1.6px;
`;

const Description = styled.p`
  color: #000;
  font-size: 48px;
  font-weight: 400;
  letter-spacing: -2.4px;
  font-family: "GmarketSansMedium";
`;

const ReCreateWrapper = styled.div`
  margin: 27px 0 60px;
`;
