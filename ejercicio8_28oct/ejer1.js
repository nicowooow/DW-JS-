//let div1 = document.getElementById("ejer1");
let btn1 = document.getElementById("set_alarm");
let time1 = document.getElementById("time_ejer1");
let salida1 = document.getElementById("salida1");
btn1.addEventListener('click', () => {
    if(time1.value != "") {

        let time_alarm = (time1.value).split(/:|\./); //":"||"." <- esta mal, el que esta me lo diop la AI, metemos esto dentro de un array para tener los datos
        const ms_start = new Date().getTime() // obtenemos los milisegundos actuales
        const ms_alarm = new Date().setHours(time_alarm[0], time_alarm[1], time_alarm[2], time_alarm[3]); // establecemos la hora de la alarma en milisegundos
        // console.log(typeof (time_alarm), " ->", time_alarm);
        // console.log(typeof (ms_start), " inicio ->", ms_start);
        // console.log(typeof (ms_alarm), " termina ->", ms_alarm);
        // console.log(typeof (new Date()), " ->", new Date());
        // para saber el tipo de variable que es poner typeof
        const diff = ms_alarm - ms_start; // obtenemos la diferencia entre ambas horas en milisegundos
        //setInterval
        btn1.disabled = true;
        salida1.innerText = `Alarma sonando a las ${time1.value}`;
        setTimeout(()=>{
            alert("RING RING RING!!! La alarma está sonando");
            salida1.innerText = "";
            btn1.disabled = false;
        },diff)
        //clearInterval();

    }else{
        alert("Debes introducir una hora válida");
    }
})