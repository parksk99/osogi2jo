import { useRef, useEffect, useState } from "react";
import { Container } from "../styles/TocSoda/Layout";
import { useRecoilState } from "recoil";
import {
  Music,
  recoilMusicState,
  recoilPlayedState,
} from "../states/recoilMusicState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { explanation } from "../resources/genre";
import LoadingSpinner from "../components/LoadingSpinner";

const reg = /^(https?:\/\/)([^\/]*)(\.)(tocsoda\.co.kr\/)(product\/)(view?)/;

export default function TocSoda() {
  const [musicState, setMusicState] = useRecoilState(recoilMusicState);
  const [played, setPlayed] = useRecoilState(recoilPlayedState);
  const viewRef = useRef<any>(null);
  const scrollRef = useRef<any>(null);
  const [curUrl, setCurUrl] = useState("");
  const [musics, setMusics] = useState<Array<Music>>([]);
  const [progress, setProgress] = useState(0);
  const [genre, setGenre] = useState("");
  const [ratioArr, setRatioArr] = useState<Array<number>>([]);
  const [loading, setLoading] = useState(false);

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

  const moveUrlEventHandler = (e: any) => {
    setCurUrl(e.url.replace("&", "%26"));
    scrollRef.current.scrollTop = 0;
  };

  const goBackInWebview = () => {
    viewRef.current.goBack();
  };

  const goForwardInWebview = () => {
    viewRef.current.goForward();
  };

  const getInfoFromServer = () => {
    axios
      .get(`http://3.36.241.102/novel?novelUrl=${curUrl}&genre=${genre}`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
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
    viewRef.current.addEventListener("will-navigate", (e: any) =>
      moveUrlEventHandler(e)
    );
  }, []);

  useEffect(() => {
    if (reg.test(curUrl)) {
      setLoading(true);
      getInfoFromServer();
    }
  }, [curUrl]);

  useEffect(() => {
    if (musics.length > 0) {
      changeMusicHandler();
    }
  }, [progress]);

  return (
    <Container onScroll={scrollHandler} ref={scrollRef}>
      <webview
        ng-style="style"
        id="content"
        src="https://www.tocsoda.co.kr/webnovelMainView"
        useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
        ref={viewRef}
      ></webview>
      <div className="btn-box">
        <button onClick={() => goBackInWebview()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={() => goForwardInWebview()}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      {loading ? <LoadingSpinner /> : <></>}
    </Container>
  );
}
