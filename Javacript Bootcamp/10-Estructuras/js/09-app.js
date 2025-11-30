// Ternary Operator
const edad = 20;

// Usando el operador ternario para verificar si la persona es mayor de edad
const esMayorDeEdad = edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad';

console.log(esMayorDeEdad); // Output: 'Es mayor de edad'

// Otro ejemplo con operador ternario
const hora = 10;
const saludo = hora < 12 ? 'Buenos días' : hora < 18 ? 'Buenas tardes' : 'Buenas noches';

console.log(saludo); // Output: 'Buenos días'

// Ternary operator para asignar un valor basado en una condición
const usuario = 'ADMIN';
const rol = usuario === 'ADMIN' ? 'Administrador' : 'Usuario';

console.log(rol); // Output: 'Administrador'

// Uso del operador ternario dentro de una función
function verificarAcceso(edad) {
    return edad >= 18 ? 'Acceso concedido' : 'Acceso denegado';
}

console.log(verificarAcceso(20)); // Output: 'Acceso concedido'
console.log(verificarAcceso(16)); // Output: 'Acceso denegado'

// Ternary operator anidado
const calificacion = 85;
const resultado = calificacion >= 90 ? 'A' :
                  calificacion >= 80 ? 'B' :
                  calificacion >= 70 ? 'C' :
                  calificacion >= 60 ? 'D' : 'F';

console.log(`La calificación es: ${resultado}`); // Output: 'La calificación es: B'