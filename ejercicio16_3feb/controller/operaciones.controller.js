export const Operaciones = (req, res) => {
  let { operacion, x, y } = req.params;

  let result = "no se encontro dicha operacion";

  if (operacion === "suma") result = suma(x, y);
  if (operacion === "resta") result = resta(x, y);
  if (operacion === "producto") result = producto(x, y);
  if (operacion === "cociente") result = cociente(x, y);
  res.json({ operacion, x, y, result });
};

export const postForm = (req, res) => {
  try {
    let { x, y, operacion } = req.body;

    let operaciones = { suma, resta, producto, cociente };

    let result = operaciones[operacion](x, y);
    res.json({ operacion, x, y, result });
  } catch (error) {
    console.log(error);
  }
};

const suma = (x, y) => {
  return Number(x) + Number(y);
};
const resta = (x, y) => {
  return Number(x) - Number(y);
};
const producto = (x, y) => {
  return Number(x) * Number(y);
};
const cociente = (x, y) => {
  return Number(x) / Number(y);
};
