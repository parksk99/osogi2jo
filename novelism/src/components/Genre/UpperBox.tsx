import {
  UpperBoxContainer,
  UpperContentBox,
} from "../../styles/LikedGenre/GenreStyle";
import Result from "./Result";
import { error } from "../../resources/result";
import { NoArtist } from "./SelectedArtistItem";
import { useState, useEffect } from "react";
import MyPeekArtists from "./MyPeekArtists";

export default function UpperBox() {
  const [myPeek, setMyPeek] = useState<Array<string>>();

  const getMyPeek = () => {
    const jsonData = localStorage.getItem("music-preference");
    if (jsonData !== null) {
      const prevPickers: Array<string> = JSON.parse(jsonData);
      setMyPeek(prevPickers);
    }
  };

  useEffect(() => {
    getMyPeek();
  }, []);

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
          {myPeek ? <MyPeekArtists peeks={myPeek} /> : <NoArtist />}
        </div>
      </UpperContentBox>
    </UpperBoxContainer>
  );
}
