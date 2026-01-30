const salida = document.getElementById("salida");

//Funcion de escribir

function escribir(texto, clase = "") {
    const p = document.createElement("p");
    p.textContent = texto;
    if (clase) p.className = clase;
    salida.appendChild(p);
}

//Clase ser vivo

function SerVivo(fechaNac) {
    this.fechaNac = fechaNac;
}

SerVivo.prototype.alimentarse = function (nombreAlimento) {
    escribir(`${this.nombre ?? "Ser vivo"} (${this.fechaNac}): Está tomándose un/una ${nombreAlimento}`);
};

SerVivo.prototype.getFechaNac = function () {
    return this.fechaNac;
};

// Clase animal
function Animal(fechaNac, numPatas) {
    SerVivo.call(this, fechaNac);
    this.numPatas = numPatas;
}

Animal.prototype = Object.create(SerVivo.prototype);
Animal.prototype.constructor = Animal;

Animal.prototype.desplazarse = function (km) {
    escribir(`${this.nombre ?? "Animal"} (${this.fechaNac}): se ha desplazado ${km} km`);
};





// Clase humano

function Humano(nombre, fechaNac, numPatas = 2) {
    Animal.call(this, fechaNac, numPatas);
    this.nombre = nombre;
}

Humano.prototype = Object.create(Animal.prototype);
Humano.prototype.constructor = Humano;

Humano.prototype.verFutbol = function () {
    escribir(`${this.nombre} (${this.fechaNac}): está viendo un partido de fútbol`);
};

//Clase superman

function SuperMan(nombre, fechaNac, numPatas = 2) {
    Humano.call(this, nombre, fechaNac, numPatas);
}

SuperMan.prototype = Object.create(Humano.prototype);
SuperMan.prototype.constructor = SuperMan;

SuperMan.prototype.volar = function () {
    escribir(`${this.nombre} (${this.fechaNac}): NO ES UN PÁJARO, NO ES UN AVIÓN, ES SUPERMAN`);
};


//Comprobaciones

escribir("HUMANO");
const luis = new Humano("Luis Ramallo", "1/1/2007");

luis.verFutbol();
luis.desplazarse(3);
luis.alimentarse("pizza");

try {
    luis.volar();
} catch (error) {
    escribir("Error: Luis no puede volar", "error");
}

escribir("SUPERMAN");
const clark = new SuperMan("Clark Kent", "5/12/1970");

clark.verFutbol();
clark.desplazarse(10);
clark.volar();

escribir("ANIMAL");
const perro = new Animal("3/3/2018", 4);
perro.desplazarse(2);

try {
    perro.verFutbol();
} catch (error) {
    escribir("Error: Un animal no puede ver fútbol", "error");
}