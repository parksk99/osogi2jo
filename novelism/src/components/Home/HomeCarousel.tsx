import { Container } from "../../styles/Home/CarouselStyle";
import CarouselItem from "./HomeCarouselItem";
import { useState, useEffect, useRef } from "react";
import { items } from "../../resources/carousel";

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

  useInterval(() => {
    setCurIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, 7000);

  return (
    <Container>
      <CarouselItem item={items[curIndex]} />
      <ul className="carousel-dots">
        {items.map((dummy, index) => (
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
