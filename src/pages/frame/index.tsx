/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import Image from "next/image";
import { css } from "@emotion/react";
import { useState } from "react";

const locationTags = ["바다", "산", "놀이공원", "시내"];

const emotinoTags = ["행복", "즐거움", "감동", "반가움", "사랑"];

const conceptTags = ["일러스트", "사진"];

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

const FramePage = () => {
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

  const [concept, setConcept] = useState<"illustration" | "picture" | "">("");

  const [selectColor, setSelectColor] = useState<string>("");

  return (
    <BackGround>
      <Main>
        <Frame />
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
              <Tag
                onClick={() => setConcept("illustration")}
                isSelect={concept === "illustration"}
              >
                일러스트
              </Tag>
              <Tag
                onClick={() => setConcept("picture")}
                isSelect={concept === "picture"}
              >
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

const Tags = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.button<{ isSelect: boolean }>`
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
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
