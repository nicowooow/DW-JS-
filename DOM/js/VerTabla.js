const resultado = document.getElementById("resultado");
//console.log(clase);
let table = document.createElement("table");
let datos = [];

for (const alumno in clase) {
  let trow = document.createElement("tr");
  for (dato in clase[alumno]) {
    let thead = document.createElement("th");
    if (!datos.includes(dato)) {
      datos.push(dato); //   console.log(datos);
      thead.innerHTML += datos[datos.length - 1];
      table.appendChild(thead);
    }
    let td = document.createElement("td");
    td.innerHTML = clase[alumno][dato];
    trow.appendChild(td);
  }
  table.appendChild(trow);
}

resultado.appendChild(table);
