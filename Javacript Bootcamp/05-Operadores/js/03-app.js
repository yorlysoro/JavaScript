// Null
const numero4 = null;
console.log(numero4 === null); // true
console.log(numero4 == null); // true
console.log(numero4 !== null); // false
console.log(numero4 != null); // false

// Undefined
let numero5;
console.log(numero5 === undefined); // true
console.log(numero5 == undefined); // true
console.log(numero5 !== undefined); // false
console.log(numero5 != undefined); // false

// comparar con NaN
const numero6 = NaN;
console.log(numero6 === NaN); // false
console.log(isNaN(numero6)); // true

// comparar con Infinity
const numero7 = Infinity;
console.log(numero7 === Infinity); // true
console.log(numero7 == Infinity); // true

// comparar un Null con un Undefined
console.log(numero4 === numero5); // false
console.log(numero4 == numero5); // true
console.log(numero4 !== numero5); // true
console.log(numero4 != numero5); // false
// comparar un Null con un NaN
console.log(numero4 === numero6); // false
console.log(numero4 == numero6); // false
console.log(numero4 !== numero6); // true
console.log(numero4 != numero6); // true
// comparar un Undefined con un NaN
console.log(numero5 === numero6); // false
console.log(numero5 == numero6); // false
console.log(numero5 !== numero6); // true
console.log(numero5 != numero6); // true
// comparar un Null con un Infinity
console.log(numero4 === numero7); // false
console.log(numero4 == numero7); // false
console.log(numero4 !== numero7); // true
console.log(numero4 != numero7); // true
// comparar un Undefined con un Infinity
console.log(numero5 === numero7); // false
console.log(numero5 == numero7); // false
console.log(numero5 !== numero7); // true
console.log(numero5 != numero7); // true
// comparar un NaN con un Infinity
console.log(numero6 === numero7); // false
console.log(numero6 == numero7); // false
console.log(numero6 !== numero7); // true
console.log(numero6 != numero7); // true
// comparar un Null con un String
const numero8 = "null";
console.log(numero4 === numero8); // false
console.log(numero4 == numero8); // false
console.log(numero4 !== numero8); // true
console.log(numero4 != numero8); // true