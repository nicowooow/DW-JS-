export const crearClave = () => {
  try {
    let abecedario = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return `${abecedario[Math.random() * 2 + 1]}${numeros[Math.random() * 2 + 1]}`;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
