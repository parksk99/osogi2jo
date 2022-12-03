import { atom } from "recoil";

export interface Music {
  emotion: string;
  ratio: number;
  title: string;
  thumbnailPath: string;
  videoUrl: string;
}

const initialState: Music = {
  emotion: "",
  ratio: 0,
  title: "",
  thumbnailPath: "",
  videoUrl: "",
};

export const recoilMusicState = atom({
  key: "recoilMusicState",
  default: initialState,
});

export const recoilPlayedState = atom({
  key: "recoilPlayedState",
  default: false,
});
