document.getElementById("agregar").addEventListener("click", () => {
  let nombre = document.getElementById("nombre");
  let edad = document.getElementById("edad");
  let nombre_value = nombre.value;
  let edad_value = edad.value == "" ? 0 : edad.value;

  let personas = document.getElementById("personas");

  let persona = new Persona(nombre_value, edad_value);

  let btn = document.createElement("button");
  btn.textContent = persona.getNombre();
  btn.addEventListener("click", () => {
    let saludo = document.getElementById("saludo");
    let mensaje = persona.saluda();
    saludo.textContent = mensaje;
  });

  let edad_muerte = Math.floor(Math.random() * 30) + 1;
  // en la edad de muerte nos dara un numero aleatorio del 1 al 30
  console.log(persona.getNombre(), "-->", edad_muerte);
  let vivir = setInterval(() => {
    console.log(persona.getNombre(),'-->',persona.getEdad());
    persona.cumplirAnios();
    if (persona.getEdad() >= edad_muerte) {
      btn.textContent ='⚰️';
      // btn.remove()
      // esto sirve para eliminar el boton que eliminamos
      console.log(persona.getNombre(), "--> murio");
      persona = null;
      clearInterval(vivir);
    }
  }, 1000);
  personas.appendChild(btn);
});
