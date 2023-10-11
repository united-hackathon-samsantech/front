import styled from "@emotion/styled";
import { Animals, Logo, Camera } from "@/assets";
import Image from "next/image";

const EndPage = () => {
  return (
    <>
      <BackgroundText>
        HELLO WE’
        <br />
        Remem <br />
        ber
      </BackgroundText>
      <AnimalsWrapper>
        <Image src={Animals} fill alt="" />
      </AnimalsWrapper>
      <Contents>
        <LogoWrapper>
          <Image src={Logo} fill alt="" />
        </LogoWrapper>
        <CameraButton>
          <Camera />
          <CameraText>사진 촬영하기</CameraText>
        </CameraButton>
      </Contents>
    </>
  );
};

export default EndPage;

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

const BackgroundText = styled.h1`
  @font-face {
    font-family: "TmonMonsori";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/TmonMonsori.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "TmonMonsori";
  font-size: 250px;
  font-weight: 900;
  letter-spacing: -0.7813rem;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 0.0625rem white;
  position: absolute;
  left: -40px;
  top: 20px;
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

const CameraButton = styled.button`
  display: flex;
  width: 500px;
  height: 100px;
  justify-content: center;
  align-items: center;
  gap: 28px;
  border-radius: 50px;
  background: #f76687;
`;

const CameraText = styled.span`
  color: #fff;
  font-family: Cafe24 Ssurround;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -2px;
  z-index: 10;
`;
