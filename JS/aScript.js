$(document).ready(function () {

    // jquery goes here
    let module = $(".module");

    //module.parent().addClass('module-parent');
    //$("p").parents("#container").addClass('p-parents');
    //$("#container").find(".module").addClass('container-find');
    //module.siblings(".module").addClass('module-siblings');

    //module.first().addClass('first-module');
    //module.first().next().addClass('second-module');
    //module.last().addClass('last-module');
    //module.last().prev().addClass('second-to-last-module');

    module.css({
       'height': '300px',
       'color': 'red'
    });

    $("button").click(function () {

        // animate all the heights of each module to 0
        $('.module').animate({
            'height': '0px'
        }, 500, function () {

            // after the animation is complete change the button text
            $('button').text('now what, smart guy?');
        });

    });

}); // close document.ready