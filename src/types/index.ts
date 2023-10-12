export interface FunnelStep {
  nextStep?: PhotoBoothStep;
  prevStep?: PhotoBoothStep;
}

export type PhotoBoothStep =
  | "메인"
  | "수량선택"
  | "포즈제공선택"
  | "포즈선택"
  | "사진촬영"
  | "프레임선택"
  | "완료";
