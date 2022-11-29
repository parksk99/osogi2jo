import { useRef, useEffect, useState } from "react";
import { Container } from "../styles/TocSoda/Layout";
import { useRecoilState } from "recoil";
import { Music, recoilMusicState } from "../states/recoilMusicState";

export default function TocSoda() {
  const [musicState, setMusicState] = useRecoilState(recoilMusicState);
  const viewRef = useRef<any>(null);
  const [curUrl, setCurUrl] = useState("");
  const [musics, setMusics] = useState<Array<Music>>([]);
  const [progress, setProgress] = useState(0);

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;
    setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
  };

  const changeMusicHandler = () => {
    if (progress < 25) {
      setMusicState(musics[0]);
    } else if (progress < 50) {
      setMusicState(musics[1]);
    } else if (progress < 75) {
      setMusicState(musics[2]);
    } else {
      setMusicState(musics[3]);
    }
  };

  const tmpMusics = () => {
    const tmp1: Music = {
      emotion: "기쁨",
      ratio: 25,
      title: "𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕. LUCY (루시) 노래모음 플레이리스트",
      thumbnailPath:
        "https://i.pinimg.com/564x/8f/1a/13/8f1a1332a83aa435466dfd426fb9f0c9.jpg",
      videoUrl: "https://youtu.be/E8pO11TtGWc",
    };
    const tmp2: Music = {
      emotion: "슬픔",
      ratio: 50,
      title: "[ 𝑷𝒍𝒂𝒚𝒍𝒊𝒔𝒕 ] 결(KYUL)의 음악을 한번에",
      thumbnailPath:
        "https://i.pinimg.com/564x/57/f2/5b/57f25b37f571872130e642b5e42f33ce.jpg",
      videoUrl: "https://youtu.be/w3UBP1zpgok",
    };
    const tmp3: Music = {
      emotion: "짜증",
      ratio: 75,
      title:
        "𝕡𝕝𝕒𝕪𝕝𝕚𝕤𝕥 내 취향 가득 담은 Feat. 해리 스타일스, 찰리 푸스, 코난 그레이, 라우브, 트로이 시반",
      thumbnailPath:
        "https://i.pinimg.com/564x/f3/08/f6/f308f6ba5997d57846dbede3714a2b1a.jpg",
      videoUrl: "https://youtu.be/Pqzeqt7j2uQ",
    };
    const tmp4: Music = {
      emotion: "위로",
      ratio: 100,
      title: "-Playlist- 위로받고 싶을 때 듣는 밍기뉴 플레이리스트",
      thumbnailPath:
        "https://i.pinimg.com/564x/c5/4d/18/c54d185443c3f55e5b39b9da06ac13dd.jpg",
      videoUrl: "https://youtu.be/lwMEKstov4o",
    };
    setMusics([tmp1, tmp2, tmp3, tmp4]);
  };

  const moveUrlEventHandler = (e: any) => {
    setCurUrl(e.url);
  };

  useEffect(() => {
    viewRef.current.addEventListener("will-navigate", (e: any) =>
      moveUrlEventHandler(e)
    );
  }, []);

  useEffect(() => {
    if (curUrl !== "") {
      console.log(curUrl);
      tmpMusics();
    }
  }, [curUrl]);

  useEffect(() => {
    if (musics.length > 0) {
      changeMusicHandler();
    }
  }, [progress]);

  return (
    <Container onScroll={scrollHandler}>
      <webview
        ng-style="style"
        id="content"
        src="https://www.tocsoda.co.kr/webnovelMainView"
        useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
        ref={viewRef}
      ></webview>
    </Container>
  );
}
