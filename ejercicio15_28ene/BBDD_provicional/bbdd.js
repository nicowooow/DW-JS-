/* ====> Base de Datos <===== */
// aca tenemos dos formas de meter datos en el map -> igual que el hashmap de Java
// ingresando los datos con
// set.(valores)
// o con  
// [datos] dentro del constructor  
export const clientes = new Map()
clientes.set(1, { dni: 1, nombre: "Ana", apellido: "Jiménez" })
    .set(4, { dni: 4, nombre: "Carlos", apellido: "Ruiz" })
    .set(6, { dni: 6, nombre: "Isabel", apellido: "López" })
    .set(8, { dni: 8, nombre: "Ana", apellido: "Gómez" })
    .set(9, { dni: 9, nombre: "Isabel", apellido: "Álvarez" })
    .set(10, { dni: 10, nombre: "David", apellido: "Ramírez" })
    .set(12, { dni: 12, nombre: "José", apellido: "Ruiz" })
    .set(14, { dni: 14, nombre: "Ramón", apellido: "García" })
    .set(15, { dni: 15, nombre: "Isidoro", apellido: "Hernández" })
    .set(16, { dni: 16, nombre: "Verónica", apellido: "Hermida" })
    .set(18, { dni: 18, nombre: "Pedro", apellido: "Hermida" })
    .set(20, { dni: 20, nombre: "David", apellido: "Sánchez" })
    .set(21, { dni: 21, nombre: "Elena", apellido: "Álvarez" });

export const proveedores = new Map([
    [2, { dni: 2, nombre: "Elena", apellido: "Ruiz" }],
    [3, { dni: 3, nombre: "Carlos", apellido: "Sánchez" }],
    [5, { dni: 5, nombre: "Carlos", apellido: "Gómez" }],
    [7, { dni: 7, nombre: "Marta", apellido: "Sánchez" }],
]);
/* =================================================== */