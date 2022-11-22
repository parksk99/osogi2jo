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

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #295b77;
    }
    &::-webkit-scrollbar-track {
      background-color: #00ff0000;
    }
  }
`;

export const PlatformBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px 30px 60px 30px;
  gap: 20px;

  & > .title-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > .title {
      font-size: 22px;
      font-weight: 800;
    }
  }

  & > .platform-box {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    grid-auto-flow: dense;
  }
`;

export const PlatformItem = styled.div<{ index: number }>`
  width: 100%;
  height: 170px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }

  & > .icon-box {
    position: relative;
    width: 120px;
    height: 120px;

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
    white-space: pre-line;
    gap: 5px;
    & > .title {
      font-size: 18px;
      font-weight: 700;
    }

    & > .subtitle {
      font-size: 16px;
      font-weight: 600;
    }

    & > .content {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;
