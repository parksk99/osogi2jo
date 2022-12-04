import styled from "styled-components";

interface novelProps {
  txt: string | ArrayBuffer | null;
  title: string;
  author: string;
}

export default function MyNovel(props: novelProps) {
  const { txt, title, author } = props;
  return (
    <Container>
      <div className="content-box">
        <div className="title-box">
          <span className="title">{title}</span>
          <span className="author">{author}</span>
        </div>
        <span className="content">{typeof txt === "string" ? txt : null}</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px 0px;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #295b77;
  }
  &::-webkit-scrollbar-track {
    background-color: #00ff0000;
  }

  & > .content-box {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 30px;

    & > .title-box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 5px;

      & > .title {
        font-weight: 900;
        color: #242424;
        font-size: 24px;
      }
      & > .author {
        font-weight: 400;
        color: #242424;
        font-size: 16px;
      }
    }

    & > .content {
      text-align: start;
      white-space: pre-line;
      word-break: keep-all;
    }
  }
`;
