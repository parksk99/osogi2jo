import {
  Container,
  NoPlayBox,
  CdBox,
  MarqueeBox,
} from "../../styles/LayoutPage/PlayBarStyle";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

interface Music {
  url: string;
  title: string;
  thumbnail: string;
  color: string;
}

export default function PlayBar() {
  const tmpColor = "#636363B3";
  const [played, setPlayed] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [musics, setMusics] = useState<Array<Music>>();

  return (
    <Container color={tmpColor} collapse={collapse}>
      {played ? (
        <></>
      ) : collapse ? (
        <CdBox>
          <div className="cd-player" />
          <MarqueeBox>
            <span>재생중인 음악이 없네요.</span>
            <span>재생중인 음악이 없네요.</span>
            <span>재생중인 음악이 없네요.</span>
            <span>재생중인 음악이 없네요.</span>
            <span>재생중인 음악이 없네요.</span>
          </MarqueeBox>
        </CdBox>
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
