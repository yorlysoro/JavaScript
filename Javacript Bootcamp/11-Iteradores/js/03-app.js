// Fizz Buzz
total_fizz = 0;
total_buzz = 0;
total_fizzbuzz = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} - FizzBuzz`);
        total_fizzbuzz++;
    } else if (i % 3 === 0) {
        console.log(`${i} - Fizz`);
        total_fizz++;
    } else if (i % 5 === 0) {
        console.log(`${i} - Buzz`);
        total_buzz++;
    } else {
        console.log(i);
    }
}

console.log(`Total Fizz: ${total_fizz}`);
console.log(`Total Buzz: ${total_buzz}`);
console.log(`Total FizzBuzz: ${total_fizzbuzz}`);
