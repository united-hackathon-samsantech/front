/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import Image from "next/image";
import { css } from "@emotion/react";
import { Logo } from "@/components";
import { useEffect, useState } from "react";
import { SmallLogo } from "@/assets/frame";
import { FunnelStep, PhotoBoothStep } from "@/types";
import { useSetPhotoBoothStepStore } from "@/store/photoBoothStep";
import Button from "../common/Button";
import { Configuration, OpenAIApi } from "openai";
import { useTranslatedTextStore } from "@/store/translatedText";
import axios from "axios";
import { Loading } from "@/components";
import Text from "../common/Text";

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

interface FinalSelectProps {
  nextStep: PhotoBoothStep;
  prevStep: PhotoBoothStep;
}

const FinalSelect = ({ nextStep, prevStep }: FinalSelectProps) => {
  const configuration = new Configuration({
    apiKey: localStorage.getItem("key") as string,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setIsLoad(false);
    const res = await openai.createImage({
      prompt: inputValue[0],
      n: 3,
      size: "512x512",
    });
    let imageArr = [];
    imageArr = res.data.data.map((v) => v.url ?? "");
    setResult(imageArr);
    setIsLoad(true);
  };

  const getAPIKey = async () => {
    const { data } = await axios.post(
      "http://api.h4u.kro.kr:7070/api/openai-key",
      {
        teamKey: "ea0f36c1-57a8-4ab1-bd1f-b458b4001ab9",
      }
    );

    localStorage.setItem("key", data.token);
  };

  const inputValue = useTranslatedTextStore();

  const [selectedFrame, setSelectedFrame] = useState<number>(0);
  const [result, setResult] = useState<string[]>([]);

  const [isLoad, setIsLoad] = useState<boolean>(false);

  const setPhotoBoothStep = useSetPhotoBoothStepStore();

  useEffect(() => {
    getAPIKey();
    generateImage();
  }, []);

  return (
    <>
      {isLoad ? (
        <BackGround>
          <StyledHeader>
            <Button icon="PREV" onClick={() => setPhotoBoothStep(prevStep)}>
              돌아가기
            </Button>
            <Text size="28px" weight={600}>
              프레임을 선택해주세요
            </Text>
            <Button icon="NEXT" onClick={() => setPhotoBoothStep(nextStep)}>
              선택 완료
            </Button>
          </StyledHeader>
          <Header>
            <Button icon="PREV" onClick={() => setPhotoBoothStep(prevStep)}>
              돌아가기
            </Button>
            <Description>프레임 생성을 위해 태그를 선택해주세요</Description>
            <Button icon="NEXT" onClick={() => setPhotoBoothStep(nextStep)}>
              인쇄하기
            </Button>
          </Header>
          <Main>
            <Frame
              css={css`
                ${selectedFrame < 3
                  ? `background-image: url(${result[selectedFrame]});`
                  : "background: " +
                    (selectedFrame === 3 ? "black;" : "white;  ")}
                background-size: cover;
                ${selectedFrame === 4 && "border: solid 1px black"};
              `}
            >
              <ImageContainer>
                {images.map((image) => (
                  <Image
                    alt={image}
                    src={image}
                    width={163}
                    height={221}
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
                  {result.map((image, i) => (
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
                  <Button icon="NEXT" onClick={generateImage}>
                    재생성하기
                  </Button>
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default FinalSelect;

const BackGround = styled.div`
  width: 1671px;
  height: 1000px;
  margin: 22px 0 0 22px;
  background-color: white;
`;

const Main = styled.div`
  padding-left: 289px;
  display: flex;
  gap: 74px;
`;

const Frame = styled.div`
  width: 420px;
  height: 700px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 58px;
  gap: 22px;

  transition: ease-in-out 0.2s;
`;

const ImageContainer = styled.div`
  width: 342px;
  height: 462px;
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
  font-size: 40px;
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
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -1.6px;
`;

const FrameImages = styled.div`
  display: flex;
  gap: 22px;
`;

const FrameImage = styled.div`
  width: 200px;
  height: 200px;
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
  width: 70px;
  height: 70px;
  border-radius: 15px;
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
  padding: 45px 46px 32px 46px;
  justify-content: space-between;
  margin-left: 20px;
`;

const Description = styled.p`
  color: #000;
  font-size: 38px;
  font-weight: 400;
  letter-spacing: -2.4px;
  font-family: "GmarketSansMedium";
`;

const ReCreateWrapper = styled.div`
  margin: 27px 0 60px;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
