let contacts = {
    "addressBook" : [
        {
            "name": "nikos",
            "email": "nikos@example.com"
        },
        {
            "name": "asterios",
            "email": "asterios@example.com"
        },
        {
            "name": "gitsa",
            "email": "gitsa@example.com"
        },
        {
            "name": "popi",
            "email": "popi@example.com"
        },
        {
            "name": "laki",
            "email": "laki@example.com"
        }
    ]
};

let searchForm = document.getElementById("search-form"),
    target = document.getElementById("output"),
    count = contacts.addressBook.length,
    getAllbtn = document.getElementById("get-all"),
    searchField = document.getElementById("q");


let adr = {

    getAllContacts: function () {

        // ready the loop!
        let i;

        // clear the contents of #output just in case there's something in there
        target.innerHTML = "";

        // as usual check the count before looping
        if (count > 0) {
            // loop through the contacts
            for (i = 0; i < count; i = i +1) {
                let obj = contacts.addressBook[i];

                target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a></p>';
            }
        }
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

    }, // end method
    search: function (event) {

        // prevent the default behavior
        event.preventDefault();

        // save the DOM element we're putting the output in
        let target = document.getElementById("output");

        let searchValue = document.getElementById("q").value;

        // save the contacts JSON object to a letiable
        let book = contacts.addressBook;

        // save the length to a letiable outside the loop for performance
        let count = book.length;

        // ready the loop
        let i;

        //clear the target area in case there's something in it
        target.innerHTML = "";

        // check the count and check to see if the value isn't empty
        if (count > 0 && searchValue !== "") {

            // loop through the contacts
            for (i=0; i < count; i++) {

                // look through the name value to see if it contains the searchterm string
                let obj = contacts.addressBook[i],
                    isItFound = obj.name.indexOf(searchValue);

                //anything other than -1 means we found a match
                if (isItFound !== -1) {
                    target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a></p>';
                }
            }
        }
    }
};



getAllbtn.addEventListener("click", adr.getAllContacts, false);

// activate the focus event on the search box
searchField.addEventListener("focus", adr.addActiveSection, false);

// active the blur event on the search box
searchField.addEventListener("blur", adr.removeActiveSection, false);

// activate the focus even ton the search box
searchForm.addEventListener("mouseover", adr.addHoverClass, false);

//activate the blur event on the search box
searchForm.addEventListener("mouseout", adr.removeHoverClass, false);

// activate autocomplete on submit
searchForm.addEventListener("keyup", adr.search, false);