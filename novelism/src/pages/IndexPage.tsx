import {
  Container,
  Button,
  ButtonText,
} from "../styles/IndexPage/IndexPageStyle";
import RecordMusic from "../resources/Images/RecordMusic.svg";
import { useNavigate } from "react-router-dom";

export default function IndexPage() {
  let navigate = useNavigate();
  return (
    <Container>
      <div className="title-box">
        <span className="title">Novelism</span>
        <span className="subtitle">{`웹 소설을 즐기는\n가장 감각적인 방법.`}</span>
        <div className="btn-box">
          <Button onClick={() => navigate("/home")}>
            <ButtonText>시작하기</ButtonText>
          </Button>
          <Button>
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
    </Container>
  );
}
