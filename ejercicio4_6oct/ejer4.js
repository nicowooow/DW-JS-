let salida4 = document.getElementById("salida4");
        function quitar_caracteres_repetidos() {
            let texto2 = document.getElementById("cadena2").value;
            let array_caracteres = texto2.split("");
            let texto_sin_repe = "";
            array_caracteres.forEach(caracter => {
                if (!texto_sin_repe.includes(caracter)) {
                    texto_sin_repe += caracter;
                }

            });
            salida4.innerHTML = texto_sin_repe;

        }
