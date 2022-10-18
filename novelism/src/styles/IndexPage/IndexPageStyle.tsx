import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #43c6ac, #2e6f81, #191654);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-size: 400% 400%;

  -webkit-animation: AnimationName 16s ease infinite;
  -moz-animation: AnimationName 16s ease infinite;
  -o-animation: AnimationName 16s ease infinite;
  animation: AnimationName 16s ease infinite;
  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-o-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  animation: AnimationName 15s ease infinite;

  & > .title-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    white-space: pre-line;

    & > .title {
      font-size: 68px;
      font-weight: 900;
      color: white;
      text-shadow: 2px 2px 6px #00000057;
    }

    & > .subtitle {
      font-size: 26px;
      font-weight: 400;
      color: white;
      text-shadow: 2px 2px 6px #00000057;
    }

    & > .btn-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;
      margin-top: 30px;
    }
  }

  & > .ani-box {
    position: relative;
    width: 480px;
    height: 480px;

    & > .circle {
      position: absolute;
      width: 400px;
      height: 400px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 100%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > .circle-stroke {
      position: absolute;
      width: 480px;
      height: 480px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 100%;
      border: 3px solid white;
    }

    & > .move-circle {
      @keyframes spin2 {
        from {
          transform: translate(50%, 220px) rotate(0turn) translate(-50%, 220px)
            translate(50%, 50%) rotate(1turn) translate(-50%, -50%);
        }
        to {
          transform: translate(50%, 220px) rotate(1turn) translate(-50%, 220px)
            translate(50%, 50%) rotate(0turn) translate(-50%, -50%);
        }
      }
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 100%;

      position: absolute;
      top: 20px;
      left: 44.5%;
      transform: translate(0%, -50%);
      animation: spin2 5s linear infinite;
    }
  }
`;

export const Button = styled.button`
  border: none;
  padding: 10px 80px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonText = styled.span`
  background: linear-gradient(135deg, #43c6ac, #191654);
  font-weight: 900;
  font-family: "Pretendard Variable";
  color: transparent;
  -webkit-background-clip: text;
  font-size: 24px;
`;
