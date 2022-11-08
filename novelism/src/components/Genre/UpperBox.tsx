import {
  UpperBoxContainer,
  UpperContentBox,
} from "../../styles/LikedGenre/GenreStyle";
import Result from "./Result";
import { error } from "../../resources/result";
import { NoArtist } from "./SelectedArtistItem";

export default function UpperBox() {
  return (
    <UpperBoxContainer>
      <span className="title">해당 기기에서 분석된 선호 장르예요.</span>
      <span className="subtitle">
        Novelism이 분석한 당신의 최애 장르를 확인해보세요!
      </span>
      <UpperContentBox>
        <div className="result-box">
          <Result item={error} />
        </div>
        <div className="my-artists">
          <NoArtist />
        </div>
      </UpperContentBox>
    </UpperBoxContainer>
  );
}
