 let salida3 = document.getElementById("salida3");
        function revertirCadena() {
            let texto = document.getElementById("cadena").value;
            // return reverse(texto);
            let textoinvertido = texto.split("").reverse().join("");
            salida3.innerHTML = textoinvertido;
        }