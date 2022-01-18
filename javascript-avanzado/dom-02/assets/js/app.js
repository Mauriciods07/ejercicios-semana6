"use strict"

/* https://lenguajejs.com/javascript/dom/seleccionar-elementos-dom/ */

/* Se pone un signo $ , significa que es una variable del DOM */
/* let $title = document.getElementById('title');

title.textContent = 'Título escrito desde JS'; */

/* 
Por clase
let $title = document.querySelector('.nombreClase');

Por id 
let $title = document.querySelector('#nombreId');

Si no colocamos nada, se selecciona una etiqueta

Con querySelector, si ponemos una etiqueta, devolverá la primera que se encuentre
 */

let $title = document.querySelector('#title');
$title.textContent = 'Título escrito desde JS';

let $parrafos = document.querySelectorAll('p');
console.log($parrafos[1].textContent);


/* .createElement() crea un elemento HTML en memoria, pero no lo inserta en el documento */
let subtitulo = document.createElement('h3');
subtitulo.textContent = 'Este es un subtitulo desde JS';
/* Agregar un elemento al final del documento */
document.body.append(subtitulo);

console.log(hola); // con "use strict", en consola ya no se muestra la etiqueta, sino etiqueta#id -> h3#hola

let $contenido = document.querySelector('#contenido');
/* .textContent no admite etiquetas HTML, todo lo pone como texto */
console.log($contenido.textContent = '<br>');
console.log($contenido.innerHTML = '<br>');

let $outter = document.querySelector('#outter');
console.log($outter.innerHTML);  // modifica a los hijos 
console.log($outter.outerHTML);  // modifica a los padres e hijos

let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo párrafo';
$contenido.appendChild(contenidoParrafo);

// agregar un elemento en una posición definida
document.body.insertAdjacentElement("afterbegin", subtitulo); // mucho cuidado
// para insertar un elemento con referencia a otro, se coloca su variable
$title.insertAdjacentElement("afterend", subtitulo);
$title.remove();