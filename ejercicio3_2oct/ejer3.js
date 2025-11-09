let tabla_multiplicar= document.getElementById("tabla_multiplicar");
        let tabla_html="<table border='1' cellspacing='0' cellpadding='5'>";
            tabla_html+="<tr><td>x</td>"
        for(let i=1; i<=10;i++){
            tabla_html+=`<td> ${i} </td>`;
        }
        
        tabla_html+="</tr>";
        for(let i=1; i<=10;i++){
            tabla_html+=`<tr><td>${i}</td>`;
            for(let j=1; j<=10;j++){
                tabla_html+=`<td> ${i*j} </td>`;
            }
            tabla_html+="</tr>"
        }
        tabla_html+="</table>";
        tabla_multiplicar.innerHTML=tabla_html;