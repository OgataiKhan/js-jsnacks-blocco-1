'use strict';

const n = parseInt(prompt('Please insert the number of arrays you wish to generate'));

if (!isNaN(n) && n > 0) {
    for (let i = 0; i < n; i++) {
        let array = [];
        for (let j = 0; j < 10; j++) {
            array.push(Math.floor(Math.random() * 100) + 1);
        }
        alert(`Array ${i + 1}: ${array}`)
    }
} else {
    alert('Please insert a valid number');
}
