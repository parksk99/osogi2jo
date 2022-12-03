import * as path from "path";
import * as url from "url";

import { app, BrowserWindow } from "electron";
import * as isDev from "electron-is-dev";

const baseUrl: string = "http://localhost:3000";

let mainWindow: BrowserWindow | null;

function createMainWindow(): void {
  mainWindow = new BrowserWindow({
    minWidth: 1080,
    minHeight: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
    },
    icon: path.join(__dirname, "./512x512.png"),
  });

  const mainWindowUrl: string = url
    .pathToFileURL(path.join(__dirname, "../build/index.html"))
    .toString();

  mainWindow.loadURL(isDev ? baseUrl : mainWindowUrl);

  mainWindow.on("closed", (): void => {
    mainWindow = null;
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
