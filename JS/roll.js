let browser_is, topon, topoff;

function Init() {
    browser_is = new Is();
    if (browser_is.major >= 4) {
        if ((browser_is.browser.indexOf("netscape")) || (browser_is.browser.indexOf("explorer")) ) {
            PreLoad();
        } else {
            alert("This Dynamic HTML Page Only Works in Netscape Navigator v4 or Internet Explorer 4 (or later)");
        }
    }
}

function Is() {
    let agt = navigator.userAgent.toLowerCase();
    
    this.major = parseInt(navigator.appVersion);
    this.minor = parseFloat(navigator.appVersion);
    this.browser = navigator.appName.toLowerCase();
}

function PreLoad() {
    topon = new Image(256, 64);
    topon.src = "./img/light-bulb-on.jpg";

    topoff = new Image(256, 64);
    topoff.src = "./img/light-bulb-off.jpg";

    topin = new Image(256, 64);
    topin.src = "./img/Glyph_table_2.png";
    alert("topon " + topon + " src " + topon.src + " topoff " + topoff + " src " + topoff.src);
}

function myMouseOn(n) {
    imageON = eval(n + "on.src");
    document.images[n].src = imageON;
}

function myMouseOff(n) {
    imageOFF = eval(n + "off.src");
    document.images[n].src = imageOFF;
}

function myMouseClick(n) {
    imageIN = eval(n + "in.src");
    document.images[n].src = imageIN;
}