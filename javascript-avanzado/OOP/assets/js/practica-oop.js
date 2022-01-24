/* 
Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0.

*/
class Carro {
    constructor(marca, color, modelo, numeroPuertas) {
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.numeroPuertas = numeroPuertas;
        this.velocidad = 0;
        this.images = ['https://images.unsplash.com/photo-1593142871910-2a967580ecdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1555626906-fcf10d6851b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        'https://images.unsplash.com/photo-1506719040632-7d586470c936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1310&q=80']
        this.img = document.getElementById('carImg');
    }

    toString(){
        let $references = document.querySelector('#references');
        $references.innerHTML = `<p>Marca: ${this.marca}</p>
        <p>Color: ${this.color}</p>
        <p>Modelo: ${this.modelo}</p>
        <p>Número de puertas: ${this.numeroPuertas}</p>
        <p>Velocidad: ${this.velocidad}</p>`;
        if(this.velocidad < 0){
            this.img.src = this.images[0];
        }
        else if(this.velocidad > 0){
            this.img.src = this.images[2];
        }
        else {
            this.img.src = this.images[1];
        }
    }

    acelerar() {
        this.velocidad += 1;
        console.log(`La velocidad actual es de ${this.velocidad}`);
        this.toString();
    }

    reversa() {
        this.velocidad -= 1;
        console.log(`La velocidad actual es de ${this.velocidad}`);
        this.toString();
    }

    frenar() {
        this.velocidad = 0;
        console.log("El carro está detenido");
        this.toString();
    }
}

function saludar(){
    console.log("holaxd");
}

let carro = new Carro("una-marca", "gris", "un-modelo", "2");
/* Crear botones */
let reversaBtn = document.createElement('button');
let frenarBtn = document.createElement('button');
let acelerarBtn = document.createElement('button');
let $divBtn = document.querySelector('.div-btn');
/* Añadir la función con el parámetro establecido */
reversaBtn.addEventListener('click', () => carro.reversa());
frenarBtn.addEventListener('click', () => carro.frenar());
acelerarBtn.addEventListener('click', () => carro.acelerar());
/* Definir tipo */
reversaBtn.type = 'button';
frenarBtn.type = 'button';
acelerarBtn.type = 'button';
/* Poner los botones en el documento */
$divBtn.appendChild(reversaBtn);
$divBtn.appendChild(frenarBtn);
$divBtn.appendChild(acelerarBtn);
/* Escribir texto en los botones */
reversaBtn.textContent = 'Reversa';
frenarBtn.textContent = 'Frenar';
acelerarBtn.textContent = 'Acelerar';