// Comparador estricto (===) vs comparador no estricto (==)
const numero = 5;
const texto = '5';

// Comparador no estricto (==)
if (numero == texto) {
    console.log('El comparador no estricto considera que son iguales.');
} else {
    console.log('El comparador no estricto considera que son diferentes.');
}

// Comparador estricto (===)
if (numero === texto) {
    console.log('El comparador estricto considera que son iguales.');
} else {
    console.log('El comparador estricto considera que son diferentes.');
}

// Explicación:
// El comparador no estricto (==) convierte los tipos de datos antes de comparar,
// por lo que 5 (número) y '5' (cadena) son considerados iguales.
// El comparador estricto (===) no realiza conversión de tipos,
// por lo que 5 (número) y '5' (cadena) son considerados diferentes.