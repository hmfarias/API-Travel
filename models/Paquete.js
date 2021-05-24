const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");
const Fecha = require("./Fecha");
const Imagen = require("./Imagen");
const Compra = require("./Compra");
// const Paquete_Compra = require("./Paquete_Compra");

const Paquete = sequelize.define(
  "paquete",
  {
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    destino: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comidas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alojamiento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pasajeros: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tablename: "paquete",
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Paquete;
