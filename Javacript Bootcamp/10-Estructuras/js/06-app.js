// && operator 
const autenticado = true;
const puedePagar = true;

if(autenticado && puedePagar){
    console.log('El usuario puede comprar');
} else {
    console.log('El usuario no puede comprar');
}

// || operator
const autenticado2 = true;
const puedePagar2 = false;

if(autenticado2 || puedePagar2){
    console.log('El usuario puede comprar');
} else {
    console.log('El usuario no puede comprar');
}

// ! operator
const autenticado3 = false;
const puedePagar3 = true;

if(!autenticado3){
    console.log('El usuario no esta autenticado, no puede comprar');
} else {
    console.log('El usuario puede comprar');
}