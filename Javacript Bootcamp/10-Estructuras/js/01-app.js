// If statement example
const edad = 20;

if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

// Equality check
const numero = '5';

if (numero == 5) {
    console.log('El número es igual a 5 (valor)');
}

if (numero === 5) {
    console.log('El número es igual a 5 (valor y tipo)');
} else {
    console.log('El número no es igual a 5 (tipo diferente)');
}

// Logical operators
const tieneLicencia = true;
const edadConducir = 22;

if (edadConducir >= 18 && tieneLicencia) {
    console.log('Puedes conducir');
} else {
    console.log('No puedes conducir');
}

