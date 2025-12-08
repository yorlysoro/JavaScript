// cambiando el css con js
const h1 = document.querySelector('h1');

// h1.style.color = 'red';
// h1.style.backgroundColor = 'black';
// h1.style.fontSize = '50px';
// h1.style.textTransform = 'uppercase';

// h1.classList.add('text-primary', 'text-center');
// h1.classList.remove('text-primary');

// h1.classList.toggle('text-center');
// h1.classList.toggle('text-center');

// console.log(h1.classList.contains('text-center'));

// setTimeout(() => {
//     h1.classList.toggle('text-center');
// }, 2000);
h1.classList.add('text-primary', 'text-center', 'custom-font');

// creando elementos con js
const img = document.createElement('img');
img.src = 'https://via.placeholder.com/150/FFFF00/000000?Text=CreatedImage';
img.alt = 'Created Image';

const div = document.getElementById('image-container');
div.appendChild(img);

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph created with JavaScript.';
div.appendChild(newParagraph);

console.log(img, newParagraph);

// seleccionar elemento .card y modificar su contenido
const card = document.querySelector('.card');
card.innerHTML = `
    <h2 class="card-title">Modified Card Title</h2>
    <p class="card-text">This is the modified content of the card. It has been updated using JavaScript.</p>
    <a href="#" class="card-link">Modified Link</a>
`;
console.log(card);

// classList y manipulación de clases
const button = document.querySelector('button');

button.addEventListener('click', () => {
    card.classList.toggle('highlight');
});

// Agregar estilos CSS para la clase 'highlight'
const style = document.createElement('style');
style.textContent = `
    .highlight {
        border: 2px solid red;
        background-color: yellow;
    }
`;
document.head.appendChild(style);

// Agregar un nuevo elemento a la lista
const list = document.getElementById('item-list');
const newItem = document.createElement('li');
newItem.textContent = 'New List Item';
list.appendChild(newItem);
console.log(list);