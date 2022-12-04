import { atom } from "recoil";

export enum Stage {
  Index,
  Layout,
}

const initialState = Stage.Index;

export const recoilIndexState = atom({
  key: "recoilIndexState",
  default: initialState,
});
