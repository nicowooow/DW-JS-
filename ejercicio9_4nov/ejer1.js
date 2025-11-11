/* FUNCIONES FLECAS */
const sumar = (x,y)=>{return x+y }

const  restar = (x,y)=>{return x-y}

/* FUNCIONES DECLARADAS */

function multiplicar(x,y){ return x*y}

function dividir(x,y){ return x/y}

let salida_1= document.getElementById('salida_1')
let salida_2= document.getElementById('salida_2')
let salida_3= document.getElementById('salida_3')
let salida_4= document.getElementById('salida_4')

salida_1.innerHTML=sumar(5,4) + " <<<<<  sumar(5,4) "
salida_2.innerHTML=restar(sumar(5,4),1) + " <<<<<  restar(sumar(5,4),1) "
salida_3.innerHTML=dividir(sumar(sumar(multiplicar(2,2),3),7),2) + " <<<<<  dividir(sumar(sumar(multiplicar(2,2),3),7),2) "
salida_4.innerHTML=multiplicar(dividir(sumar(8,6),restar(9,2)),3) + " <<<<<  multiplicar(dividir(sumar(8,6),restar(9,2)),3) "