import { PlatformBox } from "../../styles/Home/HomeStyle";
import {
  Menus,
  MenuState,
  recoilMenuState,
} from "../../states/recoilMenuState";
import { useRecoilState } from "recoil";
import { Platform, PlatformArray } from "../../resources/shortcut";
import PlatfomrItem from "./PlatformItem";

export default function PlatformLayout() {
  const [recoilInfo, setRecoilInfo] =
    useRecoilState<MenuState>(recoilMenuState);
  return (
    <PlatformBox>
      <div className="title-box">
        <span className="title">플랫폼 바로가기</span>
        <span>현재 사용자 트래픽 기준으로 정렬됩니다.</span>
      </div>
      <div className="platform-box">
        {PlatformArray.map((item, index) => (
          <PlatfomrItem item={item} index={index} />
        ))}
      </div>
    </PlatformBox>
  );
}
