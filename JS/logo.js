let obj;
let orig_width = orig_height = 0;
let px = py = 40;
let logoWidth = logoHeight = 0;

function Init() {
    Setup();
    PositionLogo();
}

function PositionLogo() {
    let height = window.innerHeight - py;
    let width = window.innerWidth - px;
    let top = height - logoHeight;
    let left = width - logoWidth;

    obj.left = left;
    obj.top = top;
}

function Setup() {
    obj = document.getElementById("lay10").style;

    logoWidth = parseInt(obj.width);
    logoHeight = parseInt(obj.height);
    window.onresize = new Function("PositionLogo()");
    window.onscroll = new Function("PositionLogo()");
}