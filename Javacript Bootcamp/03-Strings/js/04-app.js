// Cortar espacios en blanco al inicio y al final de una cadena
const producto = "   Monitor 20 pulgadas   ";
console.log(producto.trim()); // "Monitor 20 pulgadas"

console.log(producto.trimStart()); // "Monitor 20 pulgadas   "
console.log(producto.trimEnd()); // "   Monitor 20 pulgadas"