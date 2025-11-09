
let sali = document.querySelector(".salida3");
let contenedor = document.querySelector(".ejer3");
let cuadrito = contenedor.querySelector("div[style*='position: relative']");

// Corrige selectores para los controles, usando #id si es posible
let ancho = contenedor.querySelector("input[type=range].ancho");
let alto = contenedor.querySelector("input[type=range].alto");
let arriba = contenedor.querySelector("#arriba");
let derecha_izquierda = contenedor.querySelector("#derecha_izquierda");

function actualizarDiv() {
    // Valores actuales
    let w = ancho.value;
    let h = alto.value;
    let top = arriba.value;
    let left = derecha_izquierda.value;
    // Cambia tamaño y posición usando CSS
    cuadrito.style.width = w + "%";
    cuadrito.style.height = h + "%";
    cuadrito.style.top = top + "%";
    cuadrito.style.left = left + "%";
    // Actualiza cabecera
    sali.textContent = `Ancho: ${w}% | Alto: ${h}% | Top: ${top}% | Left: ${left}% del recuadro`;

    let w_px = (w / 100) * contenedor.clientWidth;
    let h_px = (h / 100) * contenedor.clientHeight;
    let top_px = (top / 100) * contenedor.clientHeight;
    let left_px = (left / 100) * contenedor.clientWidth;

     sali.innerHTML += `<br> Ancho: ${Math.round(w_px)}px | Alto: ${Math.round(h_px)}px | Top: ${Math.round(top_px)}px | Left: ${Math.round(left_px)}px dentro del recuadro`;

}

// Asocia evento oninput para actualización en tiempo real cuando movamos el slider/ la barrita
ancho.oninput = actualizarDiv;
alto.oninput = actualizarDiv;
arriba.oninput = actualizarDiv;
derecha_izquierda.oninput = actualizarDiv;

// Inicializa una vez creados los elementos
actualizarDiv();
