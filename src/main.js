const { app, BrowserWindow } = require('electron');
const touchBar = require('./touchBar');

app.whenReady().then(() =>{
  const window = new BrowserWindow({
    frame: false,
    titleBarStyle: 'hiddenInset',
    width: 200,
    height: 200,
    backgroundColor: '#000'
  });
  window.loadURL('about:blank');
  window.setTouchBar(touchBar);
});
