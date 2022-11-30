import { Platform } from "../../resources/shortcut";
import { PlatformItem } from "../../styles/Home/HomeStyle";
import logo from "../../resources/Images/logo-big.svg";
import { useRecoilState } from "recoil";
import { recoilMenuState, Menus } from "../../states/recoilMenuState";

interface platformProps {
  item: Platform;
  index: number;
}

export default function PlatfomrItem(props: platformProps) {
  const { item, index } = props;
  const [menuState, setMenuState] = useRecoilState(recoilMenuState);

  return (
    <PlatformItem
      index={index}
      onClick={() => setMenuState({ state: Menus.Tocsoda })}
    >
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
