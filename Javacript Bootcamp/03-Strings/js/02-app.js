const producto = "Monitor 20 pulgadas";

console.log(producto.length); // Longitud de la cadena

console.log(producto.indexOf("20")); // Posición de la subcadena "20"
console.log(producto.indexOf("tablet")); // -1 si no se encuentra

console.log(producto.includes("Monitor")); // true si contiene "Monitor"
console.log(producto.includes("tablet")); // false si no contiene "tablet"

