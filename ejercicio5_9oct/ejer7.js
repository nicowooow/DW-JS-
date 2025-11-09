
    let rango_max=document.getElementById("rango_max");
    rango_max.addEventListener("change",function(){
        let salida7 = ""
        let rango = parseInt(rango_max.value) +1;
        salida7+="<table border='1' cellspacing='0' cellpadding='5'>"

        for (let m = 1; m < rango; m++) {
            salida7+="<tr><td>"+(m)+"</td>";
            for (let n = 2; n < rango ;n++) {
                salida7 += "<td>"+(n*m)+"</td>";
                
            }
            salida7+="</tr>";
            
        }
        salida7+="</table>";


        console.log(salida7)
        document.getElementById("salida7").innerHTML=salida7;    
    })

