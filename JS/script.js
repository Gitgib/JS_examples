/*
 The Function,
 define the thing you want to happen
 */

function doTheThing(){
    alert('This is the thing!');
}

/*
 The Variable,
 get the elemtn you want to do it on
 */
var elem = document.getElementById("about");

/*
 The Event Listener,
 set up something to listen for the event you want, then execute the function
 */

elem.addEventListener("click", doTheThing, false);