document.getElementById("parrafo").style.color = 'brown';
// parrafo.style.color='brown' esto se puede hacer pero no es buena practica... porque aun no se sabe si en otros navegadores funcionan bien ...
document.getElementById("H2").style.color = 'green';
/*
window.alert("Hola Mundo");
//volvemos con las variable que tenemos 
let x = 1;// variable normal
const y = 2; // variable no modificable mayormente esta en mayusculas
var z = 3; // es para variables globales pero ya no se usa mucho o de forma antigua
let objeto = {}; //objeto vacio
let array = [1,2,3,4,5,6,7,8,9];//array normal
[x]=[5,6,7,8,9];//asignacion por desestructuracion
for(let i=0;i<array.length;i++){
    document.writeln(array[i]);
}
*/
let H1 = document.getElementById("H1");
let H2 = document.getElementById("H2");

// esto lo usammos para añador texto en el html de forma directa sin modificar el html
for (let i = 0; i < 1; i++) {
    H1.innerHTML += " Hola Mundo";
}

// ahora vamos a hacer un programa que calcule el factorial de un numero
let f = 5;
let factorial = 1;
for (let i = 0; i < f; i++) {
    factorial *= (i + 1);
}
H2.innerHTML += "<br><br> El factorial de " + f + " es: " + factorial;

// ahora vamos a hacer un programa que calcule la sumatoria de los primeros 10 numeros
let sumatoria=0;
for(let i=0;i<=10;i++){
    sumatoria+=i;
}
H2.innerHTML += "<br> La sumatoria de los primeros 100 numeros es: "+sumatoria;