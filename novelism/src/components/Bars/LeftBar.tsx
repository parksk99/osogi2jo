import logo from "../../resources/Images/logo.svg";
import {
  Container,
  TitleBox,
  ListCover,
  Circle,
} from "../../styles/LayoutPage/LeftBarStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faHouse,
  faThumbsUp,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { platforms } from "../../resources/platforms";
import { useRecoilState } from "recoil";
import {
  recoilMenuState,
  MenuState,
  Menus,
} from "../../states/recoilMenuState";

export default function LeftBar() {
  const [recoilInfo, setRecoilInfo] =
    useRecoilState<MenuState>(recoilMenuState);
  const setMenu = (menu: Menus) => {
    const newMenu: MenuState = {
      state: menu,
    };
    setRecoilInfo(newMenu);
  };
  return (
    <div>
      <Container>
        <TitleBox>
          <span className="title">Novelism</span>
          <img src={logo} alt="logo" />
        </TitleBox>
        <ListCover>
          <li className="list-title">
            <FontAwesomeIcon icon={faCaretRight} />
            Novelism
          </li>
          <li className="list-subtitle" onClick={() => setMenu(Menus.Home)}>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </li>
          <li className="list-subtitle" onClick={() => setMenu(Menus.About)}>
            <FontAwesomeIcon icon={faThumbsUp} />
            About Us
          </li>
        </ListCover>
        <ListCover>
          <li className="list-title">
            <FontAwesomeIcon icon={faCaretRight} />
            Platforms
          </li>
          {platforms.map((platform) => (
            <li
              key={platform.name}
              className="list-subtitle"
              onClick={() => setMenu(Menus.Tocsoda)}
            >
              <Circle color={platform.color} />
              {platform.name}
            </li>
          ))}
          <li className="list-subtitle" onClick={() => setMenu(Menus.Novelism)}>
            <Circle color="linear-gradient(135deg, #43c6ac, #191654)" />
            Novelism
          </li>
        </ListCover>
        <ListCover>
          <li className="list-title">
            <FontAwesomeIcon icon={faCaretRight} />
            Music
          </li>
          <li className="list-subtitle" onClick={() => setMenu(Menus.Genre)}>
            <FontAwesomeIcon icon={faHeart} />
            Liked Genre
          </li>
          <li className="list-subtitle" onClick={() => setMenu(Menus.Search)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            Search
          </li>
        </ListCover>
      </Container>
    </div>
  );
}
