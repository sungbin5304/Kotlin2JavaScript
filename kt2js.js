const scriptName = "kt2js";

/**
 * Create by Sungbin at 2020.07.01.
 *
 * Copyright (C) SungBin
 * all rights reserved.
 */

String.prototype.convert = function(argu) {
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

Array.prototype.size = function() {
    return this.length;
};

Array.prototype.isEmpty = function() {
    return this.size() > 0;
};

Array.prototype.isNotEmpty = function() {
    return !this.isEmpty();
};

Array.prototype.contains = function(text) {
    return this.includes(text);
};

Array.prototype.clear = function() {
    return [];
}

Array.prototype.remove = function(element, removeAll) {
    if (!this.contains(element)) return this;
    if (!removeAll) {
        this.splice(index, 1);
        return this;
    } else {
        this.remove(element);
        if (this.contains(element)) this.remove(element, true);
        else return this;
    }
};q

String.prototype.toInt = function() {
    return Number(this);
};

String.prototype.toBoolean = function() {
   return this == true;
};

String.prototype.trimAllLine = function() {
    return this.split("\n").map(e => {
        return e.trim();
    }).join("\n");
};

String.prototype.contains = function(text) {
    return this.includes(text);
};

String.prototype.replaceAll = function(a, b) {
    return this.split(a).join(b);
};

String.prototype.replaceLast = function(a, b) {
    if (this.contains(a)) {
        let lastIndex = this.lastIndexOf(a);
        let string1 = this.substring(0, lastIndex);
        let string2 = this.substring((lastIndex + a.length), this.length);
        return string1 + b + string2;
    } else return this;
};

function arrayOf(){
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        array.push(arguments[i]);
    }
    return array;
};

const arrayOfNulls = (size) => new Array(size).join(null);
