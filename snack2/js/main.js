'use strict';

// I ask the user for two words and save them as variables
const wordOne = prompt('Type a word');
const wordTwo = prompt('Type another word');

// I use an if condition to print the shorter one first
if (wordOne.length > wordTwo.length) {
    console.log(wordTwo, wordOne);
} else if (wordTwo.length > wordOne.length) {
    console.log(wordOne, wordTwo);
} else {
    console.log(`The words ${wordOne} and ${wordTwo} are the same length.`);
}