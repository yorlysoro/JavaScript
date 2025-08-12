//functions
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('Alice'));

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10));

const square = (x: number): number => x * x;
console.log(square(4));

// functions and arrays
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n: number): number => n * 2);
console.log(doubled);

// functions as first-class citizens
const logResult = (fn: () => number) => {
  console.log(fn());
};

logResult(() => add(5, 10));

// arrow functions
const multiply = (a: number, b: number): number => a * b;
console.log(multiply(5, 10));

// arrow function for get user info and override uid from parameter
const getUserInfo = (uid: string) => {
  return {
    uid,
    username: 'JohnDoe',
    email: 'johndoe@example.com',
  };
};

const userInfo = getUserInfo('123');
console.log(userInfo);