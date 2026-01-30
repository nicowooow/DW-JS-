texto// creamos una funcion llamada serVivo, con un parametro de entrada que sera la fecha de nacimiento
function SerVivo(fechaNac) {
  this.fechaNac = fechaNac;
}

SerVivo.prototype.alimentarse = function (nombreAlimento) {
  escribir(
    `${this.nombre ?? "Ser vivo"} (${this.fechaNac}): Está tomándose un/una ${nombreAlimento}`,
  );
};

SerVivo.prototype.getFechaNac = function () {
  return this.fechaNac;
};

SerVivo.prototype.escribir = function (texto, clase = "") {
  // para no poner muchos elemntos lo añadiremos en un div propio
  const p = document.createElement("p");
  p.innerHTML = texto;
  if (clase) p.className = clase;
  salida.appendChild(p);
}

// Creamos un afuncion llamada Animal que tiene parametros de entreada su fecha de nacimiento y numero de patas
function Animal(fechaNac, numPatas) {
  SerVivo.call(this, fechaNac); // llamamos a la funcion padre y le ponemos su fecha de nacimiento
  this.numPatas = numPatas;
}

Animal.prototype = Object.create(SerVivo.prototype); // creamos la relacion de prototipos
Animal.prototype.constructor = Animal; // el contructor de animal sera el mismo

// otro prototipo el cual consta en el desplazamiento del animal
Animal.prototype.desplazarse = function (km) {
  escribir(
    `${this.nombre ?? "Animal"} (${this.fechaNac}): se ha desplazado ${km} km`,
  );
};

// creamos una funcion humano la cual tendra su nombre, fehca de nacimiento, numero de patas (defecto 2)
function Humano(nombre, fechaNac, numPatas = 2) {
  Animal.call(this, fechaNac, numPatas); //llamamos a clase animal
  this.nombre = nombre;
}

Humano.prototype = Object.create(Animal.prototype); // creamos la relacion de prototipos
Humano.prototype.constructor = Humano; // su propio constructor

// otro prototipo el cual sera si esta viendo un partido
Humano.prototype.verFutbol = function () {
  escribir(
    `${this.nombre} (${this.fechaNac}): está viendo un partido de fútbol`,
  );
};

// creamos una funcino superman, es lo mismo que humano
function SuperMan(nombre, fechaNac, numPatas = 2) {
  Humano.call(this, nombre, fechaNac, numPatas);
}

SuperMan.prototype = Object.create(Humano.prototype);
SuperMan.prototype.constructor = SuperMan;
// protoripo especial el cual es unico para superman, no para humano
SuperMan.prototype.volar = function () {
  escribir(
    `${this.nombre} (${this.fechaNac}): NO ES UN PÁJARO, NO ES UN AVIÓN, ES SUPERMAN !!! O TAL VEZ NO... TAN TAN TANNN`,
  );
};


