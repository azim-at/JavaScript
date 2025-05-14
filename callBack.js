// Callback function example

function greet(name, Callback) {
    console.log(`hello, ${name}`)
    Callback();
}

function sayGoodBye() {
    console.log("Goodbye")
}

greet("Azim", sayGoodBye);