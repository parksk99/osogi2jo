import styled from "styled-components";

export const Container = styled.div<{ color: string; collapse: boolean }>`
  width: 96vw;
  height: 10vh;
  border-radius: 10px;
  background: ${(props) => props.color};
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
