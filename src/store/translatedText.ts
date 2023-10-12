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

export const useTranslatedTextStore = () => useRecoilState(translatedText);
export const useTranslatedTextValueStore = () => useRecoilValue(translatedText);
export const useSetTranslatedTextValueStore = () =>
  useSetRecoilState(translatedText);
