let divMouseEnter = document.querySelector(".evento_onmouseenter");
        let x = 10;
        let y = 10;
        let salida2 = "";

        salida2 += "<table class='tabla1' style='border:1px solid black; border-collapse: collapse; height:30rem; width:40rem;'>";
        for (let i = 0; i < y; i++) {
            salida2 += "<tr>";
            for (let j = 0; j < x; j++) {
                salida2 += "<td style=' border:1px solid black;'></td>";
            }
            salida2 += "</tr>";
        }
        salida2 += "</table>";

        divMouseEnter.innerHTML = salida2;

        document.querySelectorAll(".tabla1 td").forEach(td_tabla1 => {
            td_tabla1.addEventListener("mouseover", () => {
                td_tabla1.style.backgroundColor = RandomColor();
            });
        });


