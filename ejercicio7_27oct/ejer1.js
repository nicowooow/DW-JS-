let array1=[1,2,3];
let array2=[[1,2],[1,2,3],[1,2,3,4]];

function showArray(array){
    let text_temp =" <br>---------------<br>";
    
    for (let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])){
            for (let j = 0; j < array[i].length; j++) {
                
                text_temp+= array[i][j];
            }
            text_temp+="<br>";
        }else{
            text_temp+= array[i];
        }
        
    }

    document.getElementById('salida1').innerHTML += text_temp +" <br>---------------<br>";
}

showArray(array1);

showArray(array2);
