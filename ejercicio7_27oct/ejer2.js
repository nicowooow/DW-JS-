let cantidad = document.getElementById('ejer2_i');
let salida = document.getElementById('salida2');
function CreateArrayTriangular (numero) {
            let salida_prov = '';
            for (let i = 1; i <= numero; i++) {
                salida_prov += `${i}<br>`

            }
            return salida_prov;
        }

cantidad.addEventListener('input', () => {
    let numero = cantidad.value;
    let resultado = '';
    if (isNaN(numero)) {
        resultado = 'escriba un numero por favor';
    } else {
        numero = parseInt(numero);
        resultado = CreateArrayTriangular(numero);
        salida.innerHTML = resultado;
    }
})