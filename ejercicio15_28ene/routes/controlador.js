import { routeQuery, routeRest } from "../services/paths.js";


export const controlador = (req, res) => {
  let url = req.url;
  console.log(" URL ==>  ", url);
  let query = url.split("?");
  // let result = "";// console.log("query ==>  ", query);// console.log(query[0].split("/")[1]);

  switch (query[0].split("/")[1]) {
    case "proveedores":
      console.log("/proveedores");
      if (query.length != 1) {res = routeQuery(query);}
      else {res = routeRest(url);}
      // console.log("res P ==> ", res);
      break;
    case "clientes":
      console.log("/clientes");
      if (query.length != 1) {res = routeQuery(query);}
      else {res = routeRest(url);}
      // console.log("res C ==> ", res);
      break;
    case "sumar":
      console.log("/sumar");
      break;
  }

  return res;
};
