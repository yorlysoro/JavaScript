// Reemplazar texto en una cadena
const producto = "Monitor 20 pulgadas";
console.log(producto.replace("pulgadas", "pulgadas 4K")); // "Monitor 20 pulgadas 4K"

// Reemplazar todas las ocurrencias de un texto
const texto = "Hola mundo, mundo es grande";
console.log(texto.replace(/mundo/g, "universo")); // "Hola universo,

// Slice para extraer una parte de la cadena
const mensaje = "Hola, soy un mensaje de ejemplo";
console.log(mensaje.slice(0, 4)); // "Hola"
console.log(mensaje.slice(5, 8)); // "soy"

//Substring para extraer una parte de la cadena
console.log(mensaje.substring(0, 4)); // "Hola"
console.log(mensaje.substring(5, 8)); // "soy"

// CharAt para obtener un carácter específico
console.log(mensaje.charAt(0)); // "H"