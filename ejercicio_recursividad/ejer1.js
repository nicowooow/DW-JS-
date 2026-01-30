let salida1 = document.getElementById("salida_ejer1");
function invertir(texto) {
  if (texto === "" || texto.length === 1) {
    return texto;
  }
  return texto[texto.length - 1] + invertir(texto.slice(0, -1));
}
document.getElementById("btn_ejer1").addEventListener("click", () => {
  let texto = document.getElementById("ejer1").value;
  let texto_invertido = invertir(texto);

  salida1.textContent = texto_invertido;
});
