// forEach and map are array iterators that allow us to loop through arrays in JavaScript, but they have different purposes and behaviors.

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Using forEach to iterate over pendientes array
pendientes.forEach((pendiente, index) => {
    console.log(`${index}: ${pendiente}`);
});

// Using map to create a new array with the names of the pendientes in uppercase
const pendientesMayusculas = pendientes.map(pendiente => pendiente.toUpperCase());
console.log(pendientesMayusculas);