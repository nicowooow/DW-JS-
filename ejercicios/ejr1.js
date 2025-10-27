function calcularEdad(edad) {
  if (edad < 0) return "no nacido";
  else if (edad < 18) return "niño";
  else if (edad < 80) return "adulto";
  else if (edad < 100) return "anciano";
  else return "inmortal";
}

let edad = prompt("Introduce tu edad:");
let tipo = calcularEdad(parseInt(edad));
let cabecera = document.getElementById("cabecera");

switch (tipo) {
  case "no nacido":
    cabecera.textContent = "Aún no has nacido";
    break;
  case "niño":
    cabecera.textContent = "Menor de edad, no puedes entrar";
    break;
  case "adulto":
    cabecera.textContent = "Puedes pasar";
    break;
  case "anciano":
    cabecera.textContent = "Puedes pasar, respetado anciano";
    break;
  case "inmortal":
    cabecera.textContent = "Eres muy viejo para estar aquí";
    break;
}
