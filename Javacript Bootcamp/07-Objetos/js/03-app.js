// Agregando un nuevo producto
const producto2 = {
    nombre: "Laptop 15 pulgadas",
    precio: 800,
    disponible: true
};

console.log(producto2);

// agrega y elimina propiedades
producto2.imagen = "imagen.jpg"; // Agrega una nueva propiedad
console.log(producto2.imagen); // imagen.jpg

delete producto2.imagen; // Elimina la propiedad
console.log(producto2.imagen); // undefined