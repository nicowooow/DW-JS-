export const Operaciones = (req, res) => {
  let { operacion, x, y } = req.params;

  let result = "no se encontro dicha operacion";

  if (operacion === "suma") result = suma(x, y);
  if (operacion === "resta") result = resta(x, y);
  if (operacion === "producto") result = producto(x, y);
  if (operacion === "cociente") result = cociente(x, y);
  res.json({ operacion, x, y, result });
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
