import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faWindowMinimize,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import isElectron from "is-electron";
// import { IpcRenderer } from "electron";
// const { ipcRenderer } = window.require("electron");
// const ipc = ipcRenderer;

// declare global {
//   interface Window {
//     ipcRenderer: IpcRenderer;
//   }
// }

export default function Frame() {
  // const remote = window.require("electron").remote;
  // const currentWindow = remote.getCurrentWindow();
  // const [isMaximized, setIsMaximized] = useState(false);
  // const win = require("electron").remote.getCurrentWindow();
  const minimize = () => {
    // ipc.send("min");
    // currentWindow.minimize();
    // win.minimize();
  };
  const maximize = () => {
    // ipc.send("max");
    // setIsMaximized((prev) => !prev);
    // isMaximized ? win.unmaximize() : win.maximize();
  };
  const close = () => {
    // ipc.send("closeApp");
    // currentWindow.close();
    // win.close();
  };

  useEffect(() => {
    if (isElectron()) {
    }
  }, []);

  return (
    <Container>
      <span className="prevent-select"></span>
      <div className="prevent-select">
        {/* <span className="btn" onClick={() => minimize()}>
          <FontAwesomeIcon icon={faWindowMinimize} />
        </span>
        <span className="btn" onClick={() => maximize()}>
          <FontAwesomeIcon icon={faWindowMaximize} />
        </span>
        <span className="btn" onClick={() => close()}>
          <FontAwesomeIcon icon={faXmark} />
        </span> */}
      </div>
      <div className="drag" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #e4e4e4;
  padding: 10px 20px 5px 20px;
  font-size: 14px;
  /* -webkit-app-region: drag; */
  position: absolute;
  z-index: 99999999;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    & > .btn {
      cursor: pointer;
    }
  }

  & span {
    transition: all 0.15s;
    text-shadow: 2px 2px 4px #000000c2;
  }

  & span:hover {
    color: white;
  }

  & > .prevent-select {
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
  }

  & > .drag {
    position: absolute;
    z-index: 0;
    width: 90%;
    height: 100%;
    -webkit-app-region: drag;
  }
`;
