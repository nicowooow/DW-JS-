function calculas(x,y,operation){
//console.log(operation," -> ",operation(x,y));
//console.log("------------------------------");
return operation(x,y)

/*    (operation == "sumar") ?  result = sumar(x,y) : 
    (operation == "restar") ? result = restar(x,y) : 
    (operation == "multiplicar") ? result = multiplicar(x,y) : 
    (operation == "dividir") ? result = dividir(x,y) : null
*/
}

let salida_5= document.getElementById('salida_5')
let salida_6= document.getElementById('salida_6')
let salida_7= document.getElementById('salida_7')
let salida_8= document.getElementById('salida_8')

salida_5.innerHTML=calculas(5,4,sumar) + " <<<<<  calculas(5,4,sumar) "
salida_6.innerHTML=calculas(calculas(5,4,sumar),1,restar) + " <<<<<  calculas(calculas(5,4,sumar),1,restar) "
salida_7.innerHTML=calculas(calculas(calculas(calculas(2,2,multiplicar),3,sumar),7,sumar),2,dividir)  + " <<<<< calculas(calculas(calculas(calculas(calculas(2,2,multiplicar)),3,sumar),7,sumar),2,dividir) "
salida_8.innerHTML=calculas(calculas(calculas(8,6,sumar),calculas(9,2,restar),dividir),3,multiplicar) + " <<<<< calculas(calculas(calculas(8,6,sumar),calculas(9,2,restar),dividir),3,multiplicar) "