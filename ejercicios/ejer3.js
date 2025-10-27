 let resultado3 = document.getElementById("ejer3");
// nos pide un numero entre el 0 y el 6 
let min = 0;
let max = 6;
// est es para generar el numero aleatorio entre el 0 y el 6 pero que sea entero 
let randNum= min + Math.random()*(max+1);
resultado3.textContent = `El numero aleatorio entre ${min} y ${max} es: ${Math.floor(randNum)} ,sabiendo que esta sin decimales (aproximacion)`;
// esto es para generar del 1 al 6 pero sin ser entero
resultado3.innerHTML += `<br> el numero real es ${randNum}`;