import styled from "@emotion/styled";
import { Animals, Logo } from "@/assets";
import Image from "next/image";
import { PhotoBoothStep } from "@/types";
import Button from "../common/Button";

interface CompleteProps {
  nextStep: PhotoBoothStep;
  prevStep: PhotoBoothStep;
}

const Complete: React.FC<CompleteProps> = ({ nextStep, prevStep }) => {
  function setPhotoBoothStep(prevStep: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    <BackGround>
      <Header>
        <Description>지니포토가 인쇄되고 있어요</Description>
        <Button icon="NEXT" onClick={() => setPhotoBoothStep(nextStep)}>
          메인으로
        </Button>
      </Header>
      <AnimalsWrapper>
        <Image src={Animals} fill alt="" />
      </AnimalsWrapper>
      <Contents>
        <LogoWrapper>
          <Image src={Logo} fill alt="" />
        </LogoWrapper>
        <CompleteText>이용해주셔서 감사합니다</CompleteText>
      </Contents>
    </BackGround>
  );
};

export default Complete;

const BackGround = styled.div`
  width: 1671px;
  height: 1000px;
  margin: 22px 0 0 22px;
  background-color: white;
`;

const ImageWrapper = styled.div`
  position: absolute;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

const AnimalsWrapper = styled(ImageWrapper)`
  width: 505px;
  height: 505px;
  top: 225px;
  left: 305px;
`;

const LogoWrapper = styled(ImageWrapper)`
  position: relative;
  width: 457px;
  height: 333px;
`;

const Contents = styled.div`
  position: absolute;
  top: 279px;
  right: 287px;
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

const CompleteText = styled.span`
  color: #f76687;

  font-family: "Cafe24Simplehae";
  font-size: 48px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -4.8px;
`;

const Header = styled.div`
  width: calc(100vw - 100px);
  display: flex;
  padding: 45px 46px 32px 656px;
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
