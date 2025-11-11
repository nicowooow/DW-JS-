function RandomNum(max) { return Math.floor(Math.random() * max)}

function putMinas(mines, totalCeldas) {
    let positions = []

    while (positions.length < mines) {
        let positionRandom = RandomNum(totalCeldas);
//        console.log(positionRandom);
        if (!positions.includes(positionRandom)) {
            positions.push(positionRandom);
        }
    }
    //esto aun lo no mejoro...  positions.includes(positionRandom)? positions.push(positionRandom) : positions.push(RandomNum(i3f))
    //console.log(positions);
    return positions
}

function initBuscaminas(rows, columns, mines, totalCelds) {
    let positions = putMinas(mines, totalCelds)
  //  console.log(positions);

    let buscaminas = `<table style="border-collapse: collapse; border: 1px solid black;">`;
    for (let i3 = 0; i3 < rows; i3++) {
        buscaminas += `<tr>`;
        for (let j3 = 0; j3 < columns; j3++) {
            buscaminas += `<td style="width: 20px; height: 20px; border: 1px solid black; text-align: center;">`;
            (positions.includes(i3*columns + j3)) ? buscaminas += `*</td>` : buscaminas += `0</td>`;
            // si posicion es igual al num_fila*num_colm + num_colm--> el multiplicar el num_colm es porque si esta en la columna uno solo lo toma de dicha fila, y respectivamente con la fila que este...
        }
        buscaminas += `</tr>`;
    }
    buscaminas += `</table>`;

    return buscaminas;

}

let div = document.getElementById('ejer3');
let rows = document.getElementById('rows');
let columns = document.getElementById('columns');
let mines = document.getElementById('mines');
let salida3 = document.getElementById('salida3');

div.querySelectorAll('input').forEach(e => {
    e.addEventListener('input', () => {
        let resultado3 = '';
        let num_rows = parseInt(rows.value);
        let num_columns = parseInt(columns.value);
        let num_mines = parseInt(mines.value);

        let celdas_max = num_rows * num_columns;

        if (num_mines > celdas_max) {
            resultado3 = `the number of mines is bigger than celds. Max Celds: ${celdas_max}, Mines: ${num_mines}<br> <b>please modify datas</b>`;
        } else {
            if (!isNaN(num_rows) && !isNaN(num_columns) && !isNaN(num_mines)) {
                resultado3 = `Rows: ${num_rows}, Columns: ${num_columns}, Mines: ${num_mines}, Max Celds: ${celdas_max} <br>`;
                resultado3 += initBuscaminas(num_rows, num_columns, num_mines, celdas_max);
            }
        }
        salida3.innerHTML = resultado3;
    })
})