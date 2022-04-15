function getHTTPObject() {

    // initialize the variable
    let xhr;

    if (window.XMLHttpRequest) { // check for support

        // if it's supported, use it because it's better
        xhr = new XMLHttpRequest();

    } else if (window.ActiveXObject) { // check for the IE6 Ajax

        // save it to the xhr variable
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
    }

    // spit out the correct one so we can use it
    return xhr;
}
/* define the Ajax call function */

function ajaxCall(dataUrl, outputElement, callback) {

    /* use our function to get the correct Ajax object based on support */
    let request = getHTTPObject();

    outputElement.innerHTML = "Loading...";

    request.onreadystatechange = function () {

        // check to see if the Ajax call went through
        if (request.readyState === 4 && request.status === 200) {

            // save the ajax response to a variable
            let contacts = JSON.parse(request.responseText);

            // make sure the callback is indeed a function before executing it
            if(typeof callback === "function"){

                callback(contacts);

            } // end function check

        }// end ajax status check

    } // end onreadystatechange

    request.open("GET", dataUrl, true);
    request.send(null);
}
/* wrap everything in an anonymous function to contain the variables */

(function () {

    /* define the DOM elements and common variables you'll need */

    let searchForm = document.getElementById("search-form"),
        target = document.getElementById("output"),
        getAllbtn = document.getElementById("get-all"),
        searchField = document.getElementById("q");

    let addr = {

        search: function (event) {

            /* set the output element */
            let output = document.getElementById("output");

            /* start the Ajax call */
            ajaxCall("data/contacts.json", output, function (data) {

                // save the input value, contacts length and i to variables
                let searchValue = searchField.value,
                    addrBook = data.addressBook,
                    count = addrBook.length,
                    i;

                // stop the default behavior
                event.preventDefault();

                //clear the target area in case there's something in it
                target.innerHTML = "";

                // check the count and check to see if the value isn't empty
                if (count > 0 && searchValue !== "") {

                    // loop through the contacts
                    for (i=0; i < count; i++) {

                        // look through the name value to see if it contains the searchterm string
                        let obj = addrBook[i],
                            isItFound = obj.name.indexOf(searchValue);

                        //anything other than -1 means we found a match
                        if (isItFound !== -1) {
                            target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a></p>';
                        }
                    }
                }

            });

        },
        getAllContacts: function () {

            // set the output element
            let output = document.getElementById("output"),
                mustacheTemplate = document.getElementById("mustache-template"),
                template = mustacheTemplate.innerHTML;

            // start the Ajax call
            ajaxCall("data/contacts.json", output, function (data) {

                let renderedContent = mustache.MustacheStatic.render(template, data);

                output.innerHTML = renderedContent;

            });

        },
        addActiveSection : function () {

            // add a class of "active" to the wrapping div
            this.parentNode.setAttribute("class", "active");

        }, // end method, note the comma
        removeActiveSection: function () {

            // remove the class from the wrapping div
            this.parentNode.removeAttribute("class");
        },
        addHoverClass: function () {

            // add a class of "hovering to the wrapping div
            searchForm.setAttribute("class", "hovering");
        },
        removeHoverClass: function () {

            // remove all classes from the wrapping div
            searchForm.removeAttribute("class");

        }
    };

    getAllbtn.addEventListener("click", addr.getAllContacts, false);

    // activate the focus event on the search box
    searchField.addEventListener("focus", addr.addActiveSection, false);

    // active the blur event on the search box
    searchField.addEventListener("blur", addr.removeActiveSection, false);

    // activate the focus even ton the search box
    searchForm.addEventListener("mouseover", addr.addHoverClass, false);

    //activate the blur event on the search box
    searchForm.addEventListener("mouseout", addr.removeHoverClass, false);

    // activate autocomplete on submit
    searchForm.addEventListener("keyup", addr.search, false);

})();