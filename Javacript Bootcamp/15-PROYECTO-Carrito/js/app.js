// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];
cargarEventListeners();

// Funciones
function cargarEventListeners() {
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // Resetea el arreglo
        limpiarHTML(); // Elimina todo el HTML
    });
}

function agregarCurso(e) {
    if(e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
    }
    e.preventDefault();
}

function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );
        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }

}

function leerDatosCurso(curso) {
    //console.log(curso);
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if(existe) {
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // Retorna el objeto actualizado
            } else {
                return curso; // Retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // Agrega el curso al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    //console.log(infoCurso);
    console.log(articulosCarrito);
    carritoHTML();

}

function carritoHTML() {
    // Limpiar el HTML
    limpiarHTML();
    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
        `;
        contenedorCarrito.appendChild(row);
    });
}

// Elimina los cursos del tbody
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    // Forma rápida
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}