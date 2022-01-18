// This file is the entry point for the Electron application.

const { app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  console.log('Environment:', process.env.NODE_ENV)
  if (process.env.NODE_ENV !== 'development') {
    win.loadFile(`${__dirname}/renderer/dist/index.html`)
  } else {
    console.log('Development mode')
    win.loadURL('http://localhost:3000/')
  }
}

app.whenReady()
  .then(() => {
    createWindow()

    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})