// Mayor o igual que y else if 
const dinero = 300;
const totalAPagar = 500;

if(dinero >= totalAPagar) {
    console.log('Puedes pagar');
} else if(dinero >= 300) {
    console.log('Puedes pagar con tarjeta o efectivo');
} else {
    console.log('Fondos insuficientes');
}