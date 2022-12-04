import { Item, InfoBox } from "../../styles/Home/CarouselStyle";

interface Item {
  image: string;
  quote: string;
  tags: Array<string>;
  title: string;
  platform: string;
  url: string;
}

interface itemProps {
  item: Item;
}

export default function HomeCarouselItem(props: itemProps) {
  const { item } = props;
  return (
    <Item image={item.image}>
      <InfoBox>
        <span className="quote">{item.quote}</span>
        <div className="tag-box">
          {item.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
          <span className="playlist">플레이리스트</span>
        </div>
        <span className="title">{item.title}</span>
        <span className="platform">{item.platform}</span>
      </InfoBox>
    </Item>
  );
}
