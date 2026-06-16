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
      message: `Personaje con el id #${idPersonaje} no encontrado`,
    });
  }

  res.json(personajeEncontrado);
};

export const crearUnPersonaje = (req, res) => {
  const { nombre, imagen } = req.body;

  if (!nombre || nombre === "" || !imagen || imagen === "") {
    return res.status(400).json({
      message:
        "Los campos nombre e imagen son obligatorios y no pueden estar vacios",
    });
  }
  const nuevoPersonaje = {
    id: Date.now(),
    nombre,
    imagen,
  };

  personajes.push(nuevoPersonaje);

  res.status(201).json({
    message: "Personaje creado correctamente",
    nuevoPersonaje,
  });
};
