let salida2 = document.getElementById("salida_ejer2");
function programa(texto, letra) {
console.log(texto,letra);

  if (texto.length === 0) { // si no tiene longitud retorna 0
    return 0;
  }
    let letra_act = texto[0]; // saca la primera letra
  let resto = texto.slice(1); // lo parte en el primer caracter y nos da los siguientes


  if (letra_act == letra) {
    return 1 + programa(resto, letra); // si es igual entra otra vez a la funcion y suma 1
  } else {
    return programa(resto, letra); // entra a la funcion sin hacer nada antes
  }
}
document.getElementById("btn_ejer2").addEventListener("click", () => {
  let texto = document.getElementById("ejer2_texto").value;
  let letra = document.getElementById("ejer2_letra").value;
  let cantidad = programa(texto, letra);
  salida2.textContent = cantidad;
});
