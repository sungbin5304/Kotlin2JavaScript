const scriptName = "kt2js";

/**
 * Create by Sungbin at 2020.07.01.
 *
 * Copyright (C) SungBin
 * all rights reserved.
 */
 
String.prototype.convert = function() {
    return eval(("\"" + this.match(/\$\{([^}]*)\}|\$([^\W]*)|\}?([^$]*)/gim).map(e => {
        if (typeof e !== "string") return "";
        if (e.startsWith("$") && e.endsWith("}")) {
            let value = e.substr(1);
            value = value.substr(1, value.lastIndexOf("}") - 1);
            return "\"+(" + value + ")+\"";
        } else if (e.startsWith("$") && !e.endsWith("}")) {
            return "\"+" + e.substr(1) + "+\"";
        } else return e;
    }).join("") + "\"").split("\n").join("☆♡♡☆")).split("☆♡♡☆").join("\n");
};

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    replier.reply(msg.convert());
}