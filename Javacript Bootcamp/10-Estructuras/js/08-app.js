// Detener la ejecución de un if con una función
const autenticado = true;
const puedePagar = false;

function revisarCliente() {
    if(!autenticado) {
        console.log('No autenticado, no puedes pagar');
        return; // Detiene la ejecución si no está autenticado
    }

    console.log('Usuario autenticado');

    if(puedePagar) {
        console.log('Puede pagar, procesando pago...');
    } else {
        console.log('No puede pagar, saldo insuficiente');
    }
}

revisarCliente(); // Output: 'Usuario autenticado' y 'No puede pagar, saldo insuficiente'