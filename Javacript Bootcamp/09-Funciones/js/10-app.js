// Arrow Functions
// Traditional function expression
const sumar = function (a, b) {
  return a + b;
};
console.log(sumar(2, 3)); // Output: 5

// Arrow function expression
const sumarFlecha = (a, b) => {
  return a + b;
};
console.log(sumarFlecha(2, 3)); // Output: 5

// Arrow function with implicit return
const sumarFlechaImplicita = (a, b) => a + b;
console.log(sumarFlechaImplicita(2, 3)); // Output: 5

// Arrow function with a single parameter
const cuadrado = (x) => x * x;
console.log(cuadrado(4)); // Output: 16

// Arrow function with no parameters
const saludar = () => 'Hola Mundo';
console.log(saludar()); // Output: Hola Mundo

// Arrow function used as a callback
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map((num) => num * 2);
console.log(dobles); // Output: [2, 4, 6, 8, 10]

// Arrow function with more complex logic
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5)); // Output: 120

// Arrow function and 'this' context
const persona = {
  nombre: 'Juan',
  saludar: function () {
    setTimeout(() => {
      console.log(`Hola, mi nombre es ${this.nombre}`);
    }, 1000);
  },
};
persona.saludar(); // Output after 1 second: Hola, mi nombre es Juan