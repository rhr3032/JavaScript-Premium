const numbers = [1, 2, 3, 4, 5, 6]; //Array Original

const existsPar = numbers.some((number) => number % 2 == 0);
console.log(existsPar);



/* Example */

const cars = [
    {brand: "Nissan", model: "GT-R 2021" },
    {brand: "Honda", model: "Civic" },
    {brand: "Ford", model: "Mustang" },
];

const existsFerrari = cars.some((cars) => cars.brand == "Ferrari");
console.log(existsFerrari);