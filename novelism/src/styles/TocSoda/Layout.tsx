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
`;
