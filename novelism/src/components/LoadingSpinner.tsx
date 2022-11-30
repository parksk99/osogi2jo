import styled from "styled-components";

export default function LoadingSpinner() {
  return (
    <LoadingBox>
      <LdsRing>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LdsRing>
    </LoadingBox>
  );
}

const LoadingBox = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
`;

const LdsRing = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  & > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  & > div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & > div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & > div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
