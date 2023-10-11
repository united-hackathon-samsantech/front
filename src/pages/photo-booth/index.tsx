import { usePhotosStore } from "@/store/photos";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import Webcam from "react-webcam";

const PhotoBoothPage = () => {
  const webcamRef = useRef<Webcam>(null);
  const [photos, setPhotos] = usePhotosStore();

  const hanldePhotoCaptureButtonClick = () => {
    const photo = webcamRef.current?.getScreenshot();

    if (photo) {
      setPhotos((prev) => [...prev, photo]);
    }
  };

  return (
    <StyledPhotoBooth>
      <Webcam ref={webcamRef} audio={false} screenshotFormat="image/jpeg" />
      <StyledPhotoCaptureButton onClick={hanldePhotoCaptureButtonClick}>
        사진 찍기
      </StyledPhotoCaptureButton>
      {photos && photos.map((item) => <img src={item} />)}
    </StyledPhotoBooth>
  );
};

export default PhotoBoothPage;

const StyledPhotoBooth = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
`;

const StyledPhotoCaptureButton = styled.button`
  width: 100px;
  height: 70px;
  background-color: skyblue;
`;
