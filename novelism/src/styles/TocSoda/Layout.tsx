import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #295b77;
  }
  &::-webkit-scrollbar-track {
    background-color: #00ff0000;
  }

  & > webview {
    width: 100%;
    height: 9000px;
  }

  & > .btn-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: fixed;
    bottom: 30vh;
    left: 10vw;

    & > button {
      border: none;
      background: #0000007f;
      color: white;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.5;
      cursor: pointer;
      transition: all 0.25s;
    }

    & > button:hover {
      opacity: 1;
    }
  }
`;
