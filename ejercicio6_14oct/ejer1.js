
        function RandomColor() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r},${g},${b})`;
        }


        document.querySelector(".evento_onclick").addEventListener("mouseover", (elemento) => { // click 
            if (elemento.target.tagName === "DIV" && elemento.target.parentElement.className === "evento_onclick") {
                // con la segunda condicion aseguramos que solo se aplique a los divs hijos y no al padre si es que su padre tiene dicho nombre de clase
                let color = RandomColor();
                console.log(color);
                elemento.target.style.backgroundColor = RandomColor();
            }
        });