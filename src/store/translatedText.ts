import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const translatedText = atom<string>({
  key: "translatedText",
  default: "",
});

export const usePhotosStore = () => useRecoilState(translatedText);
export const usePhotosValueStore = () => useRecoilValue(translatedText);
export const useSetPhotosStore = () => useSetRecoilState(translatedText);
