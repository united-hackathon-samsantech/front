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
  nextStep: PhotoBoothStep;
}

const CapturePhoto = ({ prevStep, nextStep }: CapturePhotoProps) => {
  const webcamRef = useRef<Webcam>(null);
  const setPhotoBoothStep = useSetPhotoBoothStepStore();
  const [photos, setPhotos] = usePhotosStore();
  const [progress, setProgress] = useState(60);
  const randomPosePhoto = useRandomPhotoValueStore();
  const [startNumber, setStartNumber] = useState(0);

  useEffect(() => {
    let captureTimeout: NodeJS.Timeout;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        clearTimeout(captureTimeout);

        captureTimeout = setTimeout(() => {
          setStartNumber(1);
        }, 1000);

        captureTimeout = setTimeout(() => {
          setStartNumber(2);
        }, 2000);

        captureTimeout = setTimeout(() => {
          setStartNumber(3);
        }, 3000);

        captureTimeout = setTimeout(() => {
          setStartNumber(4);
          capturePhoto();
        }, 4000);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      clearTimeout(captureTimeout);
    };
  }, []);

  const capturePhoto = () => {
    const photo = webcamRef.current?.getScreenshot();

    if (photo) {
      setPhotos((prev) => [...prev, photo]);
    }
  };

  useEffect(() => {
    if (photos.length === 4) {
      setPhotoBoothStep("프레임선택");
    }
  }, [photos.length]);

  return (
    <StyledCapturePhoto>
      <StyledHeader>
        <Button icon="PREV" onClick={() => setPhotoBoothStep(prevStep)}>
          돌아가기
        </Button>
        <Text size="28px" weight={600}>
          스페이스바를 누르면 촬영이 돼요
        </Text>
        <Button
          icon="NEXT"
          onClick={() => setPhotoBoothStep(nextStep)}
          disabled={photos.length !== 4}
        >
          촬영완료
        </Button>
      </StyledHeader>
      <Row justifyContent="center" alignItems="center" gap="64px">
        {startNumber === 4 ? (
          <Text size="87px" color="#F76687">
            찰칵 ✨
          </Text>
        ) : (
          <>
            <Text size="87px" color={startNumber === 1 ? "#F76687" : "#E2E2E2"}>
              1
            </Text>
            <Text size="87px" color={startNumber === 2 ? "#F76687" : "#E2E2E2"}>
              2
            </Text>
            <Text size="87px" color={startNumber === 3 ? "#F76687" : "#E2E2E2"}>
              3
            </Text>
          </>
        )}
      </Row>
      <Column alignItems="center">
        <Row
          style={{ marginTop: "45px" }}
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
  margin-bottom: 40px;
`;
