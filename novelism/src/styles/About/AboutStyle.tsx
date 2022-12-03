import styled from "styled-components";

export const AboutLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;

  & > .title-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    & > .title {
      font-size: 24px;
      font-weight: 900;
      color: #242424;
    }
    & > .subtitle {
      font-size: 16px;
      font-weight: 400;
      color: #242424;
    }
  }
`;

export const ItemLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .img-box {
    position: relative;
    width: 180px;
    height: 200px;

    & > .back-box {
      width: 150px;
      height: 150px;
      border-radius: 100%;
      background: linear-gradient(135deg, #43c6ac, #191654);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 5;
    }
    & > img {
      width: 180px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }
  }

  & > .name {
    font-weight: 600;
    color: #242424;
    margin-top: 5px;
  }

  & > .role {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 12px;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 5px;
    background-color: #242424;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
`;
