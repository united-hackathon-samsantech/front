import styled from "@emotion/styled";
import { Rabit } from "@/assets";
import Image from "next/image";
import { Logo } from "@/components";

const Loading = () => {
  return (
    <BackGround>
      <ContentWrapper>
        <Image src={Rabit} alt="rabit" width={337} height={337} />
        <LoadingText>
          AI 지니가 프레임을 생성중이에요 잠시만 기다려주세요
        </LoadingText>
      </ContentWrapper>
      <Logo />
    </BackGround>
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
  color: #000;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: -2px;
`;

const BackGround = styled.div`
  padding-top: 200px;
  width: 1671px;
  height: 1000px;
  margin: 22px 0 0 22px;
  background-color: white;
`;
