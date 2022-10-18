import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { RecoilRoot } from "recoil";
import Frame from "./components/Frame";
import Layout from "./pages/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <GlobalStyles />
      <Frame />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
