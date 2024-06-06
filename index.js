import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PORT } from "./config/config.js";

import cuestionariosExtRouter from "./routes/cuestionarioExt.js";
import cuestionariosRouter from "./routes/cuestionarios.js";
import preguntasRouter from "./routes/preguntas.js";
import usuariosRoutes from "./routes/usuarios.js";
import authRouter from "./routes/auth.js";
import usuariosEvaluacionesRouter from "./routes/usuariosEvaluaciones.js";
import pacientesRouter from "./routes/pacientes.js";

const app = express();
app.use(cors());

app.use(bodyParser.json()); 
app.use("/auth/",authRouter);
app.use(
  "/api/", 
  cuestionariosExtRouter,
  cuestionariosRouter,
  preguntasRouter,
  usuariosRoutes,
  usuariosEvaluacionesRouter,
  pacientesRouter
);

app.listen(PORT || 3001, () => {
  console.log(`Server is running on port ${PORT || 3001}`);
});

app.use((req, res) => {
  res.status(404).send("Not found");
});
