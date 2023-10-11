import styled from "@emotion/styled";
import { Rabit } from "@/assets";
import Image from "next/image";

const Loading = () => {
  return (
    <ContentWrapper>
      <Image src={Rabit} alt="rabit" width={337} height={337} />
      <LoadingText>
        AI 지니가 프레임을 생성중이에요 잠시만 기다려주세요
      </LoadingText>
    </ContentWrapper>
  );
};

export default Loading;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 41px;
  align-items: center;
`;

const LoadingText = styled.p`
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "GmarketSansMedium";
  color: #000;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: -2px;
`;
