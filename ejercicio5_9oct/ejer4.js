    let salida4="";
    for (let dias in diasSemana) {
        salida4+= dias +"; " + diasSemana[dias] +" || ";
        }
document.getElementById("salida4").innerHTML=salida4;
