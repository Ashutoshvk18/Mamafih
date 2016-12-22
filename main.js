const electron = require('electron')
const path = require('path')
const url = require('url')
const ipc = electron.ipcRenderer

const app = electron.app

app.setName('Mamafih')

const browserWindow = electron.BrowserWindow

let mainWindow

function createWindow() {
    mainWindow = new browserWindow({ width: 900, height: 700, show: false })

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })

    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function() {
        mainWindow = null
    })

    ipc.send('preparePage')
}

app.on('ready', createWindow)