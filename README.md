# SpotifyCopySongURLForDiscord

## Unfortunately, the Discord bot "groovy" is no longer in service

Copy a selected song URI and automatically add the neccessary details for the Discord bot "groovy".


## What does this do?
This implements a setting inside of Spotify to right-click and copy the songs URI to be posted in Discord servers.
It automatically appends the bot suffix `-play` used by the [groovy bot](https://groovy.bot/) and detects if the shuffle setting is turned on in spotify and accordingly adds the shuffle flag `-s` for the bot. So all you need to do is right-click a song, playlist or album and select `Copy for discord play`. Then hop over to your favorite discord server and simply paste the contents of your clipboard.

Be sure to enable this feature inside of spotify after installing it!
You can find this under your profile name:

![image](https://user-images.githubusercontent.com/36928284/122121158-94c84300-ce2b-11eb-805c-ce610c3c7fbc.png)

When this option is enabled you will find a new button on the context menu:

![image](https://user-images.githubusercontent.com/36928284/122121285-ba554c80-ce2b-11eb-90e9-be5fe669897b.png)

## Can I use this with a different bot?
I do not know every discord bot or other bot but this simply constructs a string with the given URL in it. So if you tweak the code a bit I am sure you can make it work too!

## Installation:
This is an extension to use with [Spicetify](https://github.com/khanhas/spicetify-cli). The given `.js` file is the only file needed.

So first of all you need to download and install Spicetify. On the github page are all the neccessary details for that.
Navigate to the Spicetify directory and paste the downloaded `discordPlayClipboardShare.js` file inside of the `Extensions` folder.

_(You can download this file here: <a href="https://github.com/Smonman/SpotifyCopySongURLForDiscord/releases">Download</a>)_

Next, you need to change the `config-xpui.ini` in the Spicetify directory as follows:
Change the line where the extensions are specified from
```
extensions                   =
```
to
```
extensions                   = discordPlayClipboardShare.js
```

If you only want this extension and no appearance changes, you also need to change these lines from:
```
replace_colors          = 1
current_theme           = <any theme of your choice>
inject_css              = 1
```
to:
```
replace_colors          = 0
current_theme           = <any theme of your choice>
inject_css              = 0
```

Then open the terminal and enter `spicetify backup apply`.
After every Spotify update you need to enter the above command again!

__For further infos on how to use Spicetify, please visit their repo!__
