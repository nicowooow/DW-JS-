 function swap() {
        let salida5 = document.getElementById("salida5");
        let input = document.getElementById("palabra");
        let palabra = input.value;
        let ini = parseInt(document.getElementById("num1").value);
        let fin = parseInt(document.getElementById("num2").value);
        
                let array_pala = palabra.split('');
                let palabratemp = "";
                
                let char1 = array_pala[parseInt(ini)]
                let char2 = array_pala[parseInt(fin)]
                array_pala[parseInt(ini)] = char2
                array_pala[parseInt(fin)] = char1
                array_pala.forEach(element => {
                    palabratemp += element;
                });
                salida5.innerHTML = palabratemp;

            
        }