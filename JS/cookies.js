function setCookie(name, value, expires, path, domain, secure) {
    cookie = name + "=" + escape(value);
    if (expires)
        if (expires.toString().indexOf("GMT") == -1)
            expires = expires.toGMTString();
        cookie += "; expires=" + expires;
    if (path)
        cookie += "; path=" + path;
    if (domain)
        cookie += "; domain=" + domain;
    if (secure)
        cookie += "; secure";

    document.cookie = cookie;
}

function getCookie(name) {
    let documentCookies = document.cookie;
    let eachCookie = documentCookies.split(";");
    // search for the name followed by =
    let name_re = new RegExp(name + "=.+;*");
    let res = "";

    for (let i=0; i<eachCookie.length; i++) {
        let results = name_re.exec(eachCookie[i]);
        if (results) {
            let parts = results[0].split("=");
            res = unescape(parts[1]);
            break;
        }
    }
    return res;
}

function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        cookie = name + "=";
        if (path)
            cookie += "; path=" + path;
        if (domain)
            cookie += "; domain=" + domain;
        cookie += "; expires=Thu, 01-Jan-70 00:00:01 GMT";
        document.cookie = cookie;
    }
}