import styled from "@emotion/styled";
import { Animals, Logo } from "@/assets";
import Image from "next/image";

const Outro = () => {
  return (
    <BackGround>
      <AnimalsWrapper>
        <Image src={Animals} fill alt="" />
      </AnimalsWrapper>
      <Contents>
        <LogoWrapper>
          <Image src={Logo} fill alt="" />
        </LogoWrapper>
        <OutroText>이용해주셔서 감사합니다</OutroText>
      </Contents>
    </BackGround>
  );
};

export default Outro;

const BackGround = styled.div`
  width: 1871px;
  height: 1000px;
  margin: 20px 0 0 22px;
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 389px;
`;

const ImageWrapper = styled.div`
  position: absolute;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

const AnimalsWrapper = styled(ImageWrapper)`
  width: 605px;
  height: 605px;
  top: 265px;
  left: 345px;
`;

const LogoWrapper = styled(ImageWrapper)`
  position: relative;
  width: 477px;
  height: 343px;
`;

const Contents = styled.div`
  position: absolute;
  top: 359px;
  right: 277px;
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

const OutroText = styled.span`
  color: #f76687;
  @font-face {
    font-family: "Cafe24Simplehae";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Simplehae.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "Cafe24Simplehae";
  font-size: 48px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -4.8px;
`;
