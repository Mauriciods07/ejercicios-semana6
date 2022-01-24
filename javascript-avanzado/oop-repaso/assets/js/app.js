/* class Animalito {
    constructor(nombre, edad, especie, revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.revisado = revisado;
        this.enfermo = false;
    }

    saludar() {
        return console.log(`Hola mi nombre es ${this.nombre} con ${this.edad} años de edad y de especie "${this.especie}"`);
    }
}

class Veterinario {
    constructor() {
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    agregarPaciente(paciente) {
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        let mensaje = `Paciente agregado<br>`;
        return document.write(`${mensaje}<br>`);
    }

    modificarPacientesRevisados() {
        this.pacientesRevisados++;
    }

    revisarPaciente(paciente) {
        if(paciente.revisado === false) {
            paciente.revisado = true;
            document.write(`El paciente ${paciente.nombre} acaba de ser revisado <br>`);
        }
        else {
            document.write(`El paciente ${paciente.nombre} ya fue revisado <br>`);
        }
    }

    mostrarLista() {
        let arrSize = this.listaPacientes.length;
        for(let i=0; i<arrSize; i++){
            console.log(`El paciente ${i} se llama ${this.listaPacientes[i].nombre} <br>`);
        }
        document.write(`Hay ${this.cantidadPacientes} pacientes atendidos <br>`);
    }
}

const VeterinariaPanchito = new Veterinario();

// objetos creados de la clase Animalito
const Animalito1 = new Animalito('Manchas', 5, 'Perro'); // objeto 1
const Animalito2 = new Animalito('Galleta', 2, 'Gato'); // objeto 2
console.log(Animalito1);
console.log(Animalito2);

VeterinariaPanchito.agregarPaciente(Animalito1);
VeterinariaPanchito.agregarPaciente(Animalito2);

console.log(VeterinariaPanchito.listaPacientes);

VeterinariaPanchito.mostrarLista();
VeterinariaPanchito.revisarPaciente(Animalito1);
VeterinariaPanchito.modificarPacientesRevisados();

document.write(`El veterinario tiene ${VeterinariaPanchito.pacientesRevisados} pacientes revisados <br>`); 

VeterinariaPanchito.revisarPaciente(Animalito2);
document.write(`El veterinario tiene ${VeterinariaPanchito.pacientesRevisados} pacientes revisados`); */

const arr = [1, 2, 3, 4, 5];
const sums = [];

for (let i=0; i<arr.length; i++) {
    const arrSum = [...arr];
    arrSum.splice(i,1)
    console.log(`${i}it ${arrSum}`);
    let sum = arrSum.reduce((total, value) => total+value, 0);
    sums.push(sum);
}

console.log(sums);