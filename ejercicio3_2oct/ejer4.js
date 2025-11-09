let nota= document.getElementById("ingresar_nota").value;
    let resultado= document.getElementById("mostrar_resultado");

    let nota_resultado=(nota<5)?"Suspenso":(nota>=5 && nota<7?"aprobado":(nota>=7 && nota<9?"notable":(nota>=9 && nota<=10?"Sobresaliente":"ehhh nose la verdad")));
    

    resultado.innerHTML = nota_resultado;
