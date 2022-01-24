/* Obtener los elementos */
let $container = document.querySelector('.container');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
      
    json.forEach((el) => {
        console.log(el);

        let creado = document.createElement('div');
        creado.innerHTML = `<div class="card m-3" style="width: 18rem;" id="${el.id}">
        <div class="card-body">
            <h5 class="card-title text-center">${el.title}</h5>
                <p class="card-text text-center">${el.body}</p>
        </div>
    </div>`;

    $container.appendChild(creado);

    })
});