import express from "express";

const app = express();

app.use(express.json());


app.listen(3002, () => {
  console.log("Servidor corriendo en el puerto 3002");
});
