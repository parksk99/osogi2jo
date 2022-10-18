interface Platform {
  name: string;
  url: string;
  color: string;
}

export const platforms: Array<Platform> = [
  {
    name: "Naver",
    url: "https://novel.naver.com/webnovel/weekday",
    color: "#2DB400",
  },
  {
    name: "Kakao Page",
    url: "https://page.kakao.com/menu/11",
    color: "#F7E600",
  },
  {
    name: "Munpia",
    url: "https://www.munpia.com/",
    color: "#2C7EB9",
  },
  {
    name: "Joara",
    url: "https://www.joara.com/",
    color: "#1F4398",
  },
  {
    name: "Toc Soda",
    url: "https://www.tocsoda.co.kr/mainView",
    color: "#F15441",
  },
];
