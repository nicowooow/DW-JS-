let botones = document.querySelectorAll('input');// sacamos los botones que tiene el documento
// console.log(botones); // para verificar si estan los botones
let salida = document.getElementById('salida');
// cuando este cargado el documento realizamos la siguiente funcion
let boton_elejido;
// funcion para pintar el boton
function pintarBTN(boton) {
    if (boton) { // si tiene un boton le pone su estilo por defecto segun html, buenoo eso dice cuando entro al terminal
        boton.style.backgroundColor = 'buttonface';
    }
    let boton_elejido = botones[Math.floor(Math.random() * 4)];//escogemos un boton con random 
    boton_elejido.style.backgroundColor = "rgb(0,255,0)"; // pintamos el boton verde que salio
    return boton_elejido; // nos regresa el boton elejido
}

window.addEventListener('DOMContentLoaded', () => {
    boton_elejido = pintarBTN(boton_elejido);
    let primer_precionado // seta el tiempo de la primera vez que hizo click
    let pulsaciones = 0; // cantidad de pulsaciones
    botones.forEach((e) => {// bucle por cada elemento que este en el array de botones
        // e es el valor que saca, me acostumbre a usar el "e"
        e.addEventListener('click', () => {// por cada click que se haga en el boton
            pulsaciones ++;
            // console.log(primer_precionado);
            if (primer_precionado == null) primer_precionado = Date.now()
            if (e.id === boton_elejido.id) {
                let clic_boton = Date.now()// la fecha en ms por cada vez que se haga un click erroneo
                //console.log(boton_elejido.value);
                boton_elejido = pintarBTN(boton_elejido)
                salida.innerHTML=` pulsaciones : <b>${pulsaciones}</b> <br> tiempo : <b>${(clic_boton - primer_precionado)/1000}</b>  segs`;

            }
            else {
                salida.innerHTML = `<b>ERROR!!! - Pulse el boton ${boton_elejido.value}</b>`
            }
        })

    })


})

