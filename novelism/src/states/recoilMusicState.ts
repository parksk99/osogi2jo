import { atom } from "recoil";

export interface Music {
  emotion: string;
  ration: number;
  title: string;
  thumbnailPath: string;
  videoUrl: string;
}

const initialState: Music = {
  emotion: "",
  ration: 0,
  title: "",
  thumbnailPath: "",
  videoUrl: "",
};

export const recoilMusicState = atom({
  key: "recoilMusicState",
  default: initialState,
});
