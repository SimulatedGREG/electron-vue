import { app, BrowserWindow } from 'electron'
import include from './include'
import path from 'path'

let mainWindow
let config = {}

if (process.env.NODE_ENV === 'development') {
  config = require('../../../config')
  config.url = `http://localhost:${config.port}`
} else {
  config.devtron = false
  config.url = path.join('file://', __dirname, '/index.html')
}

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  })

  mainWindow.loadURL(config.url)
  if (process.env.NODE_ENV === 'development') {
    // mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  if (config.devtron) {
    BrowserWindow.addDevToolsExtension(path.join(__dirname, '../node_modules/devtron'))
  } else {
    BrowserWindow.removeDevToolsExtension('devtron')
  }

  console.log('mainWindow opened')
  include()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
