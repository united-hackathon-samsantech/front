/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import Image from "next/image";
import { css } from "@emotion/react";
import { useState } from "react";
import { SmallLogo } from "@/assets/frame";
import { Vector } from "@/assets";
import { FunnelStep, PhotoBoothStep } from "@/types";
import { useSetPhotoBoothStepStore } from "@/store/photoBoothStep";

const locationTags = ["바다", "산", "놀이공원", "시내"];

const emotinoTags = ["행복", "즐거움", "감동", "반가움", "사랑"];

const colors = [
  {
    name: "red",
    color: "#F54141",
  },
  {
    name: "yellow",
    color: "#FFCA0E",
  },
  {
    name: "green",
    color: "#55C720",
  },
  {
    name: "blue",
    color: "#1589F3",
  },
  {
    name: "pupple",
    color: "#6F3DFF",
  },
  {
    name: "pink",
    color: "#F773DA",
  },
  {
    name: "black",
    color: "#000000",
  },
  {
    name: "white",
    color: "#ffffff",
  },
];

const images = [
  "https://img.hankyung.com/photo/202109/BF.27474984.1-1200x.jpg",
  "https://img.hankyung.com/photo/202109/BF.27474984.1-1200x.jpg",
  "https://img.hankyung.com/photo/202109/BF.27474984.1-1200x.jpg",
  "https://img.hankyung.com/photo/202109/BF.27474984.1-1200x.jpg",
];

interface FrameProps {
  nextStep: PhotoBoothStep;
  prevStep: PhotoBoothStep;
}

const FramePage = ({ nextStep, prevStep }: FrameProps) => {
  const [location, setLocation] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const [emotion, setEmotion] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [isPicture, setIsPicture] = useState<boolean>(false);

  const [selectColor, setSelectColor] = useState<string>("");

  const submitTags = () => {
    const locationList = locationTags.filter((v, i) => location[i]).join(", ");
    const emotionList = emotinoTags.filter((v, i) => emotion[i]).join("과 ");
    const concept = isPicture ? "사진" : "일러스트";
    const sentence = `${locationList}의 배경과 ${emotionList}의 감정을 담은 ${selectColor}색 테마의 ${concept}`;
    console.log(sentence);
  };

  const setPhotoBoothStep = useSetPhotoBoothStepStore();

  return (
    <BackGround>
      <Header>
        <MoveBtn onClick={() => setPhotoBoothStep(prevStep)}>
          <Vector direction="left" />
          <BtnText>돌아가기</BtnText>
        </MoveBtn>
        <Description>프레임 생성을 위해 태그를 선택해주세요</Description>
        <MoveBtn onClick={() => setPhotoBoothStep(nextStep)}>
          <BtnText>선택 완료</BtnText>
          <Vector direction="right" />
        </MoveBtn>
      </Header>
      <Main>
        <Frame>
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
          <Title>태그 선택</Title>
          <Section>
            <SectionTitle>장소</SectionTitle>
            <Tags>
              {locationTags.map((tag, i) => (
                <Tag
                  key={i}
                  onClick={() => {
                    let newArr = [...location];
                    newArr[i] = !newArr[i];
                    setLocation(newArr);
                  }}
                  isSelect={location[i]}
                >
                  {tag}
                </Tag>
              ))}
            </Tags>
          </Section>
          <Section>
            <SectionTitle>감정</SectionTitle>
            <Tags>
              {emotinoTags.map((tag, i) => (
                <Tag
                  key={i}
                  onClick={() => {
                    let newArr = [...emotion];
                    newArr[i] = !newArr[i];
                    setEmotion(newArr);
                  }}
                  isSelect={emotion[i]}
                >
                  {tag}
                </Tag>
              ))}
            </Tags>
          </Section>
          <Section>
            <SectionTitle>컨셉</SectionTitle>
            <Tags>
              <Tag onClick={() => setIsPicture(false)} isSelect={!isPicture}>
                일러스트
              </Tag>
              <Tag onClick={() => setIsPicture(true)} isSelect={isPicture}>
                사진
              </Tag>
            </Tags>
          </Section>
          <Section>
            <SectionTitle>색상</SectionTitle>
            <Colors>
              {colors.map((color) => (
                <Color
                  onClick={() => setSelectColor(color.name)}
                  isSelect={color.name === selectColor}
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
    </BackGround>
  );
};

export default FramePage;

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

const Tags = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.button<{ isSelect: boolean }>`
  font-family: "GmarketSansMedium";
  background-color: white;
  display: flex;
  padding: 12px 47px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 2px solid ${({ isSelect }) => !isSelect && "#aaa"};
  background-color: ${({ isSelect }) => (isSelect ? "#F76687" : "#ffffff")};
  transition: ease-in-out 0.1s;

  color: ${({ isSelect }) => (isSelect ? "#ffffff" : "#676767")};
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -1.6px;
`;

const Color = styled.button<{ color: string; isSelect: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background-color: ${({ color }) => color};
  transition: ease-in-out 0.1s;
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
