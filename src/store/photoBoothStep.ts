import { PhotoBoothStep } from "@/types";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const photoBoothStepAtomState = atom<PhotoBoothStep>({
  key: "photoBoothStep",
  default: "사진촬영",
});

export const usePhotoBoothStepStore = () =>
  useRecoilState(photoBoothStepAtomState);
export const usePhotoBoothStepValueStore = () =>
  useRecoilValue(photoBoothStepAtomState);
export const useSetPhotoBoothStepStore = () =>
  useSetRecoilState(photoBoothStepAtomState);
