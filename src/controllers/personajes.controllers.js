import { personajes } from "../data/personajes.js";

export const obtenerTodosLosPersonajes = (req, res) => {
    res.json(personajes);
};

export const obtenerUnPersonajePorId = (req, res) => {
    const idPersonaje = req.params.id; 
    const idNumerico = Number(idPersonaje); 

    if (isNaN(idNumerico)) {
        return res.status(400).json({ message: "El ID debe ser un numero valido" });
    }
    const personajeEncontrado = personajes.find((p) => p.id === idNumerico);

    if (!personajeEncontrado) {
        return res.status(404).json({ 
            message: `Personaje con el id #${idPersonaje} no encontrado` 
        });
    }

    res.json(personajeEncontrado);
};