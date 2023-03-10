// Используйте forEach чтобы найти сумму всех чисел в массиве
const numbers = [6, 4, 2, 1, 8, 9];

let total = 0;
numbers.forEach((elem) => {total += elem;});
console.log(total);

// Используя reduce
let sum = numbers.reduce((x, y) => x + y);
console.log(sum);

// Используйте forEach чтобы в массив 'upperWords'
// добавить те же слова, но в верхнем регистре
const words = ['hello', 'people', 'javascript', 'frontend'];
const upperWords = [];

words.forEach(elem => {upperWords.push(elem.toUpperCase());});
console.log(upperWords);

// Используйте forEach чтобы в массив 'reversedNumberRow'
// добавить те же числа, но в обратном порядке.
const numberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let reversedNumberRow = [];

numberRow.forEach(function(elem) {reversedNumberRow.unshift(elem);});
console.log(reversedNumberRow);

// reverse
let reverseNumber = numberRow.reverse();
console.log(reverseNumber);

// Для каждой машины в массиве используйте "forEach"
// что-бы вывести в консоль строку типа:
// This is green Jaguar. It costs 7000€.

const cars = [
    {
        make: 'BMW',
        color: 'grey',
        price: 10000
    },
    {
        make: 'Mercedes-Benz',
        color: 'black',
        price: 15000
    },
    {
        make: 'Honda',
        color: 'blue',
        price: 8000
    },
    {
        make: 'Ferrari',
        color: 'red',
        price: 50000
    } 
]

    cars.forEach(car => {
        console.log(`This is ${car.color} ${car.make}. It costs ${car.price}€.`);
      });

