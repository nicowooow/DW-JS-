import express from "express";
import cors from 'cors'
import { infoRandom ,registrarUsuario} from "./controller/carta.controller.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/info-random", infoRandom);
app.get("/naipes", registrarUsuario);
export default app;
