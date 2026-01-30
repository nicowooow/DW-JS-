class Mazo {
  #mazo = [];

  constructor(mazo) {
    this.#mazo = mazo;
  }

  getSrcs() {
    let imgs = [];
    console.log("mazo",this.#mazo);

    if (this.#mazo.length === 0) return ["nop tenemos cartas"];

    this.#mazo.forEach((carta) => {
      //   console.log(carta.getAnverso());
      let img = document.createElement("IMG");
      img.src = carta.show();
      img.addEventListener("click", () => {
        carta.voltear();
        img.src = carta.show();
      });
      imgs.push(img);
    });
    console.log("imgs",imgs);

    return imgs;
  }

  toString() {
    let cantidad = 0;
    this.#mazo.forEach(() => {
      cantidad += 1;
    });

    return `tu mazo tiene ${cantidad} cartas/naipes`;
  }
}
