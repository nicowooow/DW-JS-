import Cliente from "../services/cliente.js";
import Proveedor from "../services/proveedor.js";

export const routeRest = (url) => {
  let result = "";
  let campos = url.match(/[^/].*/);
  // console.log(url);
  //   console.log(campos);
  let secciones = campos[0].split("/");
  //   console.log(secciones);

  let servicio = secciones[0];
  let dni = secciones[1];
  // console.log("servicio ==> ", servicio, " || dni ==> ", dni);

  switch (servicio) {
    // como los dos servicos nos daran el mismo resultado lo ponemos de forma consecutiva
    case "clientes":
    case "proveedores":
      if (servicio == "clientes") {
        result = Cliente.getCliente(dni);
      } else if (servicio == "proveedores") {
        result = Proveedor.getProveedor(dni);
      }
      // console.log("resultado ==> ", result);

      return JSON.stringify(result);

    default:
      return JSON.stringify({ error: "servicio no encontrado" });
  }

  // return result;
};

export const routeQuery = (query) => {
  let result = "";
  // console.log(query);
  let secciones = query[0].split("/");
  // console.log("secciones ==> ", secciones);
  let servicio = secciones[1];
  // console.log("servicios ==> ", servicio);
  let campos = query[1].split("&");
  // console.log("campos ==> ", campos);
  let queryName = query[1].match(/^(.{1,3})=(\d+)$/);
  // console.log("queryName ==> ", queryName);

  if (queryName[1] !== "dni") {
    return JSON.stringify({ error: "seccion no encontradaz" });
  }

  switch (servicio) {
    // como los dos servicos nos daran el mismo resultado lo ponemos de forma consecutiva
    case "clientes":
    case "proveedores":
      if (servicio == "clientes") {
        result = Cliente.getCliente(queryName[2]);
      } else if (servicio == "proveedores") {
        result = Proveedor.getProveedor(queryName[2]);
      }
      // console.log("resultado ==> ", result);

      return JSON.stringify(result);

    default:
      return JSON.stringify({ error: "servicio no encontrado" });
  }
  // return JSON.stringify({ campos });
};