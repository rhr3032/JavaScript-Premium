const numbers = [1, 2, 3, 4, 5]; //Array Original

const sumNumbers = numbers.reduce (
    (accumulator, numberCurrent) => accumulator + numberCurrent);
console.log(sumNumbers);



/* Example */

const people = [
    {name: "Rafi", age: "21" },
    {name: "Albert", age: "33" },
];

const sumAgePeople = people.reduce (
    (acc, peoples) => acc + people.age, 0);
console.log(sumAgePeople);
