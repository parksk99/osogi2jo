import styled from "styled-components";

interface Novel {
  author: string;
  title: string;
  path: string;
  img: string;
}

interface itemProps {
  novel: Novel;
  index: number;
  setNovelHandler: () => void;
}

export default function NovelItem(props: itemProps) {
  const { novel, index, setNovelHandler } = props;

  const removeThisItem = () => {
    const dataJson = localStorage.getItem("novels");
    if (dataJson) {
      const Arr: Array<Novel> = JSON.parse(dataJson);
      const newArr = Arr.filter((a, ind) => ind !== index);
      localStorage.setItem("novels", JSON.stringify(newArr));
      setNovelHandler();
    }
  };

  return (
    <Container onClick={removeThisItem}>
      <img src={novel.img} alt="background" />
      <div className="content-box">
        <span className="title">{novel.title}</span>
        <span className="author">{novel.author}</span>
      </div>
      <div className="glass" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 20vw;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  & > .glass {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(to top, #000, #00ff0000);
  }

  & > .content-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: white;
    z-index: 10;

    & > .title {
      font-size: 18px;
      font-weight: 700;
    }

    & > .author {
      font-size: 16px;
      font-weight: 300;
    }
  }
`;
