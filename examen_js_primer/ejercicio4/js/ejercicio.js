let frase = "En un lugar de la Mancha" // la frase

function mostrar(elemento) {// funcion que creo
    document.getElementById('salida').innerHTML += elemento;
}

// esta copiada tal cual la hoja 
function mayuscula(palabra, callback) {
    setTimeout(function () {
        callback(palabra.slice(0, palabra.indexOf(" ")).toUpperCase());
        
    }, (Math.random * 5))// numero aleatorio del 0 al 5
}

let intervalo = setInterval(() => {
    let i = 0;
    while (i < frase.length) {
        let letra = frase[i]+" ";
        mayuscula(letra, mostrar)
        i++;
    }

    clearInterval(intervalo) // limpiamos el intervalo
}, (Math.random * 5));// numero aleatorio del 0 al 5

