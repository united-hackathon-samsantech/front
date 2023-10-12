import { FunnelStep, PhotoBoothStep } from "@/types";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "../common/Button";
import Column from "../common/Flex/Column";
import Row from "../common/Flex/Row";
import Image from "next/image";
import Text from "../common/Text";
import RecommendPoseImage from "../../assets/images/recommend-pose.png";
import { useSetPhotoBoothStepStore } from "@/store/photoBoothStep";
import { instance } from "@/apis/core";
import { useRandomPhotoStore } from "@/store/photoRandom";

interface SelectPoseProps {
  prevStep: PhotoBoothStep;
  nextStep: PhotoBoothStep;
}

const SelectPose = ({ nextStep, prevStep }: SelectPoseProps) => {
  const [randomPosePhoto, setRandomPosePhoto] = useRandomPhotoStore();
  const webcamRef = useRef<Webcam>(null);
  const setPhotoBoothStep = useSetPhotoBoothStepStore();

  const getRandomPhoto = async () => {
    try {
      const { data } = await instance.get(`/photo/list/1`);
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
          <img
            width={300}
            height={500}
            src={randomPosePhoto ?? ""}
            alt="Recommend Pose"
          />
          <Button icon="NEXT" onClick={() => getRandomPhoto()}>
            다른 포즈 추천받기
          </Button>
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
