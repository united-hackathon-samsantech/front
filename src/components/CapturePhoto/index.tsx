import { FunnelStep, PhotoBoothStep } from "@/types";

import { usePhotosStore } from "@/store/photos";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "../common/Button";
import Row from "../common/Flex/Row";
import Column from "../common/Flex/Column";
import Text from "../common/Text";
import RecommendPoseImage from "../../assets/images/recommend-pose.png";
import Image from "next/image";
import { useSetPhotoBoothStepStore } from "@/store/photoBoothStep";
import ProgressBar from "./ProgressBar";
import { clear } from "console";
import { useRandomPhotoValueStore } from "@/store/photoRandom";

interface CapturePhotoProps {
  prevStep: PhotoBoothStep;
}

const CapturePhoto = ({ prevStep }: CapturePhotoProps) => {
  const webcamRef = useRef<Webcam>(null);
  const setPhotoBoothStep = useSetPhotoBoothStepStore();
  const [photos, setPhotos] = usePhotosStore();
  const [progress, setProgress] = useState(60);
  const randomPosePhoto = useRandomPhotoValueStore();

  const capturePhoto = () => {
    const photo = webcamRef.current?.getScreenshot();

    if (photo) {
      setPhotos((prev) => [...prev, photo]);
    }
  };

  const runTimer = (repeats: number) => {
    let count = 0;
    const intervalId = setInterval(() => {
      count++;
      if (count >= repeats) {
        clearInterval(intervalId);
        setPhotoBoothStep("프레임선택");
      } else {
        capturePhoto();
        setProgress(60);
        newRunTimer(60);
      }
    }, 6000);
  };

  const newRunTimer = (repeats: number) => {
    let count = 0;
    const intervalId = setInterval(() => {
      count++;
      if (count >= repeats) {
        clearInterval(intervalId);
      } else {
        setProgress((prev) => prev - 1);
      }
    }, 100);
  };

  useEffect(() => {
    runTimer(5);
  }, []);

  return (
    <StyledCapturePhoto>
      <StyledHeader>
        <Button icon="PREV" onClick={() => setPhotoBoothStep(prevStep)}>
          돌아가기
        </Button>
        <Text size="28px" weight={600}>
          사진 촬영을 시작합니다
        </Text>
        <div />
      </StyledHeader>
      <Column alignItems="center">
        <ProgressBar max={6} available={progress} />
        <Row
          style={{ marginTop: "60px" }}
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
          <Column gap="36px" justifyContent="center" alignItems="center">
            <Column gap="5px">
              <Text size="24px" weight={700}>
                AI 지니의 추천 포즈
              </Text>
              <img
                width={300}
                height={400}
                src={randomPosePhoto ?? ""}
                alt="Recommend Pose"
              />
            </Column>
            <Column gap="5px">
              <Text size="32px" weight={700}>
                사진 촬영
              </Text>
              <Text color="#F76687" size="96px" weight={700}>
                {photos.length}/4
              </Text>
            </Column>
          </Column>
        </Row>
      </Column>
    </StyledCapturePhoto>
  );
};

export default CapturePhoto;

const StyledCapturePhoto = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 24px;
  background-color: #ffffff;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
