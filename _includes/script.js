var white = "#eee";
var black = "#111";

var color = function (b, c) {
    var tag = function (tag, set, color) {
        [].forEach.call(document.getElementsByTagName(tag), function(t) {
            t.style.border = "1px " + set + " " +color;
        });
    };
    var tagBottom = function (tag, set, color) {
        [].forEach.call(document.getElementsByTagName(tag), function(t) {
            t.style.borderBottom = "1px " + set + " " + color;
        });
    };
    var classBottom = function (cla, set, color) {
        [].forEach.call(document.getElementsByClassName(cla), function(t) {
            t.style.borderBottom = "1px " + set + " " + color;
        });
    };
    if (b) {
        document.body.style.backgroundColor = black;
        document.body.style.color = white;
        tag("table", "outset", white);
        tag("th", "inset", white);
        tag("td", "inset", white);
        classBottom("masthead", "solid", white);
        tagBottom("hr", "solid", white);
        /*
        [].forEach.call(document.getElementsByTagName("table"), function(t) {
            t.style.border = "1px outset " + white;
            var scroll = document.createElement("div");
            scroll.setAttribute("class", "scroll");
            t.parentNode.insertBefore(scroll, t.nextSibling);
            scroll.appendChild(t);
        });
        [].forEach.call(document.getElementsByTagName("th"), function(t) {
            t.style.border = "1px inset " + white;
        });
        [].forEach.call(document.getElementsByTagName("td"), function(t) {
            t.style.border = "1px inset " + white;
        });
        [].forEach.call(document.getElementsByClassName("masthead"), function(t) {
            t.style.borderBottom = "1px solid" + white;
        });
        [].forEach.call(document.getElementsByTagName("hr"), function(t) {
            t.style.borderBottom = "1px solid" + white;
        });
        */
        if (c) {
            window.localStorage.setItem("color", "black");
        }
    } else {
        document.body.style.backgroundColor = white;
        document.body.style.color = black;
        tag("table", "outset", black);
        tag("th", "inset", black);
        tag("td", "inset", black);
        classBottom("masthead", "solid", black);
        tagBottom("hr", "solid", black);
        
        [].forEach.call(document.getElementsByTagName("table"), function(t) {
            t.style.border = "1px outset " + black;
        });
        [].forEach.call(document.getElementsByTagName("th"), function(t) {
            t.style.border = "1px inset " + black;
        });
        [].forEach.call(document.getElementsByTagName("td"), function(t) {
            t.style.border = "1px inset " + black;
        });
        [].forEach.call(document.getElementsByClassName("masthead"), function(t) {
            t.style.borderBottom = "1px solid" + black;
        });
        [].forEach.call(document.getElementsByTagName("hr"), function(t) {
            t.style.borderBottom = "1px solid" + black;
        });
        
        if (c) {
            window.localStorage.setItem("color", "white");
        }
    }
};

var init_color = function () {
    color(!(window.localStorage.getItem("color") == "white"), false);
};
var change_color = function () {
    color((window.localStorage.getItem("color") == "white"), true);
};

window.onload = function () {
    init_color();
};

