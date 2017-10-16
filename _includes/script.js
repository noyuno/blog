var white = "#eee";
var black = "#111";

var color = function (b, c) {
    if (b) {
        document.body.style.backgroundColor = black;
        document.body.style.color = white;
        [].forEach.call(document.getElementsByTagName("table"), function(t) {
            t.style.border = "1px outset " + white;
        });
        [].forEach.call(document.getElementsByTagName("th"), function(t) {
            t.style.border = "1px inset " + white;
        });
        [].forEach.call(document.getElementsByTagName("td"), function(t) {
            t.style.border = "1px inset " + white;
        });
        if (c) {
            window.localStorage.setItem("color", "black");
        }
    } else {
        document.body.style.backgroundColor = white;
        document.body.style.color = black;
        [].forEach.call(document.getElementsByTagName("table"), function(t) {
            t.style.border = "1px outset " + black;
        });
        [].forEach.call(document.getElementsByTagName("th"), function(t) {
            t.style.border = "1px inset " + black;
        });
        [].forEach.call(document.getElementsByTagName("td"), function(t) {
            t.style.border = "1px inset " + black;
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
