document.getElementById("ejer1_btn").addEventListener("click", ()=>{
    let tapete= document.getElementById("tapete");
    let caras = Number(document.getElementById("ejer1_i").value);
    let dado = new Dado(caras);
    let crear = document.createElement('button');
    crear.textContent = dado.lanzar();
    // console.log(crear);
    tapete.appendChild(crear);

    crear.addEventListener("click",()=>{
    crear.textContent = dado.lanzar();

    })

})