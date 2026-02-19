function cartas(mazo) {
	for (let i = 0; i < 6; i++) {
		fetch("http://localhost:3000/info-random")
			.then((result) => {
				console.log(result);
				return result.json();
			})
			.then((data) => {
        console.log(data);
        
				let img = document.createElement("IMG");
				img.src = `/naipes/${data.palo}-${data.numero}.png`;
				document.getElementById(`mazo${mazo}`).appendChild(img);
			});
	}
}
function cartaJuanCarlos(mazo) {
	for (let i = 0; i < 6; i++) {
		fetch("http://10.12.43.212:3000/info-random")
			.then((result) => result.json())
			.then((data) => {
				let img = document.createElement("IMG");
				img.src = `/naipes/${data.palo}-${data.numero}.png`;
				document.getElementById(`mazo${mazo}`).appendChild(img);
			});
	}
}

document.getElementById("traer-carta1").addEventListener("click", () => {
	document.getElementById("mazo1").textContent = "";
	cartas(1);
});
document.getElementById("traer-carta2").addEventListener("click", () => {
	document.getElementById("mazo2").textContent = "";
	cartas(2);
});
