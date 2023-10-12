import { PhotoBoothStep } from "@/types";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const photoBoothStepAtomState = atom<PhotoBoothStep>({
  key: "photoBoothStep",
  default: "수량선택",
});

export const usePhotoBoothStepStore = () =>
  useRecoilState(photoBoothStepAtomState);
export const usePhotoBoothStepValueStore = () =>
  useRecoilValue(photoBoothStepAtomState);
export const useSetPhotoBoothStepStore = () =>
  useSetRecoilState(photoBoothStepAtomState);
