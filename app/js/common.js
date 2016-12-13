const ipc = require('electron').ipcRenderer

function getPage(pageName) {
    ipc.send('changePage', pageName);
}