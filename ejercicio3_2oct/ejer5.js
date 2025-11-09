function moverRandom() {
  let tiempo = 0;

  const intervalo = setInterval(() => {
    function randomNum() {
      return Math.random() * (window.innerWidth - 100);
    }

    let random1 = document.getElementById("random1");
    let random2 = document.getElementById("random2");
    let random3 = document.getElementById("random3");

    random1.style.left = `${randomNum()}px`;
    random1.style.top = `${randomNum()}px`;
    random2.style.left = `${randomNum()}px`;
    random2.style.top = `${randomNum()}px`;
    random3.style.left = `${randomNum()}px`;
    random3.style.top = `${randomNum()}px`;

    tiempo++;
    if (tiempo >= 10) {
      clearInterval(intervalo); // Detiene el temporizador
    }
  }, 1000); // Cambia a 1500 si quieres 1.5 segundos
}