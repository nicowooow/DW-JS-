import http from "node:http"; // importamos el servidor comun de que viene en node
import { ip, puerto } from "./config.js";
import { controladorRest, controladorQuery } from "./routes/controlador.js";

const server = http.createServer((req, res) => {
  try {
    let result = "";
    let url = req.url;
    // console.log("query ==>  ", url.split("?dni="));
    let query = url.split("?dni=").splice(0);
    console.log("query ==>  ",query);
    
    if (query) {
        result = controladorRest(query);
    } else {
        result = controladorRest(url);
    }
    
    // console.log(url, result);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(result);
} catch (error) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>Servicio no disponible</h1>");
    console.log(error);
  } finally {
    res.end();
  }
});

server.listen(puerto, ip, () => {
  console.log(`el servidor esta siendo alojado en http://${ip}:${puerto}`);
});
