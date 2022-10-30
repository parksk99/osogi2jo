import { atom } from "recoil";

export enum Menus {
  Home,
  About,
  Tocsoda,
  Novelism,
  Genre,
  Search,
}

export interface MenuState {
  state: Menus;
}

const initialState: MenuState = {
  state: Menus.Home,
};

export const recoilMenuState = atom({
  key: "recoilMenuState",
  default: initialState,
});
