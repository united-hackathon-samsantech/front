import { FunnelStep, PhotoBoothStep } from "@/types";

import styled from "@emotion/styled";
import { Animals, Logo, Camera } from "@/assets";
import Image from "next/image";
import { useSetPhotoBoothStepStore } from "@/store/photoBoothStep";

interface MainProps {
  nextStep: PhotoBoothStep;
}

const Main = ({ nextStep }: MainProps) => {
  const setPhotoBoothStep = useSetPhotoBoothStepStore();

  return (
    <>
      <BackgroundText>
        HELLO WE’
        <br />
        Remem <br />
        ber
      </BackgroundText>
      <RabbitWrapper>
        <Image src={Animals} fill alt="Animals" />
      </RabbitWrapper>
      <Contents>
        <LogoWrapper>
          <Image src={Logo} fill alt="Logo" />
        </LogoWrapper>
        <CameraButton onClick={() => setPhotoBoothStep(nextStep)}>
          <Camera />
          <CameraText>사진 촬영하기</CameraText>
        </CameraButton>
      </Contents>
    </>
  );
};

export default Main;

const ImageWrapper = styled.div`
  position: absolute;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

const RabbitWrapper = styled(ImageWrapper)`
  width: 505px;
  height: 505px;
  top: 225px;
  left: 345px;
`;

const LogoWrapper = styled(ImageWrapper)`
  position: relative;
  width: 427px;
  height: 303px;
`;

const BackgroundText = styled.h1`
  font-family: "TmonMonsori";
  font-size: 220px;
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
  top: 259px;
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
  width: 400px;
  height: 80px;
  justify-content: center;
  align-items: center;
  gap: 28px;
  border-radius: 50px;
  background: #f76687;
`;

const CameraText = styled.span`
  color: #fff;
  font-family: Cafe24 Ssurround;
  font-size: 35px;
  font-weight: 700;
  letter-spacing: -2px;
  z-index: 10;
`;
