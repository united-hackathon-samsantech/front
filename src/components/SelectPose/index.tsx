import { FunnelStep } from "@/types";
import styled from "@emotion/styled";
import { useRef } from "react";
import Webcam from "react-webcam";
import Button from "../common/Button";
import Column from "../common/Flex/Column";
import Row from "../common/Flex/Row";
import Image from "next/image";
import Text from "../common/Text";
import RecommendPoseImage from "../../assets/images/recommend-pose.png";

interface SelectPoseProps extends FunnelStep {}

const SelectPose = ({ nextStep, prevStep }: SelectPoseProps) => {
  const webcamRef = useRef<Webcam>(null);

  return (
    <StyledSelectPost>
      <StyledHeader>
        <Button icon="PREV">돌아가기</Button>
        <Text size="28px" weight={600}>
          원하는 포즈를 선택하세요
        </Text>
        <Button icon="NEXT">선택 완료</Button>
      </StyledHeader>
      <Row
        style={{ marginTop: "60px" }}
        justifyContent="center"
        gap="100px"
        width="100%"
      >
        <Webcam
          ref={webcamRef}
          width={800}
          audio={false}
          screenshotFormat="image/jpeg"
        />
        <Column alignItems="center" justifyContent="space-between">
          <Image height={520} src={RecommendPoseImage} alt="Recommend Pose" />
          <Button icon="NEXT">다른 포즈 추천받기</Button>
        </Column>
      </Row>
    </StyledSelectPost>
  );
};

export default SelectPose;

const StyledSelectPost = styled.div`
  padding: 16px;
  width: 100vw;
  height: 100vh;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
