const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const Compra = sequelize.define(
	"compra",
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
		tablename: "compra",
		timestamps: false,
	}
);
module.exports = Compra;
