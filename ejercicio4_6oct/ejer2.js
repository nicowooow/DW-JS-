
        let boton_inicio;
        function padZero(number) {
    return number < 10 ? "0" + number : number;
}

        function temporizador() {
            let salida2 = document.getElementById("salida2");
            if (boton_inicio == null) {
                boton_inicio = Date.now();
                salida2.textContent = "Cronómetro iniciado";
            } else {
                let boton_fin = Date.now();
                let diferencia = boton_fin - boton_inicio;
                let segundos = diferencia / 1000;
                console.log(boton_inicio, "y", boton_fin)
                salida2.textContent = "Cronómetro terminado en " + segundos + " segundos y en formato hora seria";

                let hora = Math.floor(diferencia / 3600000);
                let minutos = Math.floor((diferencia % 3600000) / 60000);
                let segundos_exac = Math.floor((diferencia % 60000) / 1000);
                salida2.textContent += ` ${padZero(hora)}:${padZero(minutos)}:${padZero(segundos_exac)}`;
            }
        }