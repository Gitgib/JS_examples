// enclose the plug-in so no variables leak out

(function ($) {

    // define and name the plug-in
    $.fn.zebraStripe = function (options) {

        // define default options
        let defaults = {
            elToStripe: "tr"
        };

        // let options be customized by the user
        options = $.extend(defaults, options);

        // loop through each element you're attached the plug-in to
        return this.each(function () {

            // use the attached element and option value
            $(this).find(options.elToStripe).odd().css({
                'background': '#ccc'
            });

        });

    };

})(jQuery);

$(document).ready(function () {

    // attached zebra stripe plug-in to the #output div
    $('#output').zebraStripe({
        elToStripe: "td"
    });

});