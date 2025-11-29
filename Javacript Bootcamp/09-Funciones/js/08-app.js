function sumar(a, b) {
    return a + b;
}

const resultado = sumar(3, 5);
console.log(resultado); // Output: 8

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuesto es: ${totalPagar}`);

console.log(total);