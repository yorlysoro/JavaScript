// funciones y expresiones
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

function sumar(a, b) {
    return a + b;
}

const restar = function(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

//llamar a las funciones
console.log(saludar("Juan"));
console.log(sumar(5, 3));
console.log(restar(10, 4));
console.log(multiplicar(2, 6));

// crea una calculadora que use solo funciones de declaracion
function calcular(operacion, a, b) {
    switch (operacion) {
        case "sumar":
            return sumar(a, b);
        case "restar":
            return restar(a, b);
        case "multiplicar":
            return multiplicar(a, b);
        default:
            return "Operación no válida";
    }
}

// llamar a la calculadora
console.log(calcular("sumar", 5, 3));
console.log(calcular("restar", 10, 4));
console.log(calcular("multiplicar", 2, 6));