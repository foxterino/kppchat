const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    }
  });

  const appUrl = 'http://localhost:3000/';

  mainWindow.loadURL(appUrl);
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  const openedWindows = BrowserWindow.getAllWindows().length;

  if (openedWindows === 0) {
    createWindow();
  }
});
