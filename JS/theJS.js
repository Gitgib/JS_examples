(function () {

    let modalWindow = document.getElementById("modal-window"),
        closeButton = document.getElementById("close");
    
    closeButton.addEventListener("click", function (e) {

        modalWindow.setAttribute("class", ".hide-and-move-up");

    }, false);

})();