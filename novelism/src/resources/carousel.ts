export interface Item {
  image: string;
  quote: string;
  tags: Array<string>;
  title: string;
  platform: string;
  url: string;
}

const item1: Item = {
  image: "https://i.ytimg.com/vi/dNkUJBF2itI/maxresdefault.jpg",
  quote: "제국에 대한 애정?\n그런게 내게 남아있던가",
  tags: ["비극", "긴장", "죽음"],
  title: "황후를 훔친이는 누구인가 50화",
  platform: "네이버 웹소설",
  url: "",
};
const item2: Item = {
  image:
    "https://image.webtoonguide.com/py_c/55/48/7c5f79a17431d0893ae79203fab0",
  quote: "28번의 전생을,\n모두 기억한다",
  tags: ["밤", "악몽", "전생"],
  title: "악마를 배불리는 법 56화",
  platform: "네이버 웹소설",
  url: "",
};

const item3: Item = {
  image:
    "https://blog.kakaocdn.net/dn/YqY2k/btrRz1nOKWB/nvC73lCHwa9GH2qtbsL8n0/img.jpg",
  quote: "나를 죽인 가문의 핏줄로\n다시 태어나다.",
  tags: ["긴장", "싸움", "배반"],
  title: "재벌집 막내아들 1화 무료공개",
  platform: "TOCSODA",
  url: "",
};

const item4: Item = {
  image:
    "https://tumblbug-pci.imgix.net/e6fefec06fa2e3f92d21a40885f7326b86291ae0/347299b090f677a61ed4215fbfdc9de74a0ffa0a/ae88975640dd3823b9030425c2fa08018f8e724d/488cef47-5e95-412a-a960-006c278586ef.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=796a9da6c9e7af03e0dbabb7369148be",
  quote: "화산은,\n사라지지 않는다.",
  tags: ["꽃", "매화", "미려한"],
  title: "화산귀환 1406화 독점공개",
  platform: "네이버 시리즈",
  url: "",
};

const item5: Item = {
  image: "https://pbs.twimg.com/media/Em7PFtGVoAAAX5q.jpg",
  quote: "창간 9주년\n무료 공개",
  tags: ["게임", "레벨업", "흥미"],
  title: "나혼자만 레벨업",
  platform: "카카오페이지",
  url: "",
};

export const items = [item1, item2, item3, item4, item5];
