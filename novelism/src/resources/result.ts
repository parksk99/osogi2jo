export enum ResultImg {
  guitar,
  error,
  piano,
  idol,
}

export interface result {
  img: ResultImg;
  subtitle: string;
  title: string;
  content: string;
  analysis: string;
}

export const error: result = {
  img: ResultImg.error,
  subtitle: "이런, 아직 당신을 분석하지 못했어요.",
  title: "",
  content:
    "당신이 꽤 어려운 사람이거나\n아직 선호하는 아티스트를 선택하지 않았거나\n둘 중 하나겠네요.",
  analysis: "",
};
