import styled from "@emotion/styled";
import Image from "next/image";
import { css } from "@emotion/react";
import { Logo } from "@/components";
import { PhotoRabbit, PoseBtn, PoseIcon } from "@/assets";
// import * as canvas from "canvas";
import * as faceapi from "face-api.js";
import React, { useState, useRef, useEffect } from "react";

// const { Canvas, Images, ImageData } = canvas;
// faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

type Gender = "male" | "female" | null;

const GenderAnalysis = () => {
  const videoRef = useRef();
  const canvasRef = useRef();

  const [age, setAge] = useState(0);
  const [gender, setGender] = useState<Gender>(null);

  useEffect(() => {
    startVideo();
    videoRef && loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadModels = () => {
    Promise.all([
      // THIS FOR FACE DETECT AND LOAD FROM YOU PUBLIC/MODELS DIRECTORY
      faceapi.nets.tinyFaceDetector.loadFromUri("/model"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/model"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/model"),
      faceapi.nets.faceExpressionNet.loadFromUri("/model"),
      faceapi.nets.ageGenderNet.loadFromUri("/model"),
    ]).then(() => {
      faceMyDetect();
    });
  };

  const genderClassification = () => {};

  const AgeClassification = () => {};

  const faceMyDetect = () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
        .withAgeAndGender();

      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(
        videoRef.current
      );
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

      if (detections.length > 1) {
        console.log(detections.length, "명입니다");
        detections.map((i) => {
          console.log(i);
        });
      } else if (detections.length == 1) {
        setAge(detections[0].age);
        setGender(detections[0].gender);
        console.log(detections[0].gender);
      }
    }, 1000);
  };

  return (
    <BackGround>
      <div className="myapp" style={{ display: "none" }}>
        <div className="appvide">
          <video crossOrigin="anonymous" ref={videoRef} autoPlay></video>
        </div>
        <canvas
          ref={canvasRef}
          width="940"
          height="650"
          className="appcanvas"
          display="none"
        />
      </div>
      <Main>
        <Contents>
          <Image src={PhotoRabbit} alt="" width={300} height={300}></Image>
          <Text>
            AI 지니가 인생사진을 위해 포즈를 준비했어요
            <br />
            포즈를 추천 받으시겠어요?
            <br />
          </Text>
          <Button>
            <Image src={PoseIcon} alt="" width={50} height={50} />
            포즈 추천 받기
          </Button>
        </Contents>
      </Main>
    </BackGround>
  );
};

export default GenderAnalysis;

const BackGround = styled.div`
  width: 98vw;
  height: 95vh;
  margin: 22px 0 0 22px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: #f76687;
  border-style: solid;
  border-width: 2px;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
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

const Text = styled.h5`
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

const Button = styled.button`
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
function faceMyDetect() {
  throw new Error("Function not implemented.");
}
