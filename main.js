const {app, BrowserWindow} = require('electron')

const express = require('express');
const { HLTV } = require('hltv')


require('electron-reload')(__dirname);

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800, 
    height: 600,
    //titleBarStyle: 'hiddenInset',
    title: 'HLTV',
    icon: 'assets/icon.png'})

  // and load the index.html of the app.

  win.loadFile('index.html')
  //win.loadURL('https://hltv.org')
  //if (process.platform === 'darwin') {
  //  win.webContents.on('did-finish-load', function() {
  //    win.webContents.insertCSS('html, .navbar{-webkit-app-region: drag; height: 40px; padding-top: 40px; !important;}',1)
  //  });
  //}
}

app.on('ready', createWindow)