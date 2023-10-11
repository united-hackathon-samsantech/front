import CapturePhoto from "@/components/CapturePhoto";
import Complete from "@/components/Complete";
import Main from "@/components/Main";
import PostPreference from "@/components/PosePreference";
import SelectFrame from "@/components/SelectFrame";
import SelectPose from "@/components/SelectPose";
import SelectQuantity from "@/components/SelectQuantity";
import { useFunnel } from "@toss/use-funnel";
import { SwitchCase } from "@toss/react";
import { useState } from "react";

type PhotoBoothStep =
  | "메인"
  | "수량선택"
  | "포즈제공선택"
  | "포즈선택"
  | "사진촬영"
  | "프레임선택"
  | "완료";

const Home = () => {
  const [photoBoothStep, setPhotoBoothStep] = useState<PhotoBoothStep>("메인");
  return (
    <SwitchCase
      value={photoBoothStep}
      caseBy={{
        메인: <Main nextStep={() => setPhotoBoothStep("수량선택")} />,
        수량선택: (
          <SelectQuantity
            prevStep={() => setPhotoBoothStep("메인")}
            nextStep={() => setPhotoBoothStep("포즈제공선택")}
          />
        ),
        포즈제공선택: (
          <PostPreference
            prevStep={() => setPhotoBoothStep("수량선택")}
            nextStep={() => setPhotoBoothStep("포즈선택")}
          />
        ),
        포즈선택: (
          <SelectPose
            prevStep={() => setPhotoBoothStep("포즈제공선택")}
            nextStep={() => setPhotoBoothStep("사진촬영")}
          />
        ),
        사진촬영: (
          <CapturePhoto
            prevStep={() => setPhotoBoothStep("포즈선택")}
            nextStep={() => setPhotoBoothStep("프레임선택")}
          />
        ),
        프레임선택: (
          <SelectFrame
            prevStep={() => setPhotoBoothStep("사진촬영")}
            nextStep={() => setPhotoBoothStep("완료")}
          />
        ),
        완료: (
          <Complete
            prevStep={() => setPhotoBoothStep("프레임선택")}
            nextStep={() => console.log("끝")}
          />
        ),
      }}
      defaultComponent={<Main />}
    />
  );
};

export default Home;
