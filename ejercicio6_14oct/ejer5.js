
        let img_filters= document.getElementById('img_filters');
        
        let blurr = document.getElementById('blur');
        let sepiaa = document.getElementById('sepia');
            console.log(blurr)
            console.log(sepiaa);

            console.log(blurr.value)
            console.log(sepiaa.value);

        function filter_upd(){
            let blurValue=blurr.value+"px";
            let sepiaValue=sepiaa.value+"%";
            console.log(blurValue+"\n"+sepiaValue);
            
            img_filters.style.filter = ` blur(${blurValue})`;
            img_filters.style.filter +=` sepia(${sepiaValue})`;
        }


        blurr.oninput= filter_upd;
        sepiaa.oninput= filter_upd;
        filter_upd();
