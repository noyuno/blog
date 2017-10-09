var white = "#eee";
var black = "#111";

var init_color = function () {
    if (window.localStorage.getItem("color") == "white") {
        document.body.style.backgroundColor = white;
        document.body.style.color = black;
    } else {
        document.body.style.backgroundColor = black;
        document.body.style.color = white;
    }
};
var change_color = function () {
    if (window.localStorage.getItem("color") == "white") {
        window.localStorage.setItem("color", "black")
        document.body.style.backgroundColor = black;
        document.body.style.color = white;
    } else {
        window.localStorage.setItem("color", "white")
        document.body.style.backgroundColor = white;
        document.body.style.color = black;
    }
};

window.onload = function () {
    init_color();
};

