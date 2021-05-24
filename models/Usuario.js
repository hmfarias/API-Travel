const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");
const Compra = require("./Compra");

const Usuario = sequelize.define(
	"usuario",
	{
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		es_admin: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tablename: "usuario",
		timestamps: false,
		freezeTableName: true,
	}
);

// Usuario.hasMany(Compra, { foreignKey: 'usuario_id' });

module.exports = Usuario;
