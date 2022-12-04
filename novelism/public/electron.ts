import * as path from "path";
import * as url from "url";

import { app, BrowserWindow, ipcMain } from "electron";
import * as isDev from "electron-is-dev";

const ipc = ipcMain;

const baseUrl: string = "http://localhost:3000";

let mainWindow: BrowserWindow | null;

function createMainWindow(): void {
  mainWindow = new BrowserWindow({
    minWidth: 1080,
    minHeight: 700,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
    },
    icon: path.join(__dirname, "../build/512x512.png"),
  });

  const mainWindowUrl: string = url
    .pathToFileURL(path.join(__dirname, "../build/index.html"))
    .toString();

  mainWindow.loadURL(isDev ? baseUrl : mainWindowUrl);

  mainWindow.on("closed", (): void => {
    mainWindow = null;
  });

  ipc.on("closeApp", (): void => {
    console.log("닫혀라참깨");
  });
}

app.on("ready", (): void => {
  createMainWindow();
});

app.on("window-all-closed", (): void => {
  app.quit();
});

app.on("activate", (): void => {
  if (mainWindow === null) {
    createMainWindow();
  }
});
