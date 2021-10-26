const numbers = [1, 5, 6, 3, 4]; //Array Original

const NumbersDouble = numbers.map(function Double (item) {
    return item * 2;
})
console.log(NumbersDouble);


/* Example */

const NumbersDoubleTwo = numbers.map(i => i * 2);
console.log(NumbersDoubleTwo);