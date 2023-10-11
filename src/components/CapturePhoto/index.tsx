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
        prevBtnText="돌아가기"
        nextBtnText="선택 완료"
        title="원하는 포즈를 선택하세요"
        prevStep="포즈선택"
        nextStep="프레임선택"
      />
    </StyledCapturePhoto>
  );
};

export default CapturePhoto;

const StyledCapturePhoto = styled.div`
  width: 100%;
  padding: 16px;
  background-color: #ffffff;
`;
