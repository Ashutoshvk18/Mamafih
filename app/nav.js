const ipc = require('electron').ipcMain

ipc.on('preparePage', function(event, arg) {
    alert('a')
    hideAllSections()
    deActivateAllButtons()
    activateDefaultSection()
})

document.body.addEventListener('click', function(event) {
    handleSectionTrigger(event)
})

function hideAllSections() {
    const sections = document.querySelectorAll('.task-template')
    Array.prototype.forEach.call(sections, function(section) {
        section.style.display = 'none'
    })
}

function deActivateAllButtons() {
    const buttons = document.querySelectorAll('.nav-group-item')
    Array.prototype.forEach.call(buttons, function(button) {
        button.classList.remove('active')
    })
}

function activateDefaultSection() {
    document.getElementById('home').click()
}