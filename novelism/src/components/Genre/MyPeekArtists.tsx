import { Artist } from "../../resources/artists";
import { ItemLayout } from "../../styles/LikedGenre/GenreStyle";

interface peekProps {
  peeks: Array<Artist>;
}

export default function MyPeekArtists(props: peekProps) {
  const { peeks } = props;

  return (
    <ItemLayout>
      {peeks.map((item, index) => (
        <div key={`${item.name}-${index}`} className="img-box">
          <img src={item.img} alt={item.name} />
        </div>
      ))}
    </ItemLayout>
  );
}
