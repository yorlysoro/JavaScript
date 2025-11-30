// Advantages of Arrow Functions

// 1. Concise Syntax
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// 2. Implicit Return
const square = x => x * x;
console.log(square(4)); // Output: 16

// 3. Lexical 'this' Binding
function Person(name) {
    this.name = name;
    this.sayHello = function() {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    };
}

const john = new Person('John');
john.sayHello(); // Output after 1 second: Hello, my name is John

// 4. No 'arguments' Object
const showArgs = (...args) => {
    console.log(args);
};
showArgs(1, 2, 3); // Output: [1, 2, 3]

// 5. Suitable for Callbacks
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// 6. Cleaner Code for Higher-Order Functions
const filtered = numbers.filter(num => num > 2);
console.log(filtered); // Output: [3, 4, 5]

// 7. No 'new' Keyword
const PersonArrow = (name) => {
    this.name = name;
};
// const jane = new PersonArrow('Jane'); // This will throw an error

// Summary: Arrow functions provide a more concise syntax, lexical 'this' binding, and are well-suited for callbacks and higher-order functions. However, they do not have their own 'this' or 'arguments' object and cannot be used as constructors.

// Disadvantages of Arrow Functions

// 1. No Own 'this'
const obj = {
    value: 42,
    getValue: () => {
        return this.value; // 'this' does not refer to 'obj'
    }
};
console.log(obj.getValue()); // Output: undefined

// 2. No 'arguments' Object
const funcWithArgs = () => {
    console.log(arguments); // 'arguments' is not defined
};
// funcWithArgs(1, 2, 3); // This will throw an error

// 3. Cannot be Used as Constructors
const ArrowConstructor = () => {};
// const instance = new ArrowConstructor(); // This will throw an error

// 4. Less Readable for Complex Functions
const complexFunction = (a, b) => {
    const sum = a + b;
    const square = sum * sum;
    return square;
};
console.log(complexFunction(2, 3)); // Output: 25

// 5. Incompatibility with Some Methods
const objWithMethod = {
    method: () => {
        console.log(this); // 'this' does not refer to 'objWithMethod'
    }
};
objWithMethod.method(); // Output: Window or global object

// Summary: While arrow functions offer many advantages, they also come with limitations such as the lack of their own 'this' and 'arguments' object, inability to be used as constructors, and potential readability issues for complex functions. It's important to choose the right function type based on the specific use case.

// Arrow functions with multiple parameters and no parameters
const multiply = (x, y) => x * y;
console.log(multiply(3, 4)); // Output: 12

const greet = () => 'Hello, World!';
console.log(greet()); // Output: Hello, World!

// Arrow function returning an object
const createUser = (name, age) => ({ name, age });
console.log(createUser('Alice', 30)); // Output: { name: 'Alice', age: 30 }
