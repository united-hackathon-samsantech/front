import styled from "@emotion/styled";
import { Animals, Logo } from "@/assets";
import Image from "next/image";
import { PhotoBoothStep } from "@/types";
import Button from "../common/Button";
import { useSetPhotoBoothStepStore } from "@/store/photoBoothStep";
import Text from "../common/Text";

interface CompleteProps {
  nextStep: PhotoBoothStep;
}

const Complete: React.FC<CompleteProps> = ({ nextStep }) => {
  const setPhotoBoothStep = useSetPhotoBoothStepStore();

  return (
    <BackGround>
      <StyledHeader>
        <div style={{ width: "200px" }}></div>
        <Text size="28px" weight={600}>
          프레임 생성을 위해 태그를 선택해주세요
        </Text>
        <Button icon="NEXT" onClick={() => setPhotoBoothStep(nextStep)}>
          메인으로
        </Button>
      </StyledHeader>
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

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
