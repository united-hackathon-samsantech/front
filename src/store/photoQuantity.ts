import { PhotoBoothStep } from "@/types";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const photoQuantityAtomState = atom({
  key: "photoQuantity",
  default: 1,
});

export const usePhotoQuantityStore = () =>
  useRecoilState(photoQuantityAtomState);
export const usePhotoQuantityValueStore = () =>
  useRecoilValue(photoQuantityAtomState);
export const useSetPhotoQuantityStore = () =>
  useSetRecoilState(photoQuantityAtomState);
