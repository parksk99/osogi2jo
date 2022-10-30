import { Container } from "../styles/Home/HomeStyle";
import HomeCarousel from "../components/Home/HomeCarousel";
import PlatformLayout from "../components/Home/PlatformLayout";

export default function Home() {
  return (
    <Container>
      <div className="container-content">
        <HomeCarousel />
        <PlatformLayout />
      </div>
    </Container>
  );
}
