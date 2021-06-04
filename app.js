// Multiplies two numbers
function multiply(a, b) {
    return a * b;
}

// Calls multiply when the link is clicked
function onMultiply() {
    alert(multiply(2, 3));
}

// Calls multiply when the link is clicked
function onExpression() {

    // store a function in a variable
    const square = function(number) {
        return number * number
    };

    // Call square with 4 as input and display as alert
    alert(square(4));
}

// A multiply function with default parameters
function multiplyDefaults(a = 4, b = 3) {
    return a * b;
}

// Calls multiply when the link is clicked
function onMultiplyDefaults() {
    alert(multiplyDefaults());
}

// use set interval with an arrow function to call repeatedly over time
function timer() {
    let time = 1;

    setInterval(() => {
        time = time + 1;
        document.getElementById('timer').innerHTML = "Timer " + time;
    }, 1000);
}
