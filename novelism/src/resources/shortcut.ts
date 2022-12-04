import { Menus } from "../states/recoilMenuState";

export interface Platform {
  platform: Menus;
  icon: string;
  title: string;
  subtitle: string;
  content: string;
}

const naver: Platform = {
  platform: Menus.Naver,
  icon: "https://w.namu.la/s/a95d8525010ffd5beeec0a6090898f4ce63645d0a7f08494689ca74915620d6ef56d7d2377194db6aa31d8475ab8cb61e83a0ca7ca43c16ccc3ef5eb36cdc89a17a9d5c54dfd03707dc652efee7ee0f54653602f31cc8d7f3523004bc9f66461",
  title: "네이버 시리즈",
  subtitle: "재밌는건 다 모았다!",
  content: "액션, 로맨스, 판타지 …\n뭘 좋아할지 몰라서 다 준비했어!",
};

const kakao: Platform = {
  platform: Menus.Kakao,
  icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/service/79a30d30017900001.png",
  title: "카카오 페이지",
  subtitle: "무협 판타지에 강한 플랫폼!",
  content: "오리지널 독점 웹툰, 웹소설 부터 책 까지\n한 곳에서 즐기세요.",
};

const munpia: Platform = {
  platform: Menus.Munpia,
  icon: "https://play-lh.googleusercontent.com/JQ4vo2HvDDmQ-h2a12BvqfUlmAUpVX0zuOfBB3yjNJXCBQoIK1P-hd-PNnN8_6ZPco4",
  title: "문피아",
  subtitle: "남성향 웹소설을 원한다면?",
  content: "무료웹소설 최다 보유!\n무협, 판타지, 인기 웹소설 연재 플랫폼",
};

const joara: Platform = {
  platform: Menus.Joara,
  icon: "https://w.namu.la/s/a151f1ac6806d64a1d1d6af86b8863d784730f9e59a56a715dbf145251488afefb90f3a5fbfe1711f26f3f93d4e99ca594ed60f9fd38551638aa3999c163c2feb3673158be98f30eef73dbb152ac6dac4154505a5effa48a44a4fa9a5d6483ee",
  title: "조아라",
  subtitle: "여성향 웹소설을 원한다면?",
  content: "웹소설의 시작 조아라에서\n매일 무료 웹소설을 즐겨보세요.",
};

const tocsoda: Platform = {
  platform: Menus.Tocsoda,
  icon: "https://play-lh.googleusercontent.com/kjCMhUD7n0heVM5K-gCRTkS57ypr6d3B9Z1ixo3DTWQS7xxTghWqMgLHcRCpLrKhhLo",
  title: "톡소다",
  subtitle: "웹소설 플랫폼의 신흥 강자!",
  content: "교보문고 제공 웹소설 서비스 톡소다,\n국내 최대 웹소설 서비스!",
};

const novelism: Platform = {
  platform: Menus.Novelism,
  icon: "",
  title: "노벨리즘",
  subtitle: "내가 읽고 싶은 텍스트를 넣어 읽자!",
  content: "자유롭게 텍스트 업로드하고 읽어보자!",
};

export const PlatformArray = [tocsoda, naver, kakao, munpia, joara, novelism];
