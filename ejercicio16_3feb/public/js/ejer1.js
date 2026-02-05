let img = document.getElementById("salida-1");

fetch("https://dog.ceo/api/breeds/image/random")
  .then((result) => result.json())
  .then((data) => {
    // console.log(data);

    img.src = data.message;
  });

document.querySelector(".ejer2 .buscar").addEventListener("click", () => {
  let ip = document.getElementById("ip").value;
  fetch(`http://ipwho.is/${ip}`)
    .then((result) => result.json())
    .then((data) => {
      // console.log(data);
      document.getElementById("salida-2").innerHTML = `
      <b>flag: <img src=${data.flag.img} alt=${data.flag.emoji_unicode} width='300'><br>
      <b>country:</b>${data.country}<br>
      <b>city:</b>${data.city}<br>
      `;
    })
    .catch((error) => console.log(error));
});

fetch("http://127.2.2.7:3000/suma/5/7")
  .then((response) => response.json()) // Convertir la respuesta a JSON
  .then((data) => {
    console.log(data);
    return fetch(`http://127.2.2.7:3000/producto/${data.result}/3`).then(
      (res) => res.json(),
    );
  })
  .then((data) => {
    console.log(data);
    return fetch(`http://127.2.2.7:3000/resta/${data.result}/1`).then((res) =>
      res.json(),
    );
  })
  .then((data) => {
    console.log(data);
    return fetch(`http://127.2.2.7:3000/cociente/${data.result}/2`).then(
      (res) => res.json(),
    );
  })
  .then((data) => {
    console.log(data);
    document.getElementById("salida-3").innerText =
      `El resultado es ${data.result}`;
  })
  .catch((error) => {
    console.error("Error en la cadena de fetch:", error);
  });
