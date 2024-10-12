
function greetings(){
    console.log("Hello Cydeo");
    console.log("Hello Programmers");
}

greetings();

console.log("Test Completed");

console.log("------------------------------------");


function displayValue(value = "Unknown"){ // default value of parameter
    console.log(`The value is ${value}`);
}

displayValue(100);

displayValue("JavaScript");

displayValue(true);

displayValue();


console.log("------------------------------------");

function square(number){
    return number * number;
}

let result = square(20); // argument: 20

console.log(result);

result = square();

console.log(result);
