/* make the button call the function */
let button = document.getElementById('theButton')
button.addEventListener('click', function() {
    steponup()
})

function steponup() {
    let input = document.getElementById('theNumber')
    let val = document.getElementById('incrementer').value

    if (val) {  /* increment with a parameter */
        input.stepUp(val)
    } else {    /* or without a parameter. Try it with 0 */
        input.stepUp()
    }
}
