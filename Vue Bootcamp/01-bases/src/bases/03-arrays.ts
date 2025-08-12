//arrays
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

//arrays
const fruits = ['apple', 'banana', 'cherry'];
const uppercased = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercased);

//arrays operations
const combined = numbers.concat(doubled);
console.log(combined);

//arrays methods
const filtered = numbers.filter(n => n > 2);
console.log(filtered);

const found = numbers.find(n => n === 3);
console.log(found);

//push
fruits.push('date');
console.log(fruits);

//index
const index = fruits.indexOf('banana');
console.log(index);

//lastIndexOf
const lastIndex = fruits.lastIndexOf('banana');
console.log(lastIndex);

//copy
const shallowCopy = fruits.slice();
console.log(shallowCopy);

//clone arrays
const deepClone = JSON.parse(JSON.stringify(fruits));
console.log(deepClone);

//map
const mapped = fruits.map(fruit => fruit.length);
console.log(mapped);