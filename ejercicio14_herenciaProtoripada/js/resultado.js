const salida = document.getElementById("salida");

escribir("<b>HUMANO</b>");
try {
  const luis = new Humano("<b>Juan el señor de la esquina</b>", "10/15/1070");
  luis.verFutbol();
  luis.desplazarse(20);
  luis.alimentarse("pizza");

  luis.volar();
} catch (error) {
  escribir("Error: Luis no puede volar", "error");
}

escribir("<b>SUPERMAN</b>");
const clark = new SuperMan("<b>Clark Kent, el papu</b>", "18/04/1937");

clark.verFutbol();
clark.desplazarse(100);
clark.volar();

escribir("<b>ANIMAL</b>");
try {
  const perro = new Animal("3/3/2018", 4);
  perro.desplazarse(2);
  perro.verFutbol();
} catch (error) {
  escribir("Error: Un animal no puede ver fútbol", "error");
}