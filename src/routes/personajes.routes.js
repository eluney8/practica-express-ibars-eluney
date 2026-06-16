import { Router } from "express";
import { obtenerTodosLosPersonajes,
         obtenerUnPersonajePorId,
         crearUnPersonaje
 } from "../controllers/personajes.controllers.js";

export const personajeRouter = Router();

personajeRouter.get("/characters", obtenerTodosLosPersonajes);
personajeRouter.get("/characters/:id", obtenerUnPersonajePorId);
personajeRouter.post("/characters", crearUnPersonaje);
