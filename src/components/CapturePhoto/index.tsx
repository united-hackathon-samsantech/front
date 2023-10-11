import { FunnelStep } from "@/types";

import { usePhotosStore } from "@/store/photos";
import styled from "@emotion/styled";
import { useRef } from "react";
import Webcam from "react-webcam";
import Button from "../common/Button";
import Header from "../common/Header";

interface CapturePhotoProps extends FunnelStep {}

const CapturePhoto = ({ nextStep, prevStep }: CapturePhotoProps) => {
  const webcamRef = useRef<Webcam>(null);
  const [photos, setPhotos] = usePhotosStore();

  const hanldePhotoCaptureButtonClick = () => {
    const photo = webcamRef.current?.getScreenshot();

    if (photo) {
      setPhotos((prev) => [...prev, photo]);
    }
  };

  return (
    <StyledCapturePhoto>
      <Header
        title="원하는 포즈를 선택하세요"
        prevBtnText="돌아가기"
        nextBtnText="선택완료"
        prevStep={prevStep}
        nextStep={nextStep}
      />
      <Webcam ref={webcamRef} audio={false} screenshotFormat="image/jpeg" />
      <Button icon="next">돌아가기</Button>
      <StyledPhotoCaptureButton onClick={hanldePhotoCaptureButtonClick}>
        사진 찍기
      </StyledPhotoCaptureButton>
      {photos && photos.map((item) => <img src={item} />)}
    </StyledCapturePhoto>
  );
};

export default CapturePhoto;

const StyledCapturePhoto = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: #ffffff;
  border: 5px solid red;
`;

const StyledCapturePhotoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledPhotoCaptureButton = styled.button`
  width: 100px;
  height: 70px;
  background-color: skyblue;
`;
