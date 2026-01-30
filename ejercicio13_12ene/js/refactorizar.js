class Persona {
  nombre;
  rutaImg;
  edad;
  mensaje = document.getElementById("mensaje")
  constructor(nombre, rutaImg, edad = 0) {
    this.nombre = nombre;
    this.rutaImg = rutaImg;
    this.edad = edad;
    this.crearGUI();
  }

  CumplirAnios() {
    this.edad++;
  }

  SaludarA(persona) {
    let saludo = `Hola <i>${persona.nombre}</i>, soy <i>${this.nombre}</i> y tengo <i>${this.edad}</i> años`;
    this.mensaje.innerHTML = saludo;
  }

  crearGUI() {
    let imagen = document.createElement("img");
    imagen.src = this.rutaImg;

    imagen.addEventListener("mouseover", function () {
      this.style.opacity = "100%";
      this.style.filter = "grayscale(0%)";
    });
    imagen.addEventListener("mouseout", function () {
      this.style.opacity = "50%";
      this.style.filter = "grayscale(100%)";
    });
    // "flecha", para que apunte a Persona
    imagen.addEventListener("click", () => {
      this.SaludarA({ nombre: "observador" });
    });
    document.getElementById("mundo").appendChild(imagen);
  }
}
