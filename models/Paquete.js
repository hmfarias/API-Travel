const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");
const Compra = require("./Compra");
const Fecha  = require('./Fecha');

const Paquete = sequelize.define(
	"paquete",
	{
		precio: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		destino: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		comidas: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		alojamiento: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		duracion: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		descripcion: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		pasajeros: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		timestamps: false,
		tablename: 'paquete'
	}
);
Paquete.hasMany(Compra, {
	foreignKey: 'paquete_id'
});
Paquete.hasMany(Fecha, {
	foreignKey: 'paquete_id'
});
Paquete.hasMany(Imagen,{
	foreignKey:'paquete_id'
});

module.exports = Paquete;
