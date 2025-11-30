// Or Operator (||)
const usuario = null;
const rol = 'ADMIN';

// Si el usuario es null, se asigna el rol por defecto 'GUEST'
const usuarioFinal = usuario || 'GUEST';

console.log(usuarioFinal); // Output: 'GUEST'

// Si el usuario tiene un valor, se mantiene ese valor
const otroUsuario = 'Juan';
const otroUsuarioFinal = otroUsuario || 'GUEST';

console.log(otroUsuarioFinal); // Output: 'Juan' 

// or Operator with if else if else
const usuario2 = 'ADMIN';
const rol2 = 'USER';

if(usuario2 === 'ADMIN' || rol2 === 'ADMIN'){
    console.log('Acceso concedido al panel de administración');
} else if(usuario2 === 'USER' || rol2 === 'USER'){
    console.log('Acceso concedido al panel de usuario');
} else {
    console.log('Acceso denegado');
}