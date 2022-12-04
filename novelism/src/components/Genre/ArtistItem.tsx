import { Artist } from "../../resources/artists";
import styled from "styled-components";

interface itemProps {
  item: Artist;
  picked: boolean;
  putPickers: (name: string) => void;
}

export default function ArtistItem(props: itemProps) {
  const { item, picked, putPickers } = props;
  return (
    <Container picked={picked} onClick={() => putPickers(item.name)}>
      <div className="img-box">
        <img src={item.img} alt={item.name} />
      </div>
      <span className="name">{item.name}</span>
    </Container>
  );
}

const Container = styled.div<{ picked: boolean }>`
  width: 120px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.15s;
  background-color: ${(props) => (props.picked ? "#43C6AC" : "")};
  color: ${(props) => (props.picked ? "white" : "")};
  font-weight: ${(props) => (props.picked ? "600" : "")};
  text-shadow: ${(props) => (props.picked ? "1px 1px 2px #29292986" : "")};

  &:hover {
    background-color: #43c6acba;
    color: black;
    text-shadow: none;
  }

  &:active {
    background-color: #43c6acba;
    color: white;
    font-weight: 600;
    text-shadow: 1px 1px 2px #29292986;
    transform: scale(0.98);
  }

  & > .img-box {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: relative;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: all 0.15s;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.15s;
    }
  }

  & > .name {
    font-size: 14px;
    transition: all 0.15s;
  }
`;
