import Cliente from "../services/cliente.js";
import Proveedor from "../services/proveedor.js";

export const controladorRest = (url) => {
  let result = "";
  let campos = url.match(/[^/].*/);
  console.log(url);
  //   console.log(campos);
  let secciones = campos[0].split("/");
  //   console.log(secciones);

  let servicio = secciones[0];
  let dni = secciones[1];
  console.log("servicio ==> ",servicio," || dni ==> ", dni);

  switch (servicio) {
    // como los dos servicos nos daran el mismo resultado lo ponemos de forma consecutiva
    case "clientes":
    case "proveedores":
      if (servicio == "clientes") {
        let cliente = new Cliente(dni);
        result = cliente.getCliente();
      } else if (servicio == "proveedores") {
        let proveedor = new Proveedor(dni);
        result = proveedor.getProveedor();
      }
      console.log("resultado ==> ",result);
      
      return JSON.stringify(result);


    default:
      return JSON.stringify({error:"servicio no encontrado"});

  }

  return result;
};


export const controladorQuery = (query) =>{
console.log(query);

}