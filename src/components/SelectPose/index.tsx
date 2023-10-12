import { FunnelStep, PhotoBoothStep } from "@/types";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "../common/Button";
import Column from "../common/Flex/Column";
import Row from "../common/Flex/Row";
import Text from "../common/Text";
import { useSetPhotoBoothStepStore } from "@/store/photoBoothStep";
import { instance } from "@/apis/core";
import { useRandomPhotoStore } from "@/store/photoRandom";
import { usePoseInfoAtomStateValueStore } from "@/store/poseInfo";
import Image from "next/image";

interface SelectPoseProps {
  prevStep: PhotoBoothStep;
  nextStep: PhotoBoothStep;
}

const SelectPose = ({ nextStep, prevStep }: SelectPoseProps) => {
  const [randomPosePhoto, setRandomPosePhoto] = useRandomPhotoStore();
  const webcamRef = useRef<Webcam>(null);

  const setPhotoBoothStep = useSetPhotoBoothStepStore();
  const poseInfo = usePoseInfoAtomStateValueStore();

  const getRandomPhoto = async () => {
    try {
      const { data } = await instance.get(
        `/photo/list/${poseInfo === 0 ? 1 : poseInfo}`
      );
      const randomOfNumber = Math.floor(Math.random() * 5);
      setRandomPosePhoto(data?.photo_list[randomOfNumber]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRandomPhoto();
  }, []);

  return (
    <StyledSelectPost>
      <StyledHeader>
        <Button icon="PREV" onClick={() => setPhotoBoothStep(prevStep)}>
          돌아가기
        </Button>
        <Text size="28px" weight={600}>
          원하는 포즈를 선택하세요
        </Text>
        <Button icon="NEXT" onClick={() => setPhotoBoothStep(nextStep)}>
          선택 완료
        </Button>
      </StyledHeader>
      <Row
        style={{ marginTop: "100px" }}
        justifyContent="center"
        alignItems="flex-start"
        gap="100px"
        width="100%"
      >
        <Webcam
          ref={webcamRef}
          width={730}
          audio={false}
          screenshotFormat="image/jpeg"
        />
        <Column gap="24px" alignItems="center" justifyContent="space-between">
          <img
            width={300}
            height={500}
            src={randomPosePhoto ?? ""}
            alt="Recommend Pose"
          />
          <Button
            style={{
              width: "280px",
              height: "60px",
              fontSize: "24px",
              justifyContent: "center",
            }}
            icon="NEXT"
            onClick={() => getRandomPhoto()}
          >
            다른 포즈 추천받기
          </Button>
        </Column>
      </Row>
    </StyledSelectPost>
  );
};

export default SelectPose;

const StyledSelectPost = styled.div`
  padding: 24px;
  width: 100vw;
  height: 100vh;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
