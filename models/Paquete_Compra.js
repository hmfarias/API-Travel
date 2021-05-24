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
		tablename: "paquete_compra",
		timestamps: false,
		freezeTableName: true,
	}
);
module.exports = Paquete_Compra;
