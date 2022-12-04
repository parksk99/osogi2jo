import {
  Container,
  Button,
  ButtonText,
} from "../styles/IndexPage/IndexPageStyle";
import RecordMusic from "../resources/Images/RecordMusic.svg";
import { useState } from "react";
import Notice from "../components/Notice";
import { useRecoilState } from "recoil";
import { recoilIndexState, Stage } from "../states/recoilIndexState";

export default function IndexPage() {
  const [notice, setNotice] = useState(false);
  const [stage, setStage] = useRecoilState(recoilIndexState);

  const inquire = async () => {
    try {
      await navigator.clipboard.writeText("igun0423@naver.com");
      setNotice(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="title-box">
        <span className="title">Novelism</span>
        <span className="subtitle">{`웹 소설을 즐기는\n가장 감각적인 방법.`}</span>
        <div className="btn-box">
          <Button onClick={() => setStage(Stage.Layout)}>
            <ButtonText>시작하기</ButtonText>
          </Button>
          <Button onClick={() => inquire()}>
            <ButtonText>문의하기</ButtonText>
          </Button>
        </div>
      </div>
      <div className="ani-box">
        <div className="circle">
          <img src={RecordMusic} alt="레코드" />
        </div>
        <div className="circle-stroke" />
        <div className="move-circle" />
      </div>
      <Notice
        content={`팀 메일이 클립보드에 복사되었습니다.\n해당 메일로 문의 접수 부탁드려요 :)`}
        over={notice}
        setOver={setNotice}
      />
    </Container>
  );
}
