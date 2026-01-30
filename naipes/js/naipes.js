class Napie {
  palos = ["oros", "copas", "espadas", "bastos"]; // saber que tipo de carta es Oros,Copas,Espadas,Bastos
  #palo;
  #valor; // valor que tienen cada naipe
  #visible = false; // si es visible o no
  ruta = "/naipes/naipes/";
  #reverso = "/naipes/naipes/reverso.png";
  #anverso;

  constructor(valor, palo) {
    palo = palo.toLowerCase();
    if (!this.palos.includes(palo))
      throw new Error('palo incorrecto debe ser "Oros,Copas,Espadas,Bastos"');
    this.#palo = palo;

    if (typeof valor !== "number")
      throw new Error("el valor debe ser un numero");
    if (valor != parseInt(valor))
      throw new Error("el valor debe ser un numero entero");
    if (valor > 12 || valor < 1)
      throw new Error("el naipe debe tener un valor entre 1 y 12");
    this.#valor = valor;

    this.#anverso = `${this.ruta}${palo}-${valor}.png`;
  }

  setValor() {
    return this.#visible;
  }
  getValor(valor) {
    this.#valor = valor;
  }

  setPalo() {
    return this.#palo;
  }
  getPalo(palo) {
    this.#palo = palo;
  }

  setVisible() {
    return this.#visible;
  }
  getVisible(visible) {
    this.#visible = visible;
  }

  getAnverso() {
    return this.#anverso;
  }
  getReverso() {
    return this.#reverso;
  }

  show() {
    return this.#visible ? this.#anverso : this.#reverso;
  }

  voltear() {
    this.#visible = !this.#visible;
  }

  toString() {
    return `tu naipe tiene un valor de ${this.#valor} y su palo es ${this.#palo}`;
  }
}
