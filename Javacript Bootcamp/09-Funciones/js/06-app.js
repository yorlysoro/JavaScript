// defaults parameter
const multiply = function(a, b = 1) {
  return a * b;
}

console.log(multiply(2, 3)); // 6
console.log(multiply(2));    // 2
