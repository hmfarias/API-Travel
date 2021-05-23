const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");
const Paquete = require("./Paquete");
const Paquete_Compra = require("./Paquete_Compra");
const Usuario = require("./Usuario");

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
				model: Usuario,
				key: "id",
			},
		},
	},
	{
		timestamps: false,
		tablename: "compra",
	}
);

Compra.belongsToMany(Paquete, {
	through: Paquete_Compra,
});

module.exports = Compra;
