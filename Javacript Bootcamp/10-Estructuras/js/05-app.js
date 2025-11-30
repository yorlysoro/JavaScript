// switch 
const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Aun no has seleccionado un metodo de pago');
        break;
}

// sin break
const metodoPago2 = 'cheque';

switch(metodoPago2) {
    case 'efectivo':
    case 'cheque':
        console.log(`Pagaste con ${metodoPago2}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago2}`);
        break;
    default:
        console.log('Aun no has seleccionado un metodo de pago');
        break;
}

// multiple cases
const metodoPago3 = 'tarjeta';

switch(metodoPago3) {
    case 'efectivo':
    case 'cheque':
        console.log(`Pagaste con ${metodoPago3}`);
        break;
    case 'tarjeta':
    case 'credito':
    case 'debito':
        console.log(`Pagaste con ${metodoPago3}`);
        break;
    default:
        console.log('Aun no has seleccionado un metodo de pago');
        break;
}