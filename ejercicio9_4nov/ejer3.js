let suma_fc = (x, y, fc) => { let result = x + y; fc(result); }
let resta_fc = (x, y, fc) => { let result = x - y; fc(result); }
function multiplicar_fc(x, y, fc) { let result = x * + y; fc(result); }
function dividir_fc(x, y, fc) { let result = x / y; fc(result); }

let salida_9 = document.getElementById('salida_9');
let salida_10 = document.getElementById('salida_10');
let salida_11 = document.getElementById('salida_11');
let salida_12 = document.getElementById('salida_12');

// salida_9.innerHTML=
// `<p>esto es con funciones normales </p> --> `+ suma_fc(5,4,function(res){console.log(res);})+` <<<<< suma_fc(5,4,function(res){console.log(res); return res}) <br>
// <p>esto es con funciones flecha </p> --> `+ +" <<<<< suma_fc(5,4,(res)=>{console.log(res); return res}) "

// salida_10.innerHTML=`<p>esto es con funciones normales </p> --> `+
//  resta_fc(suma_fc(5,4,function(res){console.log(res); return res}),1,function(res){console.log(res);})+` <<<<< resta_fc(suma_fc(5,4,function(res){console.log(res); return res}),1,function(res){console.log(res);}) <br>
//                     <p>esto es con funciones flecha </p> --> `+
//  resta_fc(suma_fc(5,4,(res)=>{console.log(res);}),1,(res)=>{console.log(res);})+" <<<<< resta_fc(suma_fc(5,4,(res)=>{console.log(res);}),1,(res)=>{console.log(res);}) "

// salida_11.innerHTML=
// salida_12.innerHTML=
suma_fc(5, 4, (res) => {
    salida_9.innerHTML = res + `  <<<<<  suma_fc(5, 4, (res) => {
    salida_9.innerHTML = res
})`
})

suma_fc(5, 4, (res) => {
    resta_fc(res, 1, (res1) => {
        salida_10.innerHTML = res1 + `  <<<<<  suma_fc(5, 4, (res) => {
                                                resta_fc(res,1, (res1) => {
                                                    salida_9.innerHTML = res1
                                                });
                                            })`
    });
})

multiplicar_fc(2,2,(res)=>{
    suma_fc(3,res,(res1)=>{
        suma_fc(7,res1,(res2)=>{
            dividir_fc(res2,2,(res3)=>{
                salida_11.innerHTML= res3 +`  <<<<<  multiplicar_fc(2,2,(res)=>{
                                            suma_fc(3,res,(res1)=>{
                                                suma_fc(7,res1,(res2)=>{
                                                    dividir_fc(res2,2,(res3)=>{
                                                        salida_11.innerHTML= res3 
                                                    })
                                                })
                                            })
                                        })`
            })
        })
    })
})

suma_fc(8,6,(res)=>{
    resta_fc(9,2,(res1)=>{
        dividir_fc(res,res1,(res2)=>{
            multiplicar_fc(res2,3,(res3)=>{
                salida_12.innerHTML= res3 + `  <<<<<  suma_fc(8,6,(res)=>{
                                                        resta_fc(9,2,(res1)=>{
                                                            dividir_fc(res,res1,(res2)=>{
                                                                multiplicar_fc(res2,3,(res3)=>{
                                                                    salida_12.innerHTML= res3 
                                                                })
                                                            })
                                                        })
                                                    })`
            })
        })
    })
})

