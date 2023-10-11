import Webcam from "react-webcam";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const photosAtomState = atom<string[]>({
  key: "photos",
  default: [],
});

export const usePhotosStore = () => useRecoilState(photosAtomState);
export const usePhotosValueStore = () => useRecoilValue(photosAtomState);
export const useSetPhotosStore = () => useSetRecoilState(photosAtomState);
