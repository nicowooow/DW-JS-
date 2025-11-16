function look_for_mines(row, column,num_rows,num_colm, positions) {
    let quantity = 0;
    //aqui se trata de condicionales seguidas podria hacer la condicional ternaria... pero mejor no
    
    for (let i = row - 1; i <= row + 1; i++) { // primer bucle para las filas
        for (let j = column - 1; j <= column + 1; j++) {//segundo bloque para las columnas
            
            if (i === row && j === column){ //si el i es igual la fila y el j es igual a la columan se pasa al siguiente
                continue;
            }else{
                posi=i * num_colm + j // calculamos la posicion actual de array
                //console.log("i: ",i,"j: ",j);
                //console.log("posi: ",posi);
                // i<num_rows && &&j<num_colm
                if (i >= 0 && j >= 0 )
                    //i tiene que ser mayor o igual a cero
                    //i tiene que ser menor al limite definido
                    //j  tiene que ser mayor o igual a cero
                    //j tiene que ser menor al limite definido
                    if (positions.includes(posi)) quantity++
                    // si cumple dichas condiciones, pasa al ultimo if que dice ... si el array contiene el valor de su alrededores se aumenta uno por uno
                    //esto funciona de forma lineal
                }
        }
    }
    //console.log("quntity: ",quantity);
    
    return quantity;

}
function initBuscaminas_with_num(rows, columns, mines, totalCelds) {
    let positions = putMinas(mines, totalCelds)
    //console.log(positions);

    let buscaminas = `<table style="border-collapse: collapse; border: 1px solid black;">`;
    for (let i3 = 0; i3 < rows; i3++) {
        buscaminas += `<tr>`;
        for (let j3 = 0; j3 < columns; j3++) {
            buscaminas += `<td style="width: 20px; height: 20px; border: 1px solid black; text-align: center;">`;
            let position = i3 * columns + j3;
            // si posicion es igual al num_colm*num_fila + num_fila--> el multiplicar el num_colm es porque si esta en la columna uno solo lo toma de dicha fila, y respectivamente con la fila que este...
            if (positions.includes(position)) {
                buscaminas += `*</td>`
            } else {
                let quantity_mines = look_for_mines(i3,j3,rows,columns,positions)
                    buscaminas += `${quantity_mines}</td>`
            }
        }
        buscaminas += `</tr>`;
    }
    buscaminas += `</table>`;

    return buscaminas;

}

let div4 = document.getElementById('ejer3');
let rows4 = document.getElementById('rows');
let columns4 = document.getElementById('columns');
let mines4 = document.getElementById('mines');
let salida4 = document.getElementById('salida4');

div4.querySelectorAll('input').forEach(e => {
    e.addEventListener('input', () => {
        let resultado4 = '';
        let num_rows4 = parseInt(rows4.value);
        let num_columns4 = parseInt(columns4.value);
        let num_mines4 = parseInt(mines4.value);

        let celdas_max4 = num_rows4 * num_columns4;

        if (num_mines4 > celdas_max4) {
            resultado4 = `the number of mines is bigger than celds. Max Celds: ${celdas_max4}, Mines: ${num_mines4}<br> <b>please modify datas</b>`;
        } else {
            if (!isNaN(num_rows4) && !isNaN(num_columns4) && !isNaN(num_mines4)) {
                resultado4 = `Rows: ${num_rows4}, Columns: ${num_columns4}, Mines: ${num_mines4}, Max Celds: ${celdas_max4} <br>`;
                resultado4 += initBuscaminas_with_num(num_rows4, num_columns4, num_mines4, celdas_max4);
            }
        }
        salida4.innerHTML = resultado4;
    })
})