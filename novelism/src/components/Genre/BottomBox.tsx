import { BottomBoxContainer } from "../../styles/LikedGenre/GenreStyle";
import {
  Artist,
  Balad,
  Dance,
  Hiphop,
  Rnb,
  Indi,
  Rock,
  Trot,
  Pork,
  Pop,
  Piano,
} from "../../resources/artists";
import { useState, useEffect } from "react";
import ArtistItem from "./ArtistItem";
import Notice from "./Notice";
import { useRecoilState } from "recoil";
import { recoilRenderState } from "../../states/recoilRenderState";

export default function BottomBox() {
  const [renderState, setRenderState] = useRecoilState(recoilRenderState);
  const [artists, setArtists] = useState<Array<Artist>>();
  const [pickers, setPickers] = useState<Array<string>>([]);
  const [overPickers, setOverPickers] = useState<boolean>(false);
  const [noticeContent, setNoticeContent] = useState("");

  const shuffle = () => {
    let tmpArr = [
      ...Balad,
      ...Dance,
      ...Hiphop,
      ...Rnb,
      ...Indi,
      ...Rock,
      ...Trot,
      ...Pork,
      ...Pop,
      ...Piano,
    ];
    tmpArr.sort(() => Math.random() - 0.5);
    setArtists(tmpArr);
  };

  const setPickersOnStart = () => {
    //로컬 스토리지에 있는 아티스트 정보 받아와서 pickers에 담기
    const jsonData = localStorage.getItem("music-preference");
    if (jsonData !== null) {
      const prevPickers: Array<string> = JSON.parse(jsonData);
      setPickers(prevPickers);
    }
  };

  const putPickers = (name: string) => {
    if (pickers.includes(name)) {
      const newPickers = pickers.filter((pick) => pick !== name);
      setPickers(newPickers);
      setOverPickers(false);
    } else {
      if (pickers.length === 10) {
        setNoticeContent("아티스트는 최대 10명까지만 선택가능해요😂");
        setOverPickers(true);
      } else {
        setPickers((prev) => [...prev, name]);
        setOverPickers(false);
      }
    }
  };

  const pickerSaver = () => {
    if (pickers.length > 0) {
      try {
        const pickerJson = JSON.stringify(pickers);
        localStorage.setItem("music-preference", pickerJson);
      } catch {
        setNoticeContent("알 수 없는 이유로 저장에 실패했어요😱");
        setOverPickers(true);
      }
      setRenderState(pickers.length);
      setNoticeContent("아티스트 저장에 성공했습니다🥰");
      setOverPickers(true);
    } else {
      setNoticeContent("아티스트는 최소 1명 이상 선택해야해요🤗");
      setOverPickers(true);
    }
  };

  useEffect(() => {
    setPickersOnStart();
    shuffle();
  }, []);

  return (
    <BottomBoxContainer>
      <Notice
        content={noticeContent}
        over={overPickers}
        setOver={setOverPickers}
      />
      <span className="title">선호하는 아티스트를 선택해주세요!</span>
      <span className="subtitle">
        최대 10명의 아티스트를 선택하고 저장해보세요. 선호장르를 분석해드려요!
      </span>
      <div className="artists-box">
        {artists ? (
          artists.map((artist, index) => (
            <ArtistItem
              key={`${artist.name}-${artist.genre}`}
              item={artist}
              picked={pickers.includes(artist.name)}
              putPickers={putPickers}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <button className="save-btn" onClick={() => pickerSaver()}>
        저장
      </button>
    </BottomBoxContainer>
  );
}
