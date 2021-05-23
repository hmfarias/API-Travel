const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");
const Paquete = require("./Paquete");
const Compra = require("./Compra");

const Paquete_Compra = sequelize.define(
	"paquete_compra",
	{
		compra_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Compra,
				key: "id",
			},
		},
		paquete_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Paquete,
				key: "id",
			},
		},
	},
	{
		timestamps: false,
		tablename: "paquete_compra",
	}
);
module.exports = Paquete_Compra;
