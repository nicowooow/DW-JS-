let salida = document.getElementById("salida1");

document.getElementById("input1").addEventListener("change", (e) => {
  let nombre = document.getElementById("input2").value
    let input = e.target.value.split("-");
  let date = new DateEsp(input[0], input[1]-1, input[2], nombre);
  date.createDiv();
  salida.innerHTML = date;
});

// let d = new DateEsp("31/dec/1999" );  // formato usado en España, aunque el mes esté en inglés
// let d = new Date( "1999/12/31" );  // le damos la vuelta, y ponemos el mes numérico
// let d = new Date( "12/31/1999" );  // formato USA
//let d = new DateEsp( 1999, 11, 31 );  // cuando recibe 3 argumentos los meses comienzan en 0
//salida.innerHTML = d.toString();
