function incrementar(numero) {
    return numero + 1;
}

let n=5;
incrementar(n);
console.log(n); // Imprime 5, no 6
// El valor de n no cambia porque los tipos primitivos se pasan por valor
let obj = { valor: 5 };
function incrementarObjeto(o) {
    o.valor++;
}
incrementarObjeto(obj);
console.log(obj.valor); // Imprime 6, el objeto sí cambia
// El objeto cambia porque los objetos se pasan por referencia

let persona = {
    nombre: "Juan",
    edad : 25
}

function cumplirAños(persona) {
    persona.edad++;
}
cumplirAños(persona);
console.log(persona.edad); // Imprime 31, la edad de la persona ha cambiado
console.log(persona); // Imprime { nombre: 'Juan', edad: 26 }