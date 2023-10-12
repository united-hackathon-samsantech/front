import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const RandomPhotoAtomState = atom({
  key: "radnomPhoto",
  default: null,
});

export const useRandomPhotoStore = () => useRecoilState(RandomPhotoAtomState);
export const useRandomPhotoValueStore = () =>
  useRecoilValue(RandomPhotoAtomState);
export const useSetRandomPhotoStore = () =>
  useSetRecoilState(RandomPhotoAtomState);
