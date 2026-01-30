class Juego {
  mazo;
  nombre;
  tablero = document.getElementById("ejer3");
  constructor( nombre) {
    // this.mazo = mazo;
    this.nombre = nombre;
  }

  inicarjuego() {
    let total = [];
    if (this.nombre == "solitario") {
      for (let palo of ["oros", "copas", "espadas", "bastos"]) {
        for (let i = 1; i < 13; i++) {
          total.push(new Napie(i, palo));
        }
      }
    }
    console.log("total",total);
    
    let mazo = new Mazo(total);
    let cartas = mazo.getSrcs();
    console.log("cartas(resultado)",cartas);

    if (cartas.length == 1) {
      this.tablero.textContent = cartas;
      return;
    }

    cartas.forEach((e) => [this.tablero.appendChild(e)]);

    this.tablero.style.backgroundColor = "green";
  }
}
