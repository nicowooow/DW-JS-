import http from "node:http"; // importamos el servidor comun de que viene en node
import { ip, puerto } from "./config.js";
import { controlador } from "./routes/controlador.js";

const server = http.createServer((req, res) => {
  try {
    let result = controlador(req, res);

    console.log(result);
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
