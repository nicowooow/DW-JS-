// nos pide visionar las fechas entre el 31 de febrero al 32 de marzo xD
// Formas de crear una fecha:
// new Date(año, mes, día)
// new Date(fecha en string)
// new Date(tiempo en milisegundos desde 1970)
// new Date(año, mes, día, hora, minuto, segundo, ms)

let anio = 2025; // los años van desde 1900 hasta 2099
// el mes empieza en 0 (enero) hasta 11 (diciembre)
// el día empieza en 1 hasta 31 dependiendo del mes
// las horas del 0 al 23, minutos y segundos del 0 al 59, ms del 0 al 999

let fechainicio = new Date(anio, 1, 31); // 31 de febrero “no existe”, se corrige automáticamente al 3 de marzo
let fechafin = new Date(anio, 2, 32);    // “32 de marzo” → 1 de abril automáticamente
let resultado4 = document.getElementById("ejer4");

// Mostrar todas las fechas desde fechainicio hasta fechafin
while (fechainicio <= fechafin) {
    resultado4.innerHTML += `
        <p>Fecha: ${fechainicio.toLocaleDateString('es-ES', { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        })}</p>`;
    fechainicio.setDate(fechainicio.getDate() + 1);
}

// Punto b: mostrar milisegundos desde el inicio del tiempo Unix (1970)
resultado4.innerHTML += `<br>Los milisegundos desde el inicio (1970) son: ${Date.now()}`;

// Mostrar diferencia en milisegundos entre fechas con ajuste de zona horaria
let diferenciaMS = fechafin - (fechafin.getTimezoneOffset() * 60000);
resultado4.innerHTML += `<br>Las fechas restadas son: ${diferenciaMS} ms.`;

// Cálculo del tiempo restante hasta fin de año
let fechaFinAnio = new Date(anio, 11, 31, 23, 59, 59, 999);
let fechaRestante = fechaFinAnio - Date.now();

let dias = Math.floor(fechaRestante / (1000 * 60 * 60 * 24));
let horas = Math.floor((fechaRestante / (1000 * 60 * 60)) % 24);
let minutos = Math.floor((fechaRestante / (1000 * 60)) % 60);
resultado4.innerHTML += `<br>Quedan ${dias} días, ${horas} horas y ${minutos} minutos para fin de año.`;

// Cálculo de edad en distintas unidades
let fechaActual = new Date();
let fechaNacimiento = new Date(2006, 3, 9); // Abril (mes 3)
let edadMS = fechaActual - fechaNacimiento;

let edadAnios = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
if (
    fechaActual.getMonth() < fechaNacimiento.getMonth() ||
    (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())
) edadAnios--;

let edadDias = Math.floor(edadMS / (1000 * 60 * 60 * 24));
let edadHoras = Math.floor(edadMS / (1000 * 60 * 60)) % 24;

resultado4.innerHTML += `
<br>Mi edad en milisegundos es: ${edadMS}.
<br>Equivale aproximadamente a ${edadAnios} años o ${edadDias} días.
<br>La hora actual es: ${fechaActual.toLocaleTimeString('es-ES')}.
`;
