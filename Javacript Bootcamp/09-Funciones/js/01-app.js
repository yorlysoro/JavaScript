// funciones
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

function sumar(a, b) {
    return a + b;
}


// function expresion
const restar = function(a, b) {
    return a - b;
}

// function declaration
function multiplicar(a, b) {
    return a * b;
}

//llamar a las funciones
console.log(saludar("Juan"));
console.log(sumar(5, 3));
console.log(restar(10, 4));
console.log(multiplicar(2, 6));