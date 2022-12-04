import { Artist } from "../../resources/artists";
import { useState, useEffect } from "react";
import { ResultBox } from "../../styles/LikedGenre/GenreStyle";
import piano from "../../resources/Images/piano.svg";
import { explanation } from "../../resources/genre";
import { useRecoilState } from "recoil";
import { recoilRenderState } from "../../states/recoilRenderState";

interface tasteProps {
  peeks: Array<Artist>;
}

interface Taste {
  Balad: number;
  Dance: number;
  Hiphop: number;
  Rnb: number;
  Indi: number;
  Rock: number;
  Pork: number;
  Trot: number;
  Pop: number;
  Piano: number;
}

export default function TasteBox(props: tasteProps) {
  const [renderState, setRenderState] = useRecoilState(recoilRenderState);
  const { peeks } = props;
  const [tasteNum, setTasteNum] = useState<Taste>();
  const [mainTaste, setMainTaste] = useState<string>();
  const [mainTasteRatio, setMainTasteRatio] = useState<string>();
  const [subTaste, setSubTaste] = useState<string>();
  const [subTasteRatio, setSubTasteRatio] = useState<string>();

  const setTasteName = () => {
    if (tasteNum) {
      const newObj: [string, number][] = Object.entries(tasteNum);
      const topTaste = newObj.reduce((a, b) => (a[1] > b[1] ? a : b))[0];
      const topTasteNum = newObj.reduce((a, b) => (a[1] > b[1] ? a : b))[1];
      setMainTaste(topTaste.toLowerCase());
      setMainTasteRatio((topTasteNum / peeks.length).toFixed(2));

      let secondObj: [string, number][] = [];
      newObj.map((o) =>
        o[0] !== topTaste ? (secondObj = [...secondObj, o]) : null
      );
      const subTaste = secondObj.reduce((a, b) => (a[1] > b[1] ? a : b))[0];
      const subTasteNum = secondObj.reduce((a, b) => (a[1] > b[1] ? a : b))[1];
      setSubTaste(subTaste.toLowerCase());
      setSubTasteRatio((subTasteNum / peeks.length).toFixed(2));
    }
  };

  const analysisTaste = () => {
    let newMine = {
      Balad: 0,
      Dance: 0,
      Hiphop: 0,
      Rnb: 0,
      Indi: 0,
      Rock: 0,
      Pork: 0,
      Trot: 0,
      Pop: 0,
      Piano: 0,
    };

    peeks.map((peek) => {
      if (peek.genre === "dance") {
        newMine.Dance++;
      } else if (peek.genre === "hiphop") {
        newMine.Hiphop++;
      } else if (peek.genre === "rnb") {
        newMine.Rnb++;
      } else if (peek.genre === "indi") {
        newMine.Indi++;
      } else if (peek.genre === "rock") {
        newMine.Rock++;
      } else if (peek.genre === "trot") {
        newMine.Trot++;
      } else if (peek.genre === "pork") {
        newMine.Pork++;
      } else if (peek.genre === "piano") {
        newMine.Piano++;
      } else if (peek.genre === "balad") {
        newMine.Balad++;
      }
    });
    setTasteNum(newMine);
  };

  useEffect(() => {
    if (peeks) {
      analysisTaste();
    }
  }, [peeks]);

  useEffect(() => {
    setTasteName();
  }, [tasteNum]);

  useEffect(() => {
    if (mainTaste) {
      localStorage.setItem("taste", mainTaste);
    }
  }, [mainTaste]);

  return (
    <ResultBox>
      <div className="img-box">
        <img src={piano} alt={mainTaste} />
      </div>
      {mainTaste && subTaste ? (
        <div className="info-box">
          <span className="num">({renderState} / 10)</span>
          <span className="title">{explanation[mainTaste].subtitle}</span>
          <span className="subtitle">{explanation[mainTaste].title}</span>
          <span className="content">
            {`특수한 경우를 제외하고,\n앞으로 ${explanation[mainTaste].title}음악을 위주로 들려드릴게요!`}
          </span>
          <ul className="ratio">
            <li>
              {explanation[mainTaste].title} :{" "}
              {(Number(mainTasteRatio) * 100).toFixed(2)}%
            </li>
            <li>
              {explanation[subTaste].title} :{" "}
              {(Number(subTasteRatio) * 100).toFixed(2)}%
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </ResultBox>
  );
}
