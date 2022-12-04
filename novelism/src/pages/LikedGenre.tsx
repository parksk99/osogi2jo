import BottomBox from "../components/Genre/BottomBox";
import UpperBox from "../components/Genre/UpperBox";
import { Container } from "../styles/LikedGenre/GenreStyle";

export default function LikedGenre() {
  return (
    <Container>
      <UpperBox />
      <BottomBox />
    </Container>
  );
}
