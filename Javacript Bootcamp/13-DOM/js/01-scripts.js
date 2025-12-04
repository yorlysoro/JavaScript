let elemento;

elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;
elemento = document.forms[0].method;
elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].className;
elemento = document.links[4].classList;
elemento = document.links[4].href;
elemento = document.images;
elemento = document.scripts;
elemento = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArray = Array.from(scripts);

scriptsArray.forEach(function(script) {
    console.log(script.getAttribute('src'));
});


console.log(elemento);