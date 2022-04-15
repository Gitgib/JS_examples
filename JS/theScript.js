(function () {
    let body = document.getElementsByTagName("body")[0];

    // declare an object to hold touch controls
    let touchControls = {
        pokeTheScreen : function () {

            //output a message to the body
            body.innerHTML += "you just poked me, how rude!<br>";
        }, stopPokingTheScreen: function () {

            //output another message to the body
            body.innerHTML += "please do not do that again.<br><br>";
        }, showMovement : function () {
            // output a message to the body
            body.innerHTML += "moving<br>";
        }, changedOrientation : function () {
            // clear out the body content
            body.innerHTML = "";
        }
    }

    // add event listeners to the body
    body.addEventListener("touchstart", touchControls.pokeTheScreen, false);
    body.addEventListener("touchend", touchControls.stopPokingTheScreen, false);
    body.addEventListener("touchmove", touchControls.showMovement, false);
    body.addEventListener("orientationchange", touchControls.changedOrientation, false);
})();