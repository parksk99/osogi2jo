import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & > .container-content {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow-y: scroll;
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #295b77;
    }
    &::-webkit-scrollbar-track {
      background-color: #00ff0000;
    }

    & > button {
      border: none;
      border-radius: 10px;
      background: linear-gradient(135deg, #43c6ac, #191654);
      padding: 10px 15px;
      font-weight: 600;
      color: white;
      cursor: pointer;
      align-self: flex-end;
      margin-top: -37px;
      transition: all 0.25s;
      & > span {
        font-family: "Pretendard Variable";
      }

      &:hover {
        transform: scale(1.02);
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }
`;

export const GridContainer = styled.div`
  width: 100%;
  min-height: 600px;
`;

export const NovelGridBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 30px;
`;

export const NoNovel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > .img-box {
    width: 30%;
    aspect-ratio: 1/1;
    position: relative;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
  }
`;

export const CloseBtn = styled.div`
  width: 30px;
  height: 30px;
  border: none;
  background-color: #d9d9d9;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -10px;
  top: -10px;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
`;

export const InputModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  gap: 20px;

  & > .main-title {
    font-size: 24px;
    color: #242424;
    font-weight: 900;
  }

  & > ul {
    width: 100%;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    & > li {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: flex-start;

      & > label {
        font-size: 14px;
        color: #545454;
      }

      & > input[type="text"] {
        border: none;
        background-color: white;
        width: 100%;
        height: 35px;
        border-radius: 10px;
        padding: 0px 0px 0px 10px;
      }
    }
  }

  & > .save-btn {
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #43c6ac, #191654);
    padding: 10px 15px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    align-self: flex-end;
    transition: all 0.25s;
    & > span {
      font-family: "Pretendard Variable";
    }

    &:hover {
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.98);
    }
  }

  & > .err {
    font-size: 14px;
    color: #f15441;
    align-self: flex-end;
  }
`;
