import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 60px;
  padding: 40px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #295b77;
  }
  &::-webkit-scrollbar-track {
    background-color: #00ff0000;
  }
`;

export const UpperBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  color: #171717;

  & > .title {
    font-size: 24px;
    font-weight: 800;
  }

  & > .subtitle {
    font-size: 16px;
    font-weight: 300;
  }
`;

export const UpperContentBox = styled.div`
  width: 100vw;
  height: 200px;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  grid-gap: 20px;
  margin-top: 10px;

  & > .result-box {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  & > .my-artists {
    width: 100%;
    height: 100%;
  }
`;

export const ResultBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  padding: 20px;
  gap: 10px;
  align-items: center;
  justify-items: center;

  & > .img-box {
    width: 140px;
    height: 140px;
    aspect-ratio: auto 1/1;
    position: relative;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
  }

  & > .info-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    white-space: pre-line;
    word-break: keep-all;
    color: #141414;

    & > .num {
      font-size: 12px;
      font-weight: 400;
    }

    & > .title {
      font-size: 18px;
      font-weight: 700;
    }

    & > .subtitle {
      font-size: 16px;
      font-weight: 500;
    }

    & > .content {
      font-size: 14px;
      font-weight: 400;
      margin-top: 5px;
    }

    & > .ratio {
      list-style-type: none;
      padding: 0;
      margin: 10px 0px 0px 0px;
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

export const BottomBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  color: #171717;

  & > .title {
    font-size: 24px;
    font-weight: 800;
  }

  & > .subtitle {
    font-size: 16px;
    font-weight: 300;
  }

  & > .artists-box {
    align-self: center;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }

  & > .save-btn {
    align-self: center;
    margin-top: 10px;
    border: none;
    background: linear-gradient(135deg, #43c6ac, #191654);
    color: white;
    font-weight: 600;
    font-size: 16px;
    border-radius: 5px;
    padding: 6px 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    cursor: pointer;
    transition: all 0.25s;
    font-family: "Pretendard Variable";

    &:hover {
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export const ItemLayout = styled.div`
  width: 55%;
  height: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;

  & > .img-box {
    width: 16%;
    min-width: 65px;
    aspect-ratio: auto 1/1;
    position: relative;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
