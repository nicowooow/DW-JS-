let cantidad = document.getElementById('ejer2_i');
let salida2 = document.getElementById('salida2');
function CreateArrayTriangular (numero) {
            let salida_prov = '';
            for (let i = 1; i <= numero; i++) {//primer bucle, donde tenemos el nuemro 
                for (let j = 1; j <= i; j++) {//traemos de limite el primer numero para que imprima la cantidad de veces que pida 
                    // me toco pensar en como hacerlo 
                    (j != i)?salida_prov += `${j},`:salida_prov += `${j}`;
                //si j es distinto a i el numero me lo imprime con "," sino no imprime la !","
                }
                salida_prov+="<br>";//salto de linea por cada vez que salga del segundo bucle
            }
            return salida_prov;
        }

cantidad.addEventListener('input', () => {
    let numero = cantidad.value;
    let resultado2 = '';
    if (isNaN(numero)) {
        resultado = 'escriba un numero por favor';
    } else {
        numero = parseInt(numero);
        resultado2 = CreateArrayTriangular(numero);
        salida2.innerHTML = resultado2;
    }
})