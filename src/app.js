let { ipcRenderer } = require('electron')

let closeBtn = document.querySelector('#btn')
let project = document.querySelector('.project')
let webview = document.querySelector('webview')
let sidebar = document.querySelector('.sidebar')


closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open')
    toggleMenu()
})

project.addEventListener('click', () => {
    sidebar.classList.toggle('open')
    toggleMenu()
})

function toggleMenu() {
    if (sidebar.classList.contains('open')) {
        closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right')
    } else {
        closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu')
    }
}