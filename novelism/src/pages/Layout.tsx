import LeftBar from "../components/Bars/LeftBar";
import PlayBar from "../components/Bars/PlayBar";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { recoilMenuState, MenuState, Menus } from "../states/recoilMenuState";
import Home from "../pages/Home";
import { Container, ViewBox } from "../styles/LayoutPage/LayoutStyle";
import LikedGenre from "./LikedGenre";

export default function Layout() {
  const [recoilInfo, setRecoilInfo] =
    useRecoilState<MenuState>(recoilMenuState);
  return (
    <Container>
      <LeftBar />
      <PlayBar />
      <ViewBox>
        {recoilInfo.state === Menus.Home ? (
          <Home />
        ) : recoilInfo.state === Menus.Genre ? (
          <LikedGenre />
        ) : (
          <></>
        )}
      </ViewBox>
    </Container>
  );
}
