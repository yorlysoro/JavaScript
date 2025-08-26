// Arrays 

const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];

// Accessing elements
console.log(numbers[0]); // 1
console.log(fruits[1]); // 'banana'

// Modifying elements
numbers[2] = 10;
fruits.push('grape');

// Looping through arrays
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

fruits.forEach(fruit => {
  console.log(fruit);
});

// Array methods
const doubled = numbers.map(num => num * 2);
const filtered = fruits.filter(fruit => fruit.startsWith('a'));

// Array with new elements
const newFruits = [...fruits, 'kiwi', 'mango'];
