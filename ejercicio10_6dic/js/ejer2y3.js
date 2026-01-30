let cesta = []; // tenemos una lista vacia
let input_2 = document.querySelector("#ejer2 input[type='text']");//input del nombre que pondremos al elemento

let salida_2 = document.getElementById("cesta");// el espacio de donde saldra el mensaje
let lista_delete = document.getElementById("lista_cesta");//la lista de elementos que podemos eliminar

// evento a lanzar cuando cliceamos el boton para agregar un elemento a la cesta
document.querySelector("#ejer2 input[type='button']").addEventListener("click", () => {
    let item = input_2.value; // el valor / nombre que elejimos
    //si no tenemos un nombre o un elemento en la cesta lo guardamos en dicha cesta
    if (item !== "" && !cesta.includes(item)) cesta.push(item);

    //creamos tanto una lista y opciones
    let itemList = document.createElement("li");
    let option_delte = document.createElement("option");
    // hacemos que para cada elemento de la cesta
    cesta.forEach((e) => {
      // console.log(e);
      itemList.textContent = e;// le ponemos el nombre al elemento de la lista
      salida_2.appendChild(itemList);// agregamos el elemento de la lista a DOM

      option_delte.textContent = e;// ponemos el nombre de elemento en las opciones de seleccion 
      option_delte.value = e; // le ponemos el valor que tomara dicha opcion
      lista_delete.appendChild(option_delte);// agregamos la opcion al select 
    });
  });

// agregamos un evento cuando haga click en el boton de eliminar
document.querySelector("#ejer3 input[type='button']").addEventListener("click", () => {
  // sacamos los elementos de la de la lista qe vemos en el HTML  
  let cesta = document.querySelectorAll("#cesta li");
  // buscamos las opciones que tiene el select para eliminar
  let lista_cesta = document.querySelectorAll("#lista_cesta option");
  //sacamos el valor que que seleciona el usuario del select
  let item_delete = document.getElementById("lista_cesta").value;
  // console.log(cesta);
  // console.log(lista_cesta);
  // console.log(item_delete);
    
  //en un bucle recorremos por la longitud de la lista
  for (let i =0; i < cesta.length; i++) {
    //si el contenido de la cesta es igual al elemento que queremos borrar lo borramos
    // y los mismo con los elementos de la lista a eliminar
    (cesta[i].textContent === item_delete)? cesta[i].remove() : null;
    (lista_cesta[i].value === item_delete)? lista_cesta[i].remove() : null;
  }
});
