import guitar from "../../resources/Images/guitar.svg";
import error from "../../resources/Images/404.svg";
import piano from "../../resources/Images/piano.svg";
import idol from "../../resources/Images/idol.svg";
import { useState, useEffect, useRef } from "react";
import { ResultBox } from "../../styles/LikedGenre/GenreStyle";
import { ResultImg, result } from "../../resources/result";

interface resultProps {
  item: result;
}

const images = [guitar, error, piano, idol];

export default function Result(props: resultProps) {
  const { img, subtitle, title, content, analysis } = props.item;

  return (
    <ResultBox>
      <div className="img-box">
        <img src={images[img]} alt={title} />
      </div>
      <div className="info-box">
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
        <span className="content">{content}</span>
        <span className="analysis">{analysis}</span>
      </div>
    </ResultBox>
  );
}
