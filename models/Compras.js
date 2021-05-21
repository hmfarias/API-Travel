const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const compras = sequelize.define(
	"compras",
	{
		cantidad: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		fecha: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		fecha_viaje: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		usuario_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: usuarios,
				key: "id",
			},
		},
		paquete_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: paquetes,
				key: "id",
			},
		},
	},
	{
		timestamps: false,
	}
);
module.exports = compras;
