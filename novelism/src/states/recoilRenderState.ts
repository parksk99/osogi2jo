//장르설정 리렌더를 위한 상태
import { atom } from "recoil";

const initialState: number = 0;

export const recoilRenderState = atom({
  key: "recoilRenterState",
  default: initialState,
});
