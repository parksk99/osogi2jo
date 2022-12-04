import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  & > .carousel-dots {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    & > li {
      background-color: #ffffff;
      height: 10px;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      transition: all 0.25s;
      cursor: pointer;
    }
    & > .cur-index {
      width: 22px;
    }
    & > .index {
      width: 10px;
    }
  }
`;

export const Item = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url('${props.image}')`};
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const InfoBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 5px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 0px 40px 20px 20px;
  background: linear-gradient(to right, #000000c2, #00ff0000);
  white-space: pre-line;

  & > .quote {
    color: white;
    font-size: 28px;
    font-weight: 700;
    text-shadow: 2px 2px 4px #000000c2;
  }

  & > .tag-box {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;

    & > .tag {
      font-size: 18px;
      color: black;
      background-color: white;
      padding: 3px 5px;
      border-radius: 5px;
      font-weight: 900;
    }
    & > .playlist {
      font-size: 24px;
      font-weight: 700;
      color: white;
      text-shadow: 2px 2px 4px #000000c2;
    }
  }
  & > .title {
    color: white;
    text-shadow: 1px 1px 2px #000000c2;
  }

  & > .platform {
    color: white;
    font-size: 14px;
    font-weight: 300;
    text-shadow: 1px 1px 2px #000000c2;
  }
`;
