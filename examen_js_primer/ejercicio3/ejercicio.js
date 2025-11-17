let photo1 = document.getElementById('photo1')
let photo2 = document.getElementById('photo2')
let numero = document.getElementById('numPersona');
let salida = document.getElementById('salida');
numero.addEventListener('input', () => {
    document.getElementById("imgBuscada").src = `./../people/${numero.value}.jpg`
})
// por cada vez que haga click en el boton de buscar
document.getElementById("btnBuscar").addEventListener('click', () => {
    // for (let i = 0; i <= numero.value; i++) {
    // }
    let i = 0;
    let intervalo = setInterval(() => {
        // esto para ver si se imprime bien console.log(i);
        if (numero.value == i) {
            document.getElementById("imgBBDD").src = `./../people/${numero.value}.jpg`;
            salida.innerHTML = "<b>Found!!! <br> match 100%</b>";
            clearInterval(intervalo);
// lo habia puesto al revez --> intervalo.ClearInterval()
        } else {
            document.querySelector("div#photo2 img").src = `./../people/${i}.jpg`
            i++;
            salida.innerHTML = "searching ...";
        }
        
    }, 60)

})