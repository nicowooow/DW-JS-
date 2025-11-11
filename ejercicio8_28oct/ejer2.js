document.addEventListener('DOMContentLoaded', () => {// para asegurarnos que el DOM esta cargado
    let div2 = document.getElementById("ejer2");
    let carUp = document.getElementById("car_up");
    let carDown = document.getElementById("car_down");
    let intervalUp = null// almacenara el setInterval del coche de arriba
    let intervalDown = null// almacenara el setInterval del coche de abajo

    function moveCar(car, color, interval, stop_y, pos_car) {
        let position = parseInt(car.style.left)// obtenemos la posicion actual del coche
        let car_length = parseInt(car.width);// obtenemos la longitud del coche
        let screen_width = parseInt(window.innerWidth);// obtenemos la anchura de la pantalla
        if (color == 'rgb(47, 255, 50)' && !(pos_car)) {
            window[interval] = setInterval(() => {// asignamos el setInterval a la variable global correspondiente
                position += 5;
                car.style.left = position + 'px';
                if (position > screen_width) {// si el coche sale de la pantalla por la derecha, lo volvemos a poner a la izquierda
                    car.style.left = -car_length + 'px';
                    position = -car_length;
                }
            }, 1)
        } else if ( stop_y) {
            if (window[interval]) clearInterval(window[interval]);

            window[interval] = setInterval(() => {// asignamos el setInterval a la variable global correspondiente
                position += 3;
                car.style.left = position + 'px';
                if (position > screen_width) {// si el coche sale de la pantalla por la derecha, lo volvemos a poner a la izquierda
                    position = -car_length;
                    car.style.left = -car_length + 'px';
                }
                let pos_car = car.getBoundingClientRect().left;
                //console.log(pos_car, stop_y);
                if (pos_car == stop_y && color == 'rgb(255, 0, 0)') {
                    console.log('------------------------------------------');
                    clearInterval(window[interval]);
                    console.log(window[interval]);
                    
                    window[interval] = null;
                    
                }
                
            }, 1)

        } else {
            // si no es un coche que se pare en una posicion concreta, paramos el intervalo directamente
            if (window[interval]) clearInterval(window[interval]);
            window[interval] = null;


        }
        
    }

    //bucle general por cada boton que toquen 
    div2.querySelectorAll('input[type="button"]').forEach(e => {
        e.addEventListener('click', () => {
            (e.style.backgroundColor === 'rgb(255, 0, 0)') ? e.style.backgroundColor = 'rgb(47, 255, 50)' : e.style.backgroundColor = 'rgb(255, 0, 0)';

            let color_btn = e.style.backgroundColor;
            if (e.id === 'pause_up') {
                //console.log('up');Console.log( carUp.style.left);
                moveCar(carUp, color_btn, 'intervalUp');
            } else if (e.id === 'pause_down') {
                //console.log('down');
                moveCar(carDown, color_btn, 'intervalDown');
            } else {
                //console.log('both');
                moveCar(carUp, color_btn, 'intervalUp', Math.floor(e.getBoundingClientRect().left), 'posCarUp');
                moveCar(carDown, color_btn, 'intervalDown', Math.floor(e.getBoundingClientRect().left), 'posCarDownn');

            }
            //console.log(intervalDown,intervalUp);

        })

    });
})