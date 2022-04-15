// define your zebra striping function

function zebraStripe(wrapper, elToStripe) {

    $(wrapper).find(elToStripe).odd().css({
        'background': '#ccc'
    });
}

//wait for the document to be loaded
$(document).ready(function () {

    let output = $('table'),
        tr = output.find('tr');

    // call the function with 2 required arguments
    zebraStripe(output, tr);

});