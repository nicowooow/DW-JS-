let resultado5 = document.getElementById("ejer5");

// a. Template string
resultado5.innerHTML += `<h3>a) Template strings</h3>`;
resultado5.innerHTML += `
<p>Los [template strings] (entre acentos graves \`) permiten 
incluir variables fácilmente y escribir texto multilínea sin concatenar.<br>
Ejemplo: \`Hola, ${"Pedro"}\` devuelve: Hola, Pedro.</p>
`;

// b. 5º carácter de una cadena
let texto = "JavaScript";
resultado5.innerHTML += `<h3>b) 5º carácter</h3>`;
resultado5.innerHTML += `<p>Cadena: "${texto}"<br>
El 5º carácter (posición 4 porque empieza en 0) es: '${texto.charAt(4)}'</p>`;

// c. indexOf()
resultado5.innerHTML += `<h3>c) indexOf()</h3>`;
resultado5.innerHTML += `<p>Devuelve la posición donde empieza una palabra o letra dentro del texto.<br>
Ejemplo: "${texto}".indexOf("S") = ${texto.indexOf("S")}</p>`;

// d. longitud
resultado5.innerHTML += `<h3>d) longitud del string</h3>`;
resultado5.innerHTML += `<p>La variable miembro <b>length</b> indica el número de caracteres.<br>
"${texto}".length = ${texto.length}</p>`;

// e. concatenación
resultado5.innerHTML += `<h3>e) concatenar strings</h3>`;
resultado5.innerHTML += `<p>El operador '+' une cadenas. Ejemplo: "Hola" + " Mundo" = "Hola Mundo"</p>`;

// f. comparación entre cadenas
resultado5.innerHTML += `<h3>f) comparación de cadenas</h3>`;
let s1 = "gato";
let s2 = "Gato";
resultado5.innerHTML += `<p>
Comparando "${s1}" y "${s2}" con (s1 > s2): ${s1 > s2}<br>
El resultado es <b>true</b> porque las letras minúsculas tienen un valor mayor en Unicode.<br>
Por tanto, "gato" es mayor que "Gato".
</p>`;

// g. usar slice() para extraer palabra
resultado5.innerHTML += `<h3>g) método slice()</h3>`;
let ciudad = "San Lorenzo de El Escorial";
let ultimaPalabra = ciudad.slice(ciudad.lastIndexOf(" ") + 1);
resultado5.innerHTML += `<p>De la frase "${ciudad}" la última palabra es: "${ultimaPalabra}"</p>`;

// h. Algunos métodos útiles de String
resultado5.innerHTML += `<h3>h) otros métodos de String</h3>`;
let frase = "  Hola mundo JS  ";
resultado5.innerHTML += `
<ul>
  <li>includes("JS") → ${frase.includes("JS")}</li>
  <li>startsWith("Hola") → ${frase.startsWith("Hola")}</li>
  <li>endsWith("JS") → ${frase.endsWith("JS ")}</li>
  <li>toUpperCase() → ${frase.toUpperCase()}</li>
  <li>toLowerCase() → ${frase.toLowerCase()}</li>
  <li>trim() → "${frase.trim()}" (quita espacios al inicio y final)</li>
</ul>
`;

// i. Pedir una frase al usuario y mostrar primera y última palabra
resultado5.innerHTML += `<h3>i) primera y última palabra</h3>`;
let fraseUsuario = prompt("Escribe una frase:");
if (fraseUsuario) {
    let palabras = fraseUsuario.trim().split(" ");
    let primera = palabras[0];
    let ultima = palabras[palabras.length - 1];
    resultado5.innerHTML += `<p>La primera palabra es "${primera}" y la última es "${ultima}".</p>`;
} else {
    resultado5.innerHTML += `<p>No escribiste ninguna frase.</p>`;
}
