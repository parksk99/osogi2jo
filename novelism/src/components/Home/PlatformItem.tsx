import { Platform } from "../../resources/shortcut";
import { PlatformItem } from "../../styles/Home/HomeStyle";
interface platformProps {
  item: Platform;
  index: number;
}

export default function PlatfomrItem(props: platformProps) {
  const { item, index } = props;
  return (
    <PlatformItem index={index}>
      <div className="icon-box">
        <img src={item.icon} alt={item.title} />
      </div>
      <div className="info-box">
        <span className="title">{item.title}</span>
        <span className="subtitle">{item.subtitle}</span>
        <span className="content">{item.content}</span>
      </div>
    </PlatformItem>
  );
}
