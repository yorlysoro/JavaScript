// comparar booleanos
console.log(bolean1 === bolean2); // false
console.log(bolean1 !== bolean2); // true
console.log(bolean1 == bolean2); // false
console.log(bolean1 != bolean2); // true

// Tablas de verdad
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(!true); // false
console.log(!false); // true
console.log(true ? "Es verdadero" : "Es falso"); // Es verdadero
console.log(false ? "Es verdadero" : "Es falso"); // Es falso

// Comparar booleanos con otros tipos
console.log(bolean1 === 1); // true
console.log(bolean2 === 0); // true
console.log(bolean1 == "true"); // false
console.log(bolean2 == "false"); // false
console.log(bolean1 == true); // true
console.log(bolean2 == false); // true
console.log(bolean1 === "true"); // false
console.log(bolean2 === "false"); // false
console.log(bolean1 == 1); // true
console.log(bolean2 == 0); // true