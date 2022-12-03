import {
  Container,
  NoPlayBox,
  PlayBox,
} from "../../styles/LayoutPage/PlayBarStyle";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faX } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import {
  recoilMusicState,
  Music,
  recoilPlayedState,
} from "../../states/recoilMusicState";
import ReactPlayer from "react-player";

export default function PlayBar() {
  const [musicState, setMusicState] = useRecoilState(recoilMusicState);
  const [played, setPlayed] = useRecoilState(recoilPlayedState);
  const [collapse, setCollapse] = useState(false);

  const stopMusic = () => {
    const initialState: Music = {
      emotion: "",
      ratio: 0,
      title: "",
      thumbnailPath: "",
      videoUrl: "",
    };
    setMusicState(initialState);
  };

  useEffect(() => {
    if (musicState.emotion !== "") {
      setPlayed(true);
    } else {
      setPlayed(false);
    }
  }, [musicState]);

  return (
    <Container collapse={collapse}>
      {played && musicState.thumbnailPath !== "" ? (
        <PlayBox img={musicState.thumbnailPath}>
          <div className="blur-box" />
          <span className="img-box">
            <img src={musicState.thumbnailPath} alt="img" />
          </span>
          <div className="info-box">
            <span className="title">{musicState.title}</span>
            <span className="emotion">{musicState.emotion}</span>
          </div>
          <div className="youtube-player">
            <ReactPlayer url={musicState.videoUrl} controls playing={true} />
          </div>
          <button className="stop-btn" onClick={() => stopMusic()}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </PlayBox>
      ) : (
        <NoPlayBox>
          <span className="title">현재 재생중인 음악이 없습니다!</span>
          <span className="subtitle">
            Novelism에서 웹 소설을 감상하면, 배경음악은 알아서 켜드릴게요!
          </span>
        </NoPlayBox>
      )}
      <button
        className="collapse-btn"
        onClick={() => setCollapse((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faCaretUp} />
      </button>
    </Container>
  );
}
