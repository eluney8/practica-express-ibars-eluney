import { Router } from "express";
import { obtenerTodosLosPersonajes,
         obtenerUnPersonajePorId 
 } from "../controllers/personajes.controllers.js";

export const personajeRouter = Router();

personajeRouter.get("/characters", obtenerTodosLosPersonajes);
personajeRouter.get("/characters/:id", obtenerUnPersonajePorId);