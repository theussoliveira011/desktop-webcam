const { app, BrowserWindow } = require('electron');
const path = require('path');


const createWindows = () => {
  const myView = new BrowserWindow({
    width: 800,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
    transparent: true
  });

  myView.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindows();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindows();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});