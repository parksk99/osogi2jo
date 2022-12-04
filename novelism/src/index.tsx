import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles";
import { RecoilRoot } from "recoil";
import Frame from "./components/Frame";
import "electron-react-titlebar/assets/style.css";
import Page from "./Page";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <GlobalStyles />
    <Frame />
    <Page />
  </RecoilRoot>
);
