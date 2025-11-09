
        let chat_textarea = document.getElementById('chat_textarea');
        let chat_text = document.getElementById('chat_text');
        let btn = document.getElementById('btn');

        chat_textarea.disabled=true;
        btn.addEventListener('click',()=>{
            chat_textarea.textContent +=chat_text.value +"\n";
            chat_text.value="";
        })

        chat_text.addEventListener('keydown',evento=>{
            if(evento.key=="Enter"){
            chat_textarea.textContent +=chat_text.value +"\n";
            chat_text.value="";
            }
        })
