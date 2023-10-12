import { usePhotoBoothStepValueStore } from "@/store/photoBoothStep";
import { SwitchCase } from "@toss/react";
import * as C from "@/components";

const Home = () => {
  const photoBoothStep = usePhotoBoothStepValueStore();

  return (
    <SwitchCase
      value={photoBoothStep}
      caseBy={{
        메인: <C.Main nextStep="수량선택" />,
        수량선택: <C.SelectQuantity prevStep="메인" nextStep="포즈제공선택" />,
        포즈제공선택: (
          <C.PosePreference prevStep="수량선택" nextStep="포즈선택" />
        ),
        포즈선택: <C.SelectPose prevStep="포즈제공선택" nextStep="사진촬영" />,
        사진촬영: <C.CapturePhoto prevStep="포즈선택" nextStep="프레임선택" />,
        프레임선택: <C.Frame prevStep="사진촬영" nextStep="최종선택" />,
        최종선택: <C.FinalSelect prevStep="프레임선택" nextStep="인쇄" />,
        인쇄: <C.Complete nextStep="메인" />,
      }}
      defaultComponent={<C.Main nextStep="수량선택" />}
    />
  );
};

export default Home;
