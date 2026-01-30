function RandomNum(max) {
  return Math.floor(Math.random() * max);
}

function putMinas(mines, totalCeldas) {
  let positions = [];

  while (positions.length < mines) {
    let positionRandom = RandomNum(totalCeldas);
    //        console.log(positionRandom);
    if (!positions.includes(positionRandom)) {
      positions.push(positionRandom);
    }
  }
  //esto aun lo no mejoro...  positions.includes(positionRandom)? positions.push(positionRandom) : positions.push(RandomNum(i3f))
  //console.log(positions);
  return positions;
}

function look_for_mines(row, column, num_rows, num_colm, positions) {
  let quantity = 0;
  //aqui se trata de condicionales seguidas podria hacer la condicional ternaria... pero mejor no

  for (let i = row - 1; i <= row + 1; i++) {
    // primer bucle para las filas
    for (let j = column - 1; j <= column + 1; j++) {
      //segundo bloque para las columnas

      if (i === row && j === column) {
        //si el i es igual la fila y el j es igual a la columan se pasa al siguiente
        continue;
      } else {
        posi = i * num_colm + j; // calculamos la posicion actual de array
        //console.log("i: ",i,"j: ",j);
        //console.log("posi: ",posi);
        // i<num_rows && &&j<num_colm
        if (i >= 0 && j >= 0)
          if (positions.includes(posi))
            //i tiene que ser mayor o igual a cero
            //i tiene que ser menor al limite definido
            //j  tiene que ser mayor o igual a cero
            //j tiene que ser menor al limite definido
            quantity++;
        // si cumple dichas condiciones, pasa al ultimo if que dice ... si el array contiene el valor de su alrededores se aumenta uno por uno
        //esto funciona de forma lineal
      }
    }
  }
  //console.log("quntity: ",quantity);

  return quantity;
}

function initBuscaminas_with_num(rows, columns, mines, totalCelds) {
  let positions = putMinas(mines, totalCelds);
  //console.log(positions);

  let buscaminas = `<table style="border-collapse: collapse; border: 1px solid black;">`;
  for (let i3 = 0; i3 < rows; i3++) {
    buscaminas += `<tr>`;
    for (let j3 = 0; j3 < columns; j3++) {
      buscaminas += `<td style="width: 20px; height: 20px; border: 1px solid black; text-align: center;">`;
      let position = i3 * columns + j3;
      // si posicion es igual al num_colm*num_fila + num_fila--> el multiplicar el num_colm es porque si esta en la columna uno solo lo toma de dicha fila, y respectivamente con la fila que este...
      if (positions.includes(position)) {
        buscaminas += `<p>*</p><button style="position:relative; z-index:1; height:100%; width:100%; top:0;"></button></td>`;
      } else {
        let quantity_mines = look_for_mines(i3, j3, rows, columns, positions);
        buscaminas += `<p>${quantity_mines}</p><button style="position:relative; z-index:1; height:100%; width:100%; top:0;"></button></td>`;
      }
    }
    buscaminas += `</tr>`;
  }
  buscaminas += `</table>`;

  return buscaminas;
}

let div = document.getElementById("ejer3");
let rows = document.getElementById("rows");
let columns = document.getElementById("columns");
let mines = document.getElementById("mines");
let salida3 = document.getElementById("salida3");

document.querySelector("#ejer3 button").addEventListener("click", () => {
  let resultado3 = "";
  let num_rows = parseInt(rows.value);
  let num_columns = parseInt(columns.value);
  let num_mines = parseInt(mines.value);

  let celdas_max = num_rows * num_columns;

  if (num_mines > celdas_max) {
    resultado3 = `the number of mines is bigger than celds. Max Celds: ${celdas_max}, Mines: ${num_mines}<br> <b>please modify datas</b>`;
  } else {
    if (!isNaN(num_rows) && !isNaN(num_columns) && !isNaN(num_mines)) {
      resultado3 = `Rows: ${num_rows}, Columns: ${num_columns}, Mines: ${num_mines}, Max Celds: ${celdas_max} <br>`;
      resultado3 += initBuscaminas_with_num(
        num_rows,
        num_columns,
        num_mines,
        celdas_max
      );
    }
  }
  salida3.innerHTML = resultado3;
});

// Array.from()
document.querySelectorAll("#salida3 button").forEach((e) => {
  console.log(e);
  e.addEventListener("click", (ele) => {
    console.log(ele);
    ele.style.display = "none";
  });
});
