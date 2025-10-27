function saludar() {
    let salida = document.getElementById("salida");
    let nombre = document.getElementById("nombre_");
    let cont_nombre = nombre.value;
    salida.innerHTML = `Hola ${cont_nombre}`;
}
/* esta es otra forma de hacer el saludo 
let salida2 = document.getElementById("salida1");
let otro = document.getElementById("otro");
let boton = document.getElementById("boton");
boton.onclick = function () {
    salida2.innerHTML = `otra ->  ${otro.value}`;
}
*/
function sumar() {
    let salida2 = document.getElementById("salida2");
    let first_num = document.getElementById("first_num");
    let second_num = document.getElementById("second_num");
    let num1;
    let num2;

    if (isNaN(first_num.value) || first_num.value.trim() === "") {
        alert("ingresate algo invalido en el numero 1");

    } else {
        num1 = parseInt(first_num.value);

    }

    if (isNaN(second_num.value) || second_num.value.trim() === "") {
        alert("ingresate algo invalido en el numero 2 ");

    } else {
        num2 = parseInt(second_num.value);

    }
    let suma = num1 + num2;

    salida2.innerHTML = `La suma es ${suma}`;
}

function randomNum() {
    let salida = document.getElementById("salida3.0");
    // nos pide un numero entre el 0 y el 6 
    let min = 1;
    let max = 6;
    // est es para generar el numero aleatorio entre el 0 y el 6 pero que sea entero 
    let randNum = min + Math.random() * (max);
    salida.textContent = ` numero : ${Math.floor(randNum)} `;
    // esto es para generar del 1 al 6 pero sin ser entero
}

function randomLet() {
    let salida = document.getElementById("salida3.1");
    // nos pide un numero entre el 0 y el 26 
    let abecedario = "abcdefghijklmñnopqrstuvwxyz"
    let min = 0;
    let max = abecedario.length - 1;
    // est es para generar el numero aleatorio entre el a y el z pero que sea entero 
    let randNum = Math.floor(min + Math.random() * (max + 1));
    let randLet = abecedario[randNum];
    salida.textContent = ` letra : ${randLet} `;
    // esto es para generar del a al z pero sin ser entero y lo escoje entre la posicion del 0 al 26
}

function change_place() {
    // con esto sacamos los dos lugares
    let place = ["place1", "place2"]
    // sacamos la etiqetas de los dos lugares
    let slot1 = document.getElementById(place[0]);
    let slot2 = document.getElementById(place[1])
    // sacamos el valor de los dos lugares
    let text1 = slot1.value;
    let text2 = slot2.value;
    //cambiamos la posicion
    slot1.value = text2;
    slot2.value = text1;

}

function randomSum(classTag) {
    function ranNum() {
        // nos pide un numero entre el 0 y el 6 
        let min = 1;
        let max = 6;
        // est es para generar el numero aleatorio entre el 0 y el 6 pero que sea entero 
        let randNum = min + Math.random() * (max);
        return Math.floor(randNum);
    }
    let numRand = ranNum();// ponemos el numero random
    let slot = document.getElementById(classTag);// sacamos el slot par aponer en numero random
    slot.innerHTML = numRand;

    let actu = function () {
        // sacamos el contenidop de cada slot
        let num1 = document.getElementById("slot1").textContent;
        let num2 = document.getElementById("slot2").textContent;
        let num3 = document.getElementById("slot3").textContent;
// retornamos la sunma
        return parseInt(num1) + parseInt(num2) + parseInt(num3);

    }

    let slot4 = document.getElementById("slot4");// sacamos el slot del resultado 
    // ponemos la suma
    slot4.innerHTML = actu();



}

function randomColor(classTag) {
    function ranNum() {
        // nos pide un numero entre el 0 y el 6 
        let min = 0;
        let max = 255;
        // est es para generar el numero aleatorio entre el 0 y el 6 pero que sea entero 
        let randNum = min + Math.random() * (max);
        // retorna el valor redondeado 
        return Math.floor(randNum);
    }
    let numRand = ranNum(); // sacamos el valor random
    let slot = document.getElementById(classTag); // sacamos la etiqueta con dicha id, del boton que hixo clic
    slot.innerHTML = numRand; //pone el numero random 

    let actu = function () {
        // obtenemos el numero que tiene o que salio de cada random
        let num1 = document.getElementById("color1").textContent;
        let num2 = document.getElementById("color2").textContent;
        let num3 = document.getElementById("color3").textContent;

        // retornamos en modo rgb
        return `rgb( ${parseInt(num1)}, ${parseInt(num2)}, ${parseInt(num3)} )`;

    }
    // sacamos el slot del color
    let color4 = document.getElementById("color4");
    // ponemos la funcion que retona el color en rbg
    color4.style.backgroundColor = actu();

}