let message = document.getElementById("mensaje");
        let boton=document.querySelector("#boton");
        let passwd = "secreto";
        let intentos=0;
        boton.addEventListener("click",()=>{
        let passwd_ = document.getElementById("passwd").value;
        if(intentos != 3 ){
            if(passwd===passwd_){
                message.textContent="Bienvenido a la pagina...";
            }else if(passwd!==passwd_){
                message.textContent=`Intento fallido numero ${intentos+1}`;
                intentos++;
            }else{
                message.textContent="esperando contrasena...";
            }
        }else{
            message.textContent=`Intento fallido mayor ${intentos} ,usaste todos los intentos que tenias`;
            boton.disabled = true;
        }
    })