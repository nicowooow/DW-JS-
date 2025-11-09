        let fechaa = document.getElementById("fecha1");
        fechaa.addEventListener("change", function () {
            const week_days = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const monts = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
            let fecha = new Date(fechaa.value);
            let day_fecha = fecha.getDate();
            let month_fecha = fecha.getMonth() + 1; //esto es porque empieza del 0 al 11
            document.getElementById("salida1").innerHTML = `el numero del dia es ${day_fecha} y el numero de mes es ${month_fecha}`;
            document.getElementById("salida1").innerHTML += `<br> El ${day_fecha} de ${monts[month_fecha]} del ${fecha.getFullYear()} es ${week_days[fecha.getDay()]} `
        })