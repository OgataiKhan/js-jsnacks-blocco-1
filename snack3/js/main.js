'use strict';

// I initialize a variable equal to 0
let totalSum = 0;

// I run a loop that asks the user to enter a number 10 times and then adds it to the totalSum variable
for (let i = 0; i < 10; i++) {
    let number = prompt("Enter a number of your choice:");
    totalSum += Number(number);
    console.log(`You entered: ${number}`);
}

// I print the totalSum variable, now the sum of all entered numbers, into the console
console.log("The sum of all entered numbers is: " + totalSum);