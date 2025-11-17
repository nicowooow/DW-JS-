let photo1 = document.getElementById('photo1')
let photo2 = document.getElementById('photo2')
let numero = document.getElementById('number');
let salida = document.getElementById('salida');
numero.addEventListener('input', () => {
    document.querySelector("div#photo1 img").src = `./../people/${numero.value}.jpg`
})
// por cada vez que haga click en el boton de buscar
document.querySelector("input[type='submit']").addEventListener('click', () => {
    // for (let i = 0; i <= numero.value; i++) {
    // }
    let i = 0;
    let intervalo = setInterval(() => {
        if (numero.value == i) {
            document.querySelector("div#photo2 img").src = `./../people/${numero.value}.jpg`;
            salida.innerHTML = "<b>Found!!! <br> match 100%</b>";
            intervalo.clearInterval();

        } else {
            document.querySelector("div#photo2 img").src = `./../people/${i}.jpg`
            i++;
            salida.innerHTML = "searching ...";
        }
    }, 100)

})