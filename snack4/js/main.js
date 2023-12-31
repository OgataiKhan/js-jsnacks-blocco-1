'use strict';

const numbersArray = []; // Create an empty array
let sum = 0; // Initialize an empty variable to keep track of the total sum

// Use a while loop to keep asking for numbers until the sum matches or exceeds 50
while (sum < 50) {
    let number = parseFloat(prompt('Please insert a number')); // Ask the user to input a number
    numbersArray.push(number); // Push the number into the array
    sum += number; // Add the number to the sum
    console.log(`Array: ${numbersArray}`); // Print the array on each iteration
    console.log(`Sum: ${sum}`); // Print the total sum on each iteration
}

if (!isNaN(sum)) {
    console.log('The total sum is now equal or greater than 50.');
}


/*
const numbersArray2 = [];
let sum2 = 60;

do {
    let number2 = parseFloat(prompt('Please insert a number'));
    numbersArray2.push(number2);
    sum2 += number2;
    console.log(`Array: ${numbersArray2}`);
    console.log(`Sum: ${sum2}`);
} while (sum2 < 50);

if (!isNaN(sum2)) {
    console.log('The total sum is now equal or greater than 50.');
}
*/

/*
const numbersArray3 = [];
let sum3 = 0;

for (let i = 0; i < Infinity; i++) {
    let number3 = parseFloat(prompt('Please insert a number'));
    numbersArray3.push(number3);
    sum3 += number3;
    console.log(`Array: ${numbersArray3}`);
    console.log(`Sum: ${sum3}`);
    if (sum3 >= 50) {
        break;
    }
}

*/

