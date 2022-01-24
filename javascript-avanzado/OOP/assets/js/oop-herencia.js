class Pokemon {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    // métodos
    atacar() {
        return console.log(`${this.nombre} está atacando.`);
    }
}

class Pikachu extends Pokemon {
    constructor(nombre, tipo, nivel) {
        super(nombre, tipo);
        this.nivel = nivel;
    }

    // métodos
    evolucionar () {
        return console.log(`${this.nombre} está evolucionando.`);
    }
}

class Electrico extends Pikachu {
    constructor(nombre, tipo, nivel, color) {
        super(nombre, tipo, nivel);
        this.color = color;
    }
}

const Electrico1 = new Electrico("Panchito", "Eléctrico", 23, "Amarillo");


const Pikachu1 = new Pikachu("Juan", "Eléctrico", 23);
console.log(Pikachu1);
Pikachu1.atacar();
Pikachu1.evolucionar();

const Charmander = new Pokemon("Charmander", "Fuego");
Pokemon1.atacar();