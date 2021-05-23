const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");
const Paquete = require("./Paquete");
const Usuario = require("./Usuario");

const Compra = sequelize.define(
	'compra',
	{
		cantidad: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
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
		usuario_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Usuario,
				key: "id",
			},
		},
		fecha_viaje: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		tablename: 'compra',
		freezeTableName: true,
		timestamps: false,
	},
);

module.exports = Compra;
