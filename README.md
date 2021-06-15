# SpotifyCopySongURIForDiscord
Copy a selected song URI and automatically add the neccessary details for the Discord bot "groovy".


This is an extension to use with (Spicetify)[https://github.com/khanhas/spicetify-cli]. The given `.js` file is the only file needed.

To use it with Spicetify, after installing that, you need to change the `config.ini` in the Spicetify directory. In there, you need to change the line 
```
extensions                   =
```
to
```
extensions                   = discordPlayClipboardShare.js
```
And don't forgett to move the downloaded `discordPlayClipboardShare.js` inside the `Extensions` folder in the Spicetify directory.
