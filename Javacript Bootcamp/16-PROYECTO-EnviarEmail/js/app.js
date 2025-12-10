document.addEventListener('DOMContentLoaded', function() {
    // selecionar los  elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar);
    
    inputAsunto.addEventListener('blur', validar);

    function validar(e){
        if(e.target.value.trim() === ''){
            console.log('El campo ' + e.target.id + ' es obligatorio');
        }
    }
});

