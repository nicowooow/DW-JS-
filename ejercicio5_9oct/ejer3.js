let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let salida3="";
for (let k = 0; k < diasSemana.length; k++) {
    salida3 += diasSemana[k]+" || ";
}
document.getElementById("salida3").innerHTML=salida3;
