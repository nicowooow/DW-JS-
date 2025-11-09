        let boton_mort=document.getElementById("boton_mort");
        let mort_random=document.getElementById("mort_random");
        boton_mort.addEventListener("click",()=>{
            boton_mort.style.display="none";
            mort_random.style.display="block";
        });
        mort_random.addEventListener("click",()=>{
            boton_mort.style.display="block";
            mort_random.style.display="none";
            });
