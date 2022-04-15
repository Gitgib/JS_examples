// anonymous function to contain the variables
(function () {

    // Check bandwidth level is supported
    let connection,
        connectionSpeed,
        images = document.querySelectorAll("img[data-large]"),
        imageCount = images.length,
        i;

    // create a custom object if navigator.connection is not available
    connection = navigator.connection || { 'type' : '0' };

    if (imageCount > 0 && (connection.type === 'ethernet' || connection.type === '4g' || connection.type === 'cellular')) {

        console.log(connection);
        for (i = 0; i < imageCount; i = i + 1) {

            let obj = images[i],
                largeImg = obj.getAttribute('data-large');

            obj.setAttribute('src', largeImg);

        }

    }

})();