import { personajes } from "../data/personajes.js";

export const obtenerTodosLosPersonajes = (req, res) => {
    res.json(personajes);
};

