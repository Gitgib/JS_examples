// get the proper transform extension
function getTransformExtension(element) {

    "use strict";

    // create a static array of known extensions
    let properties = [
        "transform", // normal
        "WebkitTransform", // Safari and Chrome
        "msTransform", // Internet Explorer
        "MozTransform", // Firefox
        "OTransform" // Opera
    ];

    // get array count for looping
    /*let count = properties.length,
        i;

    // loop through the array
    for (i = 0; i < count; i = i + 1) {

        // save the property in context to a variable
        let property = properties[i];

        // pass the property through the element's style object and check if it's defined
        if (typeof element.style[property] !== "undefined") {

            // when you get something that's not undefined, return it
            return property;

        }
    }*/

    for (const property of properties) {

        if (typeof element.style[property] !== 'undefined') {

            return property;
        }
    }
}

// anonymous function to contain the variables
(function () {

    let body = document.getElementsByTagName("body")[0],
        block = document.getElementById("block"),
        extension = getTransformExtension(body);

    // rotate, scale and translate the block
    block.style[extension] = "rotate(10deg)";

    // when the scale value changes, apply the scale value to the block
    block.addEventListener("mousedown", function (e) {

        e.preventDefault();

        block.style[extension] = "scale("+ e.scale +")";

    }, false);

    // when the pinch is over, check the scale value
    block.addEventListener("mouseup", function (e) {

        // if the scale is over 1.5, scale to 3, otherwise return to original state
        if(e.scale > 1.5) {
            block.style[extension] = "scale(3)";
        } else {
            block.style[extension] = "scale(1) rotate(10deg)";
        }

    }, false);

})();