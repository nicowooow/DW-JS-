
function mess(text) {
    let arr = text.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // índice aleatorio desde 0 hasta i
        // Intercambia arr[i] con arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}


    function mostrarMess() {
        let entrada = document.getElementById("texto_mess").value;
        document.getElementById("salidaMess").textContent = mess(entrada);
    }