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
} from "@fortawesome/free-solid-svg-icons";
import { platforms } from "../../resources/platforms";
import { useRecoilState } from "recoil";
import {
  recoilMenuState,
  MenuState,
  Menus,
} from "../../states/recoilMenuState";
import BasicModal from "../BasicModal";
import { useState } from "react";
import { ProhibitModal } from "../../styles/Home/HomeStyle";

export default function LeftBar() {
  const [recoilInfo, setRecoilInfo] =
    useRecoilState<MenuState>(recoilMenuState);
  const [modal, setModal] = useState(false);
  const setMenu = (menu: Menus) => {
    const newMenu: MenuState = {
      state: menu,
    };
    setRecoilInfo(newMenu);
  };

  const goToTocSoda = () => {
    setModal(false);
    setRecoilInfo({ state: Menus.Tocsoda });
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
              onClick={() =>
                platform.name === "Toc Soda"
                  ? setMenu(Menus.Tocsoda)
                  : setModal(true)
              }
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
        </ListCover>
      </Container>
      <BasicModal open={modal}>
        <ProhibitModal>
          <span className="title">
            현재 저작권 문제로 크롤링이 금지된 플랫폼입니다.
          </span>
          <div className="btn-box">
            <button onClick={() => goToTocSoda()}>톡소다 이용하기</button>
            <button onClick={() => setModal(false)}>닫기</button>
          </div>
        </ProhibitModal>
      </BasicModal>
    </div>
  );
}
