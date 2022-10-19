import styled from "styled-components";

export const Container = styled.div<{ color: string; collapse: boolean }>`
  width: ${(props) => (props.collapse ? "15vw" : "96vw")};
  height: ${(props) => (props.collapse ? "25vh" : "10vh")};
  border-radius: 10px;
  background: ${(props) => props.color};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  position: absolute;
  left: ${(props) => (props.collapse ? "1.5vw" : "50%")};
  transform: ${(props) => (props.collapse ? "" : "translateX(-50%)")};
  bottom: 20px;
  transition: all 0.8s;

  & > .collapse-btn {
    position: absolute;
    left: 0.5vw;
    bottom: ${(props) => (props.collapse ? "25.5vh" : "10.5vh")};
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
    font-size: 24px;
    cursor: default;
  }

  & > .subtitle {
    font-weight: 300;
    font-size: 16px;
    cursor: default;
  }
`;
