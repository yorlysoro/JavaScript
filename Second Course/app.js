function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}

console.log("Sum: ", calculator(2, 3, '+')); // 5
console.log("Difference: ", calculator(2, 3, '-')); // -1
console.log("Product: ", calculator(2, 3, '*')); // 6
console.log("Quotient: ", calculator(2, 3, '/')); // 0.6666666666666666
console.log("Invalid operator: ", calculator(2, 3, '%')); // Invalid

function verifyMaxNumber(numbers){
    max = 0;
    for(i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}

console.log("Max number: ", verifyMaxNumber([38, 15, 35, 45, 2])); // 45
