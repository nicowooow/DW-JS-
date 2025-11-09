
let array2=[];
let length_cubos=5;
let salida2="";

for (let j = 0; j < length_cubos; j++) {
    array2[j]=j;
    salida2 += Math.pow(array2[j],2)+" ; "
}

document.getElementById("salida2").innerHTML=salida2;