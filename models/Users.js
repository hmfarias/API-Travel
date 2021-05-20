const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const usuarios = sequelize.define(
	"usuarios",
	{
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		correo: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		telefono: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		direccion: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		pasword: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		admin: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);
module.exports = usuarios;
