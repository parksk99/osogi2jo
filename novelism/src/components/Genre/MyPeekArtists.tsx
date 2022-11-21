import { Artist, AllGenres } from "../../resources/artists";
import { useState, useEffect } from "react";
import { ItemLayout } from "../../styles/LikedGenre/GenreStyle";

interface peekProps {
  peeks: Array<string>;
}

export default function MyPeekArtists(props: peekProps) {
  const { peeks } = props;
  const [items, setItems] = useState<Array<Artist>>([]);

  const setPeekImages = () => {
    const myPeekArtist = AllGenres.map((genre) =>
      genre.filter((artist, index) => peeks.includes(artist.name))
    );
    let myPeekArr: Array<Artist> = [];
    myPeekArtist.map((peek) =>
      peek.length > 0 ? myPeekArr.push(...peek) : null
    );
    setItems(myPeekArr);
  };

  useEffect(() => {
    setPeekImages();
  }, []);

  return (
    <ItemLayout>
      {items.map((item, index) => (
        <div key={`${item.name}-${index}`} className="img-box">
          <img src={item.img} alt={item.name} />
        </div>
      ))}
    </ItemLayout>
  );
}
