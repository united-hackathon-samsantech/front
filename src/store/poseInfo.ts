import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export const poseInfoAtomState = atom<Number>({
  key: "pose",
  default: 0,
});

export const usePoseInfoAtomStateStore = () => useRecoilState(poseInfoAtomState);
export const usePoseInfoAtomStateValueStore = () => useRecoilValue(poseInfoAtomState);
export const useSetPoseInfoAtomStateStore = () => useSetRecoilState(poseInfoAtomState);
