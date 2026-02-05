import express from "express";
import cors from "cors";
import { Operaciones } from "./controller/operaciones.controller.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/bienvenido", (req, res) => {
  res.json({ message: "bienvenido" });
});

app.use("/:operacion/:x/:y", Operaciones);

export default app;
