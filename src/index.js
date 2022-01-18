// This file is the entry point for the Electron application.

const { app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  if (process.env.NODE_ENV !== 'development') {
    // Load production build
    win.loadFile(`${__dirname}/renderer/dist/index.html`)
  } else {
    // Load vite dev server page 
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