document.addEventListener('DOMContentLoaded', function() {
    // selecionar los  elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar);
    
    inputAsunto.addEventListener('blur', validar);

    function validar(e){
        if(e.target.value.trim() === ''){
            mostrarAlerta('El campo ' + e.target.id + ' es obligatorio', e.target.parentElement);
        } else {
            console.log('El campo ' + e.target.id + ' es correcto');
        }
    }

    function mostrarAlerta(mensaje, referencia){
        // Si ya existe una alerta, no crear otra
        const alertaPrevia = referencia.querySelector('.bg-red-600');
        if(alertaPrevia){
            return;
        }

        // Crear la alerta
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-5');
        
        // Insertar en el formulario
        referencia.appendChild(error);
    }
});

