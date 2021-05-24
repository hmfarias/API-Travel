const express = require("express");
const app = express();

const {
  Paquete,
  PaqueteCompra,
  Fecha,
  Usuario,
  Compra,
  Imagen,
} = require("./models");

app.get("/prueba", async (req, res) => {
  //   res.json(
  //     await Usuario.findAll({
  //       include: [{ model: Compra, include: [{ model: Paquete }] }],
  //     })
  // );
  //   const compras = await Compra.findAll({
  //     include: [{ model: Paquete }],
  //   });

  const paquetesCompras = await Paquete.findAll({
    include: [{ model: Compra }],
  });

  res.json(paquetesCompras);
});

app.listen(3000);
