import NovelGrid from "../components/Novelism/NovelGrid";
import TitleBox from "../components/Novelism/TitleBox";
import {
  Container,
  InputModalContainer,
  CloseBtn,
} from "../styles/Novelism/Layout";
import { useState } from "react";
import BasicModal from "../components/BasicModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface Novel {
  author: string;
  title: string;
  path: string;
  img: string;
}

export default function Novelism() {
  const [modal, setModal] = useState(false);

  //   const electronTest = () => {
  //     const app = electron.app;
  //     const directoryPath = `${app.getPath("appData")}/electronTest/test`;

  //     fs.existsSync(directoryPath);
  //     fs.exists(directoryPath, (exists) => {
  //       console.log(exists);
  //     });
  //   };

  return (
    <Container>
      <div className="container-content">
        <TitleBox />
        <button onClick={(e) => setModal(true)}>
          <span>소설 등록하기</span>
        </button>
        <NovelGrid />
      </div>
      <BasicModal open={modal}>
        <CloseBtn onClick={() => setModal(false)}>
          <FontAwesomeIcon icon={faX} />
        </CloseBtn>
        <InputModal close={() => setModal(false)} />
      </BasicModal>
    </Container>
  );
}

const InputModal = (props: { close: () => void }) => {
  const { close } = props;
  const [txtPath, setTxtPath] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [err, setErr] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log(event);
      const file: any = event.target.files[0];
      if (file) {
        setTxtPath(file.path);
      }
      const reader = new FileReader();
      reader.readAsText(file);
    }
  };

  const onSaveHandler = () => {
    if (title === "" || author === "" || imgUrl === "") {
      setErr(true);
    } else {
      saveInLocalStorage();
      close();
    }
  };

  const saveInLocalStorage = () => {
    const prevNovels = localStorage.getItem("novels");
    const novel: Novel = {
      title: title,
      author: author,
      path: txtPath,
      img: imgUrl,
    };
    if (prevNovels && prevNovels.length > 0) {
      const prevNovelArr = JSON.parse(prevNovels);
      localStorage.setItem("novels", JSON.stringify([...prevNovelArr, novel]));
    } else {
      localStorage.setItem("novels", JSON.stringify([novel]));
    }
  };

  return (
    <InputModalContainer>
      <span className="main-title">소설 등록하기</span>
      <ul>
        <li>
          <label htmlFor="author">작품 제목</label>
          <input
            id="author"
            type="text"
            placeholder="작품 제목을 입력해주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="author">작가 이름</label>
          <input
            id="author"
            type="text"
            placeholder="작가 이름을 입력해주세요."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="author">소설 커버 이미지 주소</label>
          <input
            id="author"
            type="text"
            placeholder="소설의 커버 이미지 주소를 입력해주세요."
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="file">소설 텍스트본 입력</label>
          <input
            type="file"
            accept=".txt"
            id="file"
            onChange={(e) => onChange(e)}
          ></input>
        </li>
      </ul>
      {err ? <span className="err">모든 정보를 입력해주세요</span> : <></>}
      <button className="save-btn" onClick={() => onSaveHandler()}>
        <span>저장</span>
      </button>
    </InputModalContainer>
  );
};
