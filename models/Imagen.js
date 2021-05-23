const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");
const Paquete = require("./Compra");

const Imagen = sequelize.define(
	"imagen",
	{
		url: {
			type: DataTypes.STRING,
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
		tablename: "imagen_paquete",
		timestamps: false,
	}
);

module.exports = Imagen;
