// Anonymous function to contain the variables
(function () {

    "use strict";

    // define the drop zone
    let dropZone = document.getElementById("drop-zone");

    // add a drag over even to the zone
    dropZone.addEventListener("dragover", function (e) {

        e.preventDefault();

        // add a hover class so you can see it's working
        dropZone.setAttribute("class", "over");

    }, false);

    // on file drop grab all available image information
    dropZone.addEventListener("drop", function (e) {

        "use strict";

        e.preventDefault();

        // get all the files being dropped
        let files = e.dataTransfer.files;

        if (files.length > 0) {

            // loop through all the files and output the data
            for (const file of files) {

                let name = file.name,
                    size = file.size,
                    type = file.type,
                    reader = new FileReader(); // initialize the FileReader Object

                // remove the hover class
                dropZone.removeAttribute("class");

                // output the image data
                reader.onload = function (e) {

                    dropZone.innerHTML += '<div><img src="' + e.target.result + '"><br>' + name +',' + type +', ' + size + 'bytes</div>';

                };

                // render the image as a data URL
                reader.readAsDataURL(file);

            }
        }
    }, false);

})();