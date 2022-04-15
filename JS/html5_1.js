// anonymous function to contain the variables
(function () {

    let links = document.getElementsByTagName('a'),
        linkCount = links.length,
        output = document.getElementById("output"),
        i;

    if (linkCount > 0) {

        // loop through all the links on the page
        for (i = 0; i <linkCount; i++) {

            let obj = links[i];

            // attached a click event to each link
            obj.addEventListener('click', function (e) {

                e.preventDefault();

                // store the href and text of the link you clocked
                let href = this.getAttribute("href"),
                    title = this.innerHTML;

                // push the new URL in to the address bar
                history.pushState(href, title, href);

            }, false);

        }

    }

})();