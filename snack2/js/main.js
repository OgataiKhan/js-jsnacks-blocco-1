'use strict';

const wordOne = prompt('Type a word');
const wordTwo = prompt('Type another word');

if (wordOne.length > wordTwo.length) {
    console.log(wordTwo, wordOne);
} else {
    console.log(wordOne, wordTwo);
}