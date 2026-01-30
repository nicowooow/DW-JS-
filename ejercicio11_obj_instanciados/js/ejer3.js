document.getElementById("ejer1_btn").addEventListener("click", () => {
    let dados = document.querySelectorAll("#tapete p");
    dados.forEach((e) => {
        e.addEventListener("click", () => {
            console.log(e);
        });
    });
    dados = null;
});
