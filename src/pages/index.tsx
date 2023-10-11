import CapturePhoto from "@/components/CapturePhoto";
import Complete from "@/components/Complete";
import Main from "@/components/Main";
import PostPreference from "@/components/PosePreference";
import SelectFrame from "@/components/SelectFrame";
import SelectPose from "@/components/SelectPose";
import SelectQuantity from "@/components/SelectQuantity";
import { useFunnel } from "@toss/use-funnel";

const Home = () => {
  const [PhotoBoothFunnel, setPhotoBoothStep] = useFunnel([
    "메인",
    "수량선택",
    "포즈제공선택",
    "포즈선택",
    "사진촬영",
    "프레임선택",
    "완료",
  ] as const);
  return (
    <PhotoBoothFunnel>
      <PhotoBoothFunnel.Step name="메인">
        <Main nextStep={() => setPhotoBoothStep("수량선택")} />
      </PhotoBoothFunnel.Step>
      <PhotoBoothFunnel.Step name="수량선택">
        <SelectQuantity
          prevStep={() => setPhotoBoothStep("메인")}
          nextStep={() => setPhotoBoothStep("포즈제공선택")}
        />
      </PhotoBoothFunnel.Step>
      <PhotoBoothFunnel.Step name="포즈제공선택">
        <PostPreference
          prevStep={() => setPhotoBoothStep("수량선택")}
          nextStep={() => setPhotoBoothStep("포즈선택")}
        />
      </PhotoBoothFunnel.Step>
      <PhotoBoothFunnel.Step name="포즈선택">
        <SelectPose
          prevStep={() => setPhotoBoothStep("포즈제공선택")}
          nextStep={() => setPhotoBoothStep("사진촬영")}
        />
      </PhotoBoothFunnel.Step>
      <PhotoBoothFunnel.Step name="사진촬영">
        <CapturePhoto
          prevStep={() => setPhotoBoothStep("포즈선택")}
          nextStep={() => setPhotoBoothStep("프레임선택")}
        />
      </PhotoBoothFunnel.Step>
      <PhotoBoothFunnel.Step name="프레임선택">
        <SelectFrame
          prevStep={() => setPhotoBoothStep("사진촬영")}
          nextStep={() => setPhotoBoothStep("완료")}
        />
      </PhotoBoothFunnel.Step>
      <PhotoBoothFunnel.Step name="완료">
        <Complete
          prevStep={() => setPhotoBoothStep("프레임선택")}
          nextStep={() => console.log("끝")}
        />
      </PhotoBoothFunnel.Step>
    </PhotoBoothFunnel>
  );
};

export default Home;
