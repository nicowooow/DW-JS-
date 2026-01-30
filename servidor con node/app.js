import http from "node:http";
const puerto = 8088;
let visitas = 0;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.write("<b>Hola Mundo</b>");

  // con esto decimos que no cuente los favicos.ico
  if (!request.url.indexOf("/favicon.ico")) visitas++;
  
  response.write(`<p>visitas totales ${visitas} </p>`);
  response.end();
  console.log(
    `${request.socket.remoteAddress} - ${request.method} ${request.url}`,
  );
});

server.listen(puerto, () => {
  console.log(`Servidor escuchando el puerto ${puerto}`);
});
