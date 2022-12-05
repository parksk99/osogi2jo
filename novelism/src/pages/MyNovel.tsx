import styled from "styled-components";
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  Music,
  recoilMusicState,
  recoilPlayedState,
} from "../states/recoilMusicState";
import LoadingSpinner from "../components/LoadingSpinner";
import { explanation } from "../resources/genre";

interface novelProps {
  txt: string | ArrayBuffer | null;
  title: string;
  author: string;
}

export default function MyNovel(props: novelProps) {
  const { txt, title, author } = props;
  const [musicState, setMusicState] = useRecoilState(recoilMusicState);
  const [played, setPlayed] = useRecoilState(recoilPlayedState);
  const scrollRef = useRef<any>(null);
  const [musics, setMusics] = useState<Array<Music>>([]);
  const [progress, setProgress] = useState(0);
  const [genre, setGenre] = useState("");
  const [ratioArr, setRatioArr] = useState<Array<number>>([]);
  const [loading, setLoading] = useState(true);

  const getMyGenre = () => {
    const myGenre = localStorage.getItem("taste");
    if (myGenre) {
      setGenre(explanation[myGenre].title);
    }
  };

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;
    setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
  };

  const changeMusicHandler = () => {
    if (played) {
      if (ratioArr.length === 0) return;
      if (ratioArr.length === 1) {
        setMusicState(musics[0]);
        return;
      }
      if (ratioArr.length === 2) {
        if (progress < ratioArr[0]) {
          setMusicState(musics[0]);
        } else if (progress < ratioArr[1]) {
          setMusicState(musics[1]);
        }
        return;
      }
      if (ratioArr.length === 3) {
        if (progress < ratioArr[0]) {
          setMusicState(musics[0]);
        } else if (progress < ratioArr[1]) {
          setMusicState(musics[1]);
        } else if (progress < ratioArr[2]) {
          setMusicState(musics[2]);
        }
        return;
      }
      if (ratioArr.length === 4) {
        if (progress < ratioArr[0]) {
          setMusicState(musics[0]);
        } else if (progress < ratioArr[1]) {
          setMusicState(musics[1]);
        } else if (progress < ratioArr[2]) {
          setMusicState(musics[2]);
        } else if (progress < ratioArr[3]) {
          setMusicState(musics[3]);
        }
        return;
      }
    }
  };

  const getInfoFromServer = () => {
    axios
      .post(
        `http://3.36.241.102/novel?genre=${genre}`,
        {
          novel: txt,
        },
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setMusics(res.data);
        setRatioArr(res.data.map((item: Music) => item.ratio));
        setPlayed(true);
        setProgress(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMyGenre();
  }, []);

  useEffect(() => {
    getInfoFromServer();
  }, [genre]);

  useEffect(() => {
    if (musics.length > 0) {
      changeMusicHandler();
    }
  }, [progress]);

  return (
    <Container onScroll={scrollHandler} ref={scrollRef}>
      <div className="content-box">
        <div className="title-box">
          <span className="title">{title}</span>
          <span className="author">{author}</span>
        </div>
        <span className="content">{typeof txt === "string" ? txt : null}</span>
      </div>
      {loading ? <LoadingSpinner /> : <></>}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px 0px;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #295b77;
  }
  &::-webkit-scrollbar-track {
    background-color: #00ff0000;
  }

  & > .content-box {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 30px;

    & > .title-box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 5px;

      & > .title {
        font-weight: 900;
        color: #242424;
        font-size: 24px;
      }
      & > .author {
        font-weight: 400;
        color: #242424;
        font-size: 16px;
      }
    }

    & > .content {
      text-align: start;
      white-space: pre-line;
      word-break: keep-all;
    }
  }
`;
