let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');
$texto.id = 'texto';
/* $texto.style = 'color: red; font-style: 24px; */
$texto.className = 'bg-purple h3';
$texto.className = 'h3'; // sobreescribe el valor

/* Para no escribir un montón de clases de nuevo, se pueden eliminar clases de manera selectiva */
$texto.classList.add('text-center');
$texto.classList.remove('bg-purple');
