const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");
const Paquete = require("./Paquete");

const Fecha = sequelize.define(
	"fecha_paquete",
	{
		fecha: {
			type: DataTypes.DATE,
			allowNull: false,
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
		tablename: "fecha_paquete",
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = Fecha;
