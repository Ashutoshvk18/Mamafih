const electron = require('electron')
const path = require('path')
const url = require('url')
const ipc = electron.ipcMain

const app = electron.app

const browserWindow = electron.BrowserWindow

let mainWindow

function createWindow() {
    mainWindow = new browserWindow({ width: 800, height: 600, show: false })

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/app/home.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })

    //mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function() {
        mainWindow = null
    })
}

app.on('ready', createWindow)

ipc.on('changePage', (event, pageName) => {
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/app/' + pageName + '.html'),
        protocol: 'file:',
        slashes: false
    }))
})