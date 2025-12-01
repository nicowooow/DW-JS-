let rows = document.getElementById("rows");
let columns = document.getElementById("columns");
let mines = document.getElementById("mines");
let btn_start = document.getElementById("btn_start");
let salida = document.getElementById("salida");
let stats = document.getElementById("stats");

function start_game(num_rows, num_columns, num_mines) {

    

}

btn_start.addEventListener("click", () => {
  let num_rows = rows.value;
  let num_columns = columns.value;
  let num_mines = mines.value;
  if (num_rows && num_columns && num_mines) {
    btn_start.disabled = true;
    start_game();
    btn_start.disabled = false;
  } else {
    alert("complete todos los datos");
  }
});
