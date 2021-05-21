const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const bandas = sequelize.define(
	"bandas",
	{
		nombre: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		integrantes: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		fecha_inicio: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		fecha_separacion: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		pais: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);
module.exports = bandas;
