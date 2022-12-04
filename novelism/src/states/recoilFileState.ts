import { atom } from "recoil";

const initialState: string = "";

export const recoilFileState = atom({
  key: "recoilFileState",
  default: initialState,
});
