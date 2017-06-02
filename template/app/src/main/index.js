'use strict'

import { app, BrowserWindow } from 'electron'

const RED = '\x1b[31m'
const BLUE = '\x1b[34m'
const YELLOW = '\x1b[33m'
const END = '\x1b[0m'

const colorize = (str, color, bold = false) => (bold ? '\u001b[1m' : '') + color + str + END

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../../../config').port}`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  })

  mainWindow.webContents.on('did-fail-load', (_, errCode) => {
    let suggestion = errCode === -324 ? 'Please check if you have some proxy settings\n' : ''
    let msg = `${colorize('Error: ', RED)} did fail to load URL ${colorize(winURL, YELLOW)} since errCode ${colorize(errCode, RED)}
${colorize(suggestion, YELLOW, true)}For more details please see ${colorize('https://electron.atom.io/docs/api/web-contents/#event-did-fail-load', BLUE)}`
    console.log(msg)
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // eslint-disable-next-line no-console
  console.log('mainWindow opened')
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
