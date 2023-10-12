import styled from "@emotion/styled";
import Image from "next/image";
import { PhotoRabbit, PoseIcon } from "@/assets";
import * as faceapi from "face-api.js";
import React, { useState, useRef, useEffect } from "react";
import { PhotoBoothStep } from "@/types";
import Text from "../common/Text";
import Button from "../common/Button";
import { useSetPhotoBoothStepStore } from "@/store/photoBoothStep";
import { useSetPoseInfoAtomStateStore } from "@/store/poseInfo";

type Gender = "male" | "female" | null;

interface PostPreferenceProps {
  nextStep: PhotoBoothStep;
  prevStep: PhotoBoothStep;
}

const PostPreference = ({ nextStep, prevStep }: PostPreferenceProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const setPoseInfo = useSetPoseInfoAtomStateStore();
  const setPhotoBoothStep = useSetPhotoBoothStepStore();

  const [maxage, setMaxage] = useState<number>(0);
  const [minage, setMinage] = useState<number>(100);
  const [gender, setGender] = useState<Gender>(null);
  const [male, isMale] = useState(0);
  const [female, isFemale] = useState(0);
  const [poseNumber, setPoseNumber] = useState(0);

  useEffect(() => {
    startVideo();
    videoRef && loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = currentStream;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadModels = async () => {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/model"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/model"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/model"),
      faceapi.nets.faceExpressionNet.loadFromUri("/model"),
      faceapi.nets.ageGenderNet.loadFromUri("/model"),
    ]);

    faceMyDetect();
  };

  const meanAge = (age: number) => {
    if (age < minage) {
      setMinage(age);
    } else if (age > maxage) {
      setMaxage(age);
    }
  };

  const setPoseCode = () => {
    if (male == 1 && female == 1) {
      setPoseInfo(2);
    } else if (maxage - minage < 10) {
      setPoseInfo(5);
    }
  };

  const faceMyDetect = () => {
    setInterval(async () => {
      if (videoRef.current) {
        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks()
          .withFaceExpressions()
          .withAgeAndGender();

        if (canvasRef.current) {
          const canvas = faceapi.createCanvasFromMedia(videoRef.current);
          canvasRef.current.innerHTML = ""; // Clear previous content if any
          canvasRef.current.appendChild(canvas);
          faceapi.matchDimensions(canvasRef.current, {
            width: 940,
            height: 650,
          });

          const resized = faceapi.resizeResults(detections, {
            width: 940,
            height: 650,
          });

          faceapi.draw.drawDetections(canvasRef.current, resized);
          faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
          faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
          if (detections.length > 2) {
            setPoseInfo(3);
          } else if (detections.length === 1) {
            setPoseInfo(1);
          } else if (detections.length > 1) {
            detections.forEach((detection) => {
              if (detection.gender === "male") {
                isMale((counter) => counter + 1);
              } else if (detection.gender === "female") {
                isFemale((counter) => counter + 1);
              }
              meanAge(detection.age);
              setPoseInfo(2);
            });
          }
        }
      }
    }, 1000);
  };

  return (
    <BackGround>
      <StyledHeader>
        <Button icon="PREV" onClick={() => setPhotoBoothStep(prevStep)}>
          돌아가기
        </Button>
        <Text size="28px" weight={600}>
          포즈 선택
        </Text>
        <Button icon="NEXT" onClick={() => setPhotoBoothStep(nextStep)}>
          넘어가기
        </Button>
      </StyledHeader>
      <div className="myapp" style={{ display: "none" }}>
        <div className="appvide">
          <video crossOrigin="anonymous" ref={videoRef} autoPlay></video>
        </div>
        <canvas
          ref={canvasRef}
          width="940"
          height="650"
          className="appcanvas"
          style={{ display: "none" }}
        />
      </div>

      <Main>
        <Contents>
          <Image src={PhotoRabbit} alt="" width={300} height={300} />
          <StyledText>
            AI 지니가 인생사진을 위해 포즈를 준비했어요
            <br />
            포즈를 추천 받으시겠어요?
            <br />
          </StyledText>
          <StartButton>
            <Image src={PoseIcon} alt="" width={50} height={50} />
            포즈 추천 받기
          </StartButton>
        </Contents>
      </Main>
    </BackGround>
  );
};

export default PostPreference;

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 74px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "GmarketSansMedium";
`;

const StyledText = styled.h5`
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "GmarketSansMedium";
  font-size: 36px;
  color: #000;
  font-weight: 600;
  letter-spacing: -2.4px;
  text-align: center;
`;

const StartButton = styled.button`
  @font-face {
    font-family: "Cafe24Ssurround";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 20vw;
  height: 8vh;
  letter-spacing: -2px;
  column-gap: 10px;
  font-family: "Cafe24Ssurround";
  background-color: #f76687;
  color: white;
  border-radius: 100px;

  font-size: 2em;
`;
