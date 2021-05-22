const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const paquetes = sequelize.define(
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
		timestamps: false,
	}
);
module.exports = paquetes;
