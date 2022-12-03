import { PlatformBox, ProhibitModal } from "../../styles/Home/HomeStyle";
import { Menus, recoilMenuState } from "../../states/recoilMenuState";
import { useRecoilState } from "recoil";
import { PlatformArray } from "../../resources/shortcut";
import PlatfomrItem from "./PlatformItem";
import BasicModal from "../../components/BasicModal";
import { useState } from "react";

export default function PlatformLayout() {
  const [modal, setModal] = useState(false);
  const [menuState, setMenuState] = useRecoilState(recoilMenuState);

  const goToTocSoda = () => {
    setModal(false);
    setMenuState({ state: Menus.Tocsoda });
  };

  return (
    <PlatformBox>
      <div className="title-box">
        <span className="title">플랫폼 바로가기</span>
        <span>현재 저작권 문제로, 톡소다 서비스만 이용이 가능합니다.</span>
      </div>
      <div className="platform-box">
        {PlatformArray.map((item, index) => (
          <PlatfomrItem item={item} index={index} setModal={setModal} />
        ))}
      </div>
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
    </PlatformBox>
  );
}
