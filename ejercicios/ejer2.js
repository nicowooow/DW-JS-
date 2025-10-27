let resultado2 = document.getElementById("ejer2");
let fact = confirm("¿Quieres hacer un cálculo de potencia?");
let numero = prompt("Introduce un número:");
let num = parseInt(numero);
let resultadoPotencia = BigInt(1);

if (fact) {
  for (let i = 1; i <= num; i++) resultadoPotencia *= BigInt(i);
  resultado2.textContent = `El factorial de ${num} es ${resultadoPotencia}`;
} else {
  let potencia = prompt("Introduce la potencia:");
  let pot = parseInt(potencia);
  resultadoPotencia = BigInt(Math.pow(num, pot));
  resultado2.textContent = `${num} elevado a ${pot} = ${resultadoPotencia}`;
}
