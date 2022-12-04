import {
  UpperBoxContainer,
  UpperContentBox,
} from "../../styles/LikedGenre/GenreStyle";
import Result from "./Result";
import { error } from "../../resources/result";
import { NoArtist } from "./SelectedArtistItem";
import { useState, useEffect } from "react";
import MyPeekArtists from "./MyPeekArtists";
import { Artist, AllGenres } from "../../resources/artists";
import TasteBox from "./TasteBox";
import { useRecoilState } from "recoil";
import { recoilRenderState } from "../../states/recoilRenderState";

export default function UpperBox() {
  const [renderState, setRenderState] = useRecoilState(recoilRenderState);
  const [myPeek, setMyPeek] = useState<Array<string>>([]);
  const [items, setItems] = useState<Array<Artist>>([]);

  const getMyPeek = () => {
    const jsonData = localStorage.getItem("music-preference");
    if (jsonData !== null) {
      const prevPickers: Array<string> = JSON.parse(jsonData);
      setMyPeek(prevPickers);
      setRenderState(prevPickers.length);
    }
  };

  const setPeekImages = () => {
    const myPeekArtist = AllGenres.map((genre) =>
      genre.filter((artist, index) => myPeek.includes(artist.name))
    );
    let myPeekArr: Array<Artist> = [];
    myPeekArtist.map((peek) =>
      peek.length > 0 ? myPeekArr.push(...peek) : null
    );
    setItems(myPeekArr);
  };

  useEffect(() => {
    getMyPeek();
  }, []);

  useEffect(() => {
    if (myPeek.length > 0) {
      setPeekImages();
    }
  }, [myPeek]);

  useEffect(() => {
    getMyPeek();
  }, [renderState]);

  return (
    <UpperBoxContainer>
      <span className="title">해당 기기에서 분석된 선호 장르예요.</span>
      <span className="subtitle">
        Novelism이 분석한 당신의 최애 장르를 확인해보세요!
      </span>
      <UpperContentBox>
        <div className="result-box">
          {myPeek && myPeek.length > 0 && renderState > 0 ? (
            <TasteBox peeks={items} />
          ) : (
            <Result item={error} />
          )}
        </div>
        <div className="my-artists">
          {myPeek && myPeek.length > 0 && renderState > 0 ? (
            <MyPeekArtists peeks={items} />
          ) : (
            <NoArtist />
          )}
        </div>
      </UpperContentBox>
    </UpperBoxContainer>
  );
}
