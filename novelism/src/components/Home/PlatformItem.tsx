import { Platform } from "../../resources/shortcut";
import { PlatformItem } from "../../styles/Home/HomeStyle";
import logo from "../../resources/Images/logo-big.svg";
import { useRecoilState } from "recoil";
import { recoilMenuState, Menus } from "../../states/recoilMenuState";
import { Dispatch, SetStateAction } from "react";

interface platformProps {
  item: Platform;
  index: number;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export default function PlatfomrItem(props: platformProps) {
  const { item, index, setModal } = props;
  const [menuState, setMenuState] = useRecoilState(recoilMenuState);

  const moveToTab = (menu: Menus) => {
    switch (menu) {
      case Menus.Naver:
        setModal(true);
        break;
      case Menus.Kakao:
        setModal(true);
        break;
      case Menus.Joara:
        setModal(true);
        break;
      case Menus.Munpia:
        setModal(true);
        break;
      case Menus.Tocsoda:
        setMenuState({ state: Menus.Tocsoda });
        break;
      case Menus.Novelism:
        setMenuState({ state: Menus.Novelism });
        break;
      default:
        alert("잘못된 접근입니다.");
    }
  };

  return (
    <PlatformItem index={index} onClick={() => moveToTab(item.platform)}>
      <div className="icon-box">
        <img src={item.icon !== "" ? item.icon : logo} alt={item.title} />
      </div>
      <div className="info-box">
        <span className="title">{item.title}</span>
        <span className="subtitle">{item.subtitle}</span>
        <span className="content">{item.content}</span>
      </div>
    </PlatformItem>
  );
}
