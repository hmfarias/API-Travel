const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");
const Paquete = require("./Paquete");

const Imagen = sequelize.define(
	"imagen_paquete",
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
		tablename: 'imagen_paquete',
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = Imagen;
