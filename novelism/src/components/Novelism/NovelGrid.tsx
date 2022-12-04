import { useState, useEffect } from "react";
import NovelItem from "./NovelItem";
import {
  GridContainer,
  NoNovel,
  NovelGridBox,
} from "../../styles/Novelism/Layout";
import error from "../../resources/Images/404.svg";

interface Novel {
  author: string;
  title: string;
  path: string;
  img: string;
}

export default function NovelGrid() {
  const [novels, setNovels] = useState<Array<Novel>>();

  const setNovelHandler = () => {
    const novelJSON = localStorage.getItem("novels");
    if (novelJSON && novelJSON !== "") {
      const novels = JSON.parse(novelJSON);
      setNovels(novels);
    }
  };

  useEffect(() => {
    setNovelHandler();
  }, []);

  return (
    <GridContainer>
      {novels && novels.length > 0 ? (
        <NovelGridBox>
          {novels.map((novel, index) => (
            <NovelItem
              novel={novel}
              index={index}
              setNovelHandler={setNovelHandler}
            />
          ))}
        </NovelGridBox>
      ) : (
        <NoNovel>
          <div className="img-box">
            <img src={error} alt="Not found" />
          </div>
          <span>아직 등록된 소설이 없어요! </span>
        </NoNovel>
      )}
    </GridContainer>
  );
}
