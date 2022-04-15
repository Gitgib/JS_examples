function sayHello(greeting, exitStatement) {
    let newGreeting = greeting + "!",
        newExitStatement = exitStatement + "!!";
    
    return [newGreeting, newExitStatement];
}

function startle(polite, rude) {
    let greeting = sayHello(polite, rude)[0],
        exit = sayHello(polite, rude)[1];

        alert(greeting + "--" + exit);
}

startle("thank you", "you stink");