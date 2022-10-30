import { Container } from "../../styles/Home/CarouselStyle";
import CarouselItem from "./HomeCarouselItem";
import { useState, useEffect, useRef } from "react";

interface Item {
  image: string;
  quote: string;
  tags: Array<string>;
  title: string;
  platform: string;
  url: string;
}

export default function HomeCarousel() {
  const [curIndex, setCurIndex] = useState(0);
  const dummy_1: Item = {
    image: "https://i.ytimg.com/vi/dNkUJBF2itI/maxresdefault.jpg",
    quote: "제국에 대한 애정?\n그런게 내게 남아있던가",
    tags: ["비극", "긴장", "죽음"],
    title: "황후를 훔친이는 누구인가 50화",
    platform: "네이버 웹소설",
    url: "",
  };
  const dummy_2: Item = {
    image: "https://embed.pixiv.net/artwork.php?illust_id=98244201",
    quote: "제국에 대한 애정?\n그런게 내게 남아있던가",
    tags: ["비극", "긴장", "죽음"],
    title: "황후를 훔친이는 누구인가 50화",
    platform: "네이버 웹소설",
    url: "",
  };

  const dummy_3: Item = {
    image: "https://cdn.news.unn.net/news/photo/202005/229585_114593_3753.jpg",
    quote: "삼조에 대한 애정?\n그건 내게 남아있지",
    tags: ["플러팅", "깔깔", "권모술수"],
    title: "조용한 자는 말이 없다.",
    platform: "새내기 배움터",
    url: "",
  };
  const dummies = [dummy_1, dummy_2, dummy_3];

  useInterval(() => {
    setCurIndex((prev) => (prev === dummies.length - 1 ? 0 : prev + 1));
  }, 7000);

  return (
    <Container>
      <CarouselItem item={dummies[curIndex]} />
      <ul className="carousel-dots">
        {dummies.map((dummy, index) => (
          <li
            className={curIndex === index ? "cur-index" : "index"}
            key={`${dummy.title}-${index}`}
            onClick={() => setCurIndex(index)}
          />
        ))}
      </ul>
    </Container>
  );
}

type IntervalFunction = () => unknown | void;
function useInterval(callback: IntervalFunction, delay: number | null) {
  const savedCallback = useRef<IntervalFunction | null>(null);

  useEffect(() => {
    if (delay === null) return;
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay === null) return;
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    }
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
