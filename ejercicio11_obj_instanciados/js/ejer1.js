class Dado {
  constructor(caras = 6) {
    this.caras = caras > 0 ? caras : 6;
  }

  lanzar() {
    let numero = Math.floor(Math.random() * this.caras) + 1;
    // numero entre el 1 al numero de caras

    return numero;
  }
}
let resultados_ejer1 = [];

document.getElementById("ejer1_btn").addEventListener("click", () => {
  let salida1 = document.getElementById("salida1");
  let caras = Number(document.getElementById("ejer1_i").value);
  let dado = new Dado(caras);
  if (resultados_ejer1 < 100) {
    for (let i = 0; i <= 100; i++) {
      let numero = dado.lanzar();
      resultados_ejer1.push(numero)
    }
  }
  salida1.textContent = resultados_ejer1;
});
