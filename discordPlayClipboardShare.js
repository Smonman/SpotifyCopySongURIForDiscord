/// <reference path="../globals.d.ts" />

(function discordplay() {
    // wait until the local storage is loaded
    if (!Spicetify.LocalStorage) {
        setTimeout(discordplay, 1000);
        return;
    }

    let isEnabled = Spicetify.LocalStorage.get("discordShareMode") === "1";

    new Spicetify.Menu.Item("Discord Share Mode", isEnabled, (self) => {
        isEnabled = !isEnabled;
        Spicetify.LocalStorage.set("discordShareMode", isEnabled ? "1" : "0");
        self.setState(isEnabled);
    }).register();


    function copyForDiscordPlay(uris) {
        const uriObj = Spicetify.URI.fromString(uris[0]);
        const openURL = uriObj.toOpenURL();

        let copyString = "";
        let shuffleEnabled = Spicetify.Player.getShuffle();

        console.log(shuffleEnabled);

        switch (uriObj.type) {
            case Spicetify.URI.Type.TRACK:
                copyString = discordBotStringBuilder(openURL, false);
                break;
            case Spicetify.URI.Type.PLAYLIST:
                copyString = discordBotStringBuilder(openURL, shuffleEnabled);
                break;
        }

        copyStringToClipboard(copyString);

        Spicetify.showNotification("copied");
    }

    function discordBotStringBuilder(url, shuffle) {
        // i made these variables for an easy change or easier adaptation to other bots
        const botPrefix = "-";

        const botPlayCommand = "play";
        const botShuffleCommand = "s";

        if (!shuffle) {
            return botPrefix + botPlayCommand + " " + url;
        } else {
            return botPrefix + botPlayCommand + " " + url + " " + botPrefix + botShuffleCommand; // the shuffle command is in reality a flag and can be used inline
        }
    }

    function shouldAddContextMenu(uris) {
        // hide the context menu item if the "discord play mode" is disabled
        if (!isEnabled) {
            return false;
        }

        // if more the one song is selected, hide the context item
        if (uris.length > 1) {
            return false;
        }

        // get the first URI
        const uriObj = Spicetify.URI.fromString(uris[0]);

        // check if the type is a track or a playlist
        if (uriObj.type === Spicetify.URI.Type.TRACK || uriObj.type === Spicetify.URI.Type.PLAYLIST) {
            return true;
        } else {
            return false;
        }
    }

    // hacky way to copy a string to a clipboard.
    function copyStringToClipboard(str) {
        // Create new element
        var tempElement = document.createElement("textarea");
        // Set value (string to be copied)
        tempElement.value = str;
        // Set non-editable to avoid focus and move outside of view
        tempElement.setAttribute("readonly", "");
        tempElement.style = { position: "absolute", left: "-9999px" };
        document.body.appendChild(tempElement);
        // Select text inside element
        tempElement.select();
        // Copy text to clipboard
        document.execCommand("copy");
        // Remove temporary element
        document.body.removeChild(tempElement);
    }

    // add a new context menu item
    new Spicetify.ContextMenu.Item("Copy for discord play", copyForDiscordPlay, shouldAddContextMenu, "copy").register();
})();