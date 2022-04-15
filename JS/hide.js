/* save the 2 nodes to variables */
var button = document.getElementById("hide"),
    target = document.getElementById("target");

/* define what we want to do in a function */
function hide() {
    target.setAttribute("class","hide");
}

/* add the CSS class when the button is clicked */
button.addEventListener("click", hide, false);