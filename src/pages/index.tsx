import CapturePhoto from "@/components/CapturePhoto";
import Main from "@/components/Main";
import PostPreference from "@/components/PosePreference";
import SelectFrame from "@/components/Frame";
import FinalSelect from "@/components/FinalSelect";
import SelectPose from "@/components/SelectPose";
import SelectQuantity from "@/components/SelectQuantity";
import { usePhotoBoothStepValueStore } from "@/store/photoBoothStep";
import { SwitchCase } from "@toss/react";
import Complete from "@/components/Complete";

const Home = () => {
  const photoBoothStep = usePhotoBoothStepValueStore();

  return (
    <SwitchCase
      value={photoBoothStep}
      caseBy={{
        메인: <Main nextStep="수량선택" />,
        수량선택: <SelectQuantity prevStep="메인" nextStep="포즈제공선택" />,
        포즈제공선택: (
          <PostPreference prevStep="수량선택" nextStep="포즈선택" />
        ),
        포즈선택: <SelectPose prevStep="포즈제공선택" nextStep="사진촬영" />,
        사진촬영: <CapturePhoto prevStep="포즈선택" nextStep="프레임선택" />,
        프레임선택: <SelectFrame prevStep="사진촬영" nextStep="최종선택" />,
        최종선택: <FinalSelect prevStep="프레임선택" nextStep="인쇄" />,
        인쇄: <Complete />,
      }}
      defaultComponent={<Main nextStep="수량선택" />}
    />
  );
};

export default Home;
