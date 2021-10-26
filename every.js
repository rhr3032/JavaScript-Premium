const numbers = [7, 4, 3, 4, 5]; //Array Original

const isBigFive = numbers.every( item => item > 5)
console.log(isBigFive);



/** Example **/

const os = ["Microsoft", "Apple", "Samsung", "OnePlus"]

const osLowerCase = os.every(os => os == os.toLocaleLowerCase())
console.log(osLowerCase);