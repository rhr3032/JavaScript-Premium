const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //Array Original

const numbersPar = numbers.filter ((number) => {
    return number % 2 == 0;
});
console.log(numbersPar);



/* Example */

const animals = ["Lion", "Tiger", "Snake", "Cat"];

const dogs = animals.filter ((animal) => animal == "Lion" || animal == "Tiger");
console.log(dogs);