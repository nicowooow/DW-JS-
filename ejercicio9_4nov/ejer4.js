

let suma_sto = (x, y, fc) => {
    setTimeout(() => {
        let result = x + y; 
        fc(result);
    }, Math.random() * 2000);
}
let resta_sto = (x, y, fc) => {
    setTimeout(() => {
        let result = x - y; 
        fc(result);
    }, Math.random() * 2000);
}
function multiplicar_sto(x, y, fc) {
    setTimeout(() => {
        let result = x * + y; 
        fc(result);
    }, Math.random() * 2000);
}
function dividir_sto(x, y, fc) {
    setTimeout(() => {
        let result = x / y; 
        fc(result);
    }, Math.random() * 2000);
}

let salida_13 = document.getElementById('salida_13');
let salida_14 = document.getElementById('salida_14');
let salida_15 = document.getElementById('salida_15');
let salida_16 = document.getElementById('salida_16');
let salida_17 = document.getElementById('salida_17');

suma_sto(5,4, (result)=>{
    salida_13.innerHTML = "5 + 4 = " + result;
})

suma_sto(5,4,(result)=>{
    resta_sto(result,1, (result1)=>{
        salida_14.innerHTML = "(5 + 4) - 1 = " + result1;
})
})

multiplicar_sto(2,2,(result)=>{
    suma_sto(result,3,(result1)=>{
        suma_sto(result1,7,(result2)=>{
            dividir_sto(result2,2,(result3)=>{
                salida_15.innerHTML = "((2 * 2) + 3 + 7) / 2 = " + result3;
            })
        })
    })
})

suma_sto(8,6,(result)=>{
    resta_sto(9,2,(result2)=>{
        dividir_sto(result,result2,(result3)=>{
            multiplicar_sto(result3,3,(result4)=>{
                salida_16.innerHTML = "((8 + 6) / (9 - 2)) * 3 = " + result4;
            })
        })
    })
})