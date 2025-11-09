
        let color_view = document.getElementById('color_view');
        let selection_color= document.getElementById('colors');
        
        selection_color.addEventListener("change",()=>{
            color_view.style.background= selection_color.value;
        })