import { Router } from "express";
import { obtenerTodosLosPersonajes } from "../controllers/personajes.controllers.js";

export const personajeRouter = Router();

personajeRouter.get("/characters", obtenerTodosLosPersonajes);