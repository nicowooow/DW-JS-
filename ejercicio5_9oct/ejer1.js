let array=[];
        let length_array=50;
        let salida1="";
        for (let i = 0; i < length_array; i++) {
            array[i]=false;
            salida1+=array[i]+" || ";
        }
        
        document.getElementById("salida1").innerHTML=salida1;