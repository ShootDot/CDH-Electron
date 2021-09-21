let { app, BrowserWindow, ipcMain } = require('electron')

let createWindow = () => {
    global.window = new BrowserWindow({
        frame: false,
        icon: 'src/img/icon.png',
        title: 'Chaotic Destiny Desktop',
        backgroundColor: '#0F152A',
        webPreferences: {
            webviewTag: true,
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    window.maximize()
    window.loadFile('src/index.html')
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

ipcMain.on('close', ({ sender }) => {
    BrowserWindow.fromWebContents(sender).close()
})
ipcMain.on('minimize', ({ sender }) => {
    BrowserWindow.fromWebContents(sender).minimize()
})
ipcMain.on('toggleMaximize', ({ sender }) => {
    let window = BrowserWindow.fromWebContents(sender)
    if (window.isMaximized()) {
        window.unmaximize()
    } else {
        window.maximize()
    }
})