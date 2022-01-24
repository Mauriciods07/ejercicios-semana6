// Clases, molde que nos permite crear objetos

class Animal {
    constructor(nombre, especie){
        // this hace referencia al contexto en que se está utilizando
        this.nombre = nombre;
        this.especie = especie;
    }

    // getters y setters
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getEspecie() {
        return this.especie;
    }

    set setEspecie(especie) {
        this.especie = especie;
    }

    // métodos == función
    presentarse(){
        document.write(`Hola, soy ${this.especie} y me llamo ${this.nombre}<br>`);
    }

    cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie}`;
        return mensaje;
    }

    // métodos estáticos
    static saludar() {
        return console.log("Hola, soy un método estático");
    }
}

// Heredan los atributos y los métodos de la clase que están utilizando
const Animal1 = new Animal("Scooby", "Perro"); // creamos un objeto
// instanciar = hacer una copia, crear un objeto
console.log(Animal1);

const Animal2 = new Animal("Pecas", "Gato");
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = "Scrappy"; // notación de punto para cambiar el valor
console.log(Animal1.nombre);
console.log(Animal1);

document.write(Animal1.cambiarNombre("Oddie")); // método para cambiar el valor

/* Getters y Setters */
// get = obtener el valor de un Atributo
// set = fijar o cambiar el valor de un Atributo
// Se utilizan como si fueran atributos

console.log(Animal1.getNombre);

// métodos estáticos
// no se necesita instanciar un objeto para que la función viva
Animal.saludar();
// sin embargo, no se copia a los objetos creados
// Animal1.saludar(); // error