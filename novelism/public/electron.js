"use strict";
exports.__esModule = true;
var path = require("path");
var url = require("url");
var electron_1 = require("electron");
var isDev = require("electron-is-dev");
var ipc = electron_1.ipcMain;
var baseUrl = "http://localhost:3000";
var mainWindow;
function createMainWindow() {
    mainWindow = new electron_1.BrowserWindow({
        minWidth: 1080,
        minHeight: 700,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        },
        icon: path.join(__dirname, "../build/512x512.png")
    });
    var mainWindowUrl = url
        .pathToFileURL(path.join(__dirname, "../build/index.html"))
        .toString();
    mainWindow.loadURL(isDev ? baseUrl : mainWindowUrl);
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
    ipc.on("closeApp", function () {
        console.log("닫혀라참깨");
    });
}
electron_1.app.on("ready", function () {
    createMainWindow();
});
electron_1.app.on("window-all-closed", function () {
    electron_1.app.quit();
});
electron_1.app.on("activate", function () {
    if (mainWindow === null) {
        createMainWindow();
    }
});
