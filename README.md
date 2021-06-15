# SpotifyCopySongURLForDiscord
Copy a selected song URI and automatically add the neccessary details for the Discord bot "groovy".

This implements a setting iside of Spotify to right-click and copy the songs URI to be posted in Discord servers.
It automatically appends the bot suffix `-` used by the [groovy bot](https://groovy.bot/).

This is an extension to use with [Spicetify](https://github.com/khanhas/spicetify-cli). The given `.js` file is the only file needed.

To use it with Spicetify, after installing that, you need to change the `config-xpui.ini` in the Spicetify directory as follows:
Change the line where the extensions are specified from
```
extensions                   =
```
to
```
extensions                   = discordPlayClipboardShare.js
```
Also don't forget to move the downloaded `discordPlayClipboardShare.js` inside the `Extensions` folder in the Spicetify directory!
