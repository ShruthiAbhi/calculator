let ansValue = null; // Initialize the ansValue variable to store the previous answer

function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;
    let result;

    try {
        // Convert trigonometric function inputs from degrees to radians
        expression = expression.replace(/sin\(([^)]+)\)/g, function(match, capture) {
            const degrees = parseFloat(capture);
            const radians = degrees * (Math.PI / 180);
            return `sin(${radians})`;
        });

        expression = expression.replace(/cos\(([^)]+)\)/g, function(match, capture) {
            const degrees = parseFloat(capture);
            const radians = degrees * (Math.PI / 180);
            return `cos(${radians})`;
        });

        expression = expression.replace(/tan\(([^)]+)\)/g, function(match, capture) {
            const degrees = parseFloat(capture);
            const radians = degrees * (Math.PI / 180);
            return `tan(${radians})`;
        });

        // Convert sinh, cosh, and tanh inputs from degrees to radians
        expression = expression.replace(/sinh\(([^)]+)\)/g, function(match, capture) {
            const degrees = parseFloat(capture);
            const radians = degrees * (Math.PI / 180);
            return `sinh(${radians})`;
        });

        expression = expression.replace(/cosh\(([^)]+)\)/g, function(match, capture) {
            const degrees = parseFloat(capture);
            const radians = degrees * (Math.PI / 180);
            return `cosh(${radians})`;
        });

        expression = expression.replace(/tanh\(([^)]+)\)/g, function(match, capture) {
            const degrees = parseFloat(capture);
            const radians = degrees * (Math.PI / 180);
            return `tanh(${radians})`;
        });

        result = math.evaluate(expression);
        display.value = result;

        // Store the result as "Ans"
        ansValue = result;
    } catch (error) {
        display.value = "Error";
    }
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function pi() {
    let display = document.getElementById("display");
    display.value += "π";
}

function e() {
    let display = document.getElementById("display");
    display.value += "e";
}

function power() {
    let display = document.getElementById("display");
    display.value += "^(";
}

function squareRoot() {
    let display = document.getElementById("display");
    display.value += "sqrt(";
}

function base10Log() {
    let display = document.getElementById("display");
    display.value += "log(";
}

function useAns() {
    let display = document.getElementById("display");
    
    // Append "Ans" to the input field
    if (ansValue !== null) {
        display.value += ansValue;
    }
}


function sinh() {
    let display = document.getElementById("display");
    display.value += 'sinh(';
}

function cosh() {
    let display = document.getElementById("display");
    display.value += 'cosh(';
}

function tanh() {
    let display = document.getElementById("display");
    display.value += 'tanh(';
}
