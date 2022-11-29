import styled from "styled-components";

export const Container = styled.div<{ collapse: boolean }>`
  width: 96vw;
  height: 10vh;
  border-radius: 10px;
  background: #636363b3;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  position: absolute;
  z-index: 100;
  left: 1.5vw;
  bottom: ${(props) => (props.collapse ? "-10vh" : "20px")};
  transition: all 0.25s;

  & > .collapse-btn {
    position: absolute;
    left: 0.5vw;
    bottom: 12vh;
    background: none;
    border: none;
    font-size: 24px;
    color: #636363;
    cursor: pointer;
    transform: ${(props) => (props.collapse ? "rotate(180deg)" : "")};
    transition: all 0.5s;
  }

  & > .youtube-player {
    position: absolute;
    top: 0px;
    right: 0px;
  }
`;

export const NoPlayBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  width: 100%;
  height: 100%;
  padding-left: 50px;
  gap: 3px;

  & > .title {
    font-weight: 700;
    font-size: 20px;
    cursor: default;
  }

  & > .subtitle {
    font-weight: 300;
    font-size: 16px;
    cursor: default;
  }
`;

export const PlayBox = styled.div<{ img: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;

  & > .stop-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1000;
  }

  & > .img-box {
    height: 80%;
    aspect-ratio: 1/1;
    border-radius: 100%;
    z-index: 1000;
    border-radius: 100%;
    position: relative;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & > .info-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: white;
    height: 100%;
    padding-left: 50px;
    gap: 3px;
    z-index: 1000;

    & > .title {
      font-weight: 700;
      font-size: 20px;
      cursor: default;
    }

    & > .emotion {
      font-weight: 300;
      font-size: 16px;
      cursor: default;
    }
  }

  & > .blur-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    background: #2f2f2f7a;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }

  & > .youtube-player {
    position: absolute;
    bottom: -5000px;
  }
`;

export const CdBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & > .cd-player {
    width: 60%;
    aspect-ratio: auto 1/1;
    border-radius: 100%;
    background-color: white;
    font-weight: 300;
    font-size: 16px;
  }
`;

export const MarqueeBox = styled.div`
  width: 100%;
  display: flex;
  flex: 0 0 auto;
  white-space: nowrap;
  overflow: hidden;
  transition: 0.3s;
  color: white;

  @keyframes textLoop {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  &:hover {
    color: #000;
  }
  &:hover & > span {
    animation-play-state: paused;
    cursor: pointer;
  }
  & > span {
    animation: textLoop 10s linear infinite;
    padding-right: 1.4881vw;
    cursor: default;
  }
`;
