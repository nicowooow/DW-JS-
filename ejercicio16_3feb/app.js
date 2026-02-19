import express from "express";
import cors from "cors";
import { Operaciones,postForm } from "./controller/operaciones.controller.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/bienvenido", (req, res) => {
  res.json({ message: "bienvenido" });
});

app.use("/:operacion/:x/:y", Operaciones);
app.use("/post-form", postForm);

export default app;
