function ShowIt() {
    let topbox = document.forms[0].elements;
    let bottombox = window.parent.frames[1];
    // first extract the values from the form
    let bg = topbox.bgcol.value;
    let fg = topbox.fgcol.value;
    let thc = topbox.thcol.value;
    let tdc = topbox.tdcol.value;

    // now build the new page
    bottombox.postMessage(open(), "*");

}