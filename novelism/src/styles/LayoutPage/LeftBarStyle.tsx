import styled from "styled-components";

export const Container = styled.div`
  width: 18vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  gap: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & > .title {
    background: linear-gradient(135deg, #43c6ac, #191654);
    font-weight: 900;
    font-family: "Pretendard Variable";
    color: transparent;
    -webkit-background-clip: text;
    font-size: 20px;
  }
`;

export const ListCover = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: 0px;
  gap: 10px;
  list-style-type: none;

  & > li {
    display: flex;
    gap: 13px;
    align-items: center;
    justify-content: flex-start;
  }
  & > .list-title {
    font-size: 18px;
    font-weight: 900;
    color: #cccbce;
  }
  & > .list-subtitle {
    margin-left: 10px;
    color: #191654;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s;
  }
  & > .list-subtitle:hover {
    transform: scale(1.02);
  }
`;

export const Circle = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background: ${(props) => props.color};
  border-radius: 100%;
`;
