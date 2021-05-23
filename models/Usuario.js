const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");
const Compra = require("./Compra");

const Usuario = sequelize.define(
	"usuario",
	{
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		es_admin: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		timestamps: false,
		tablename: "usuario",
	}
);

Usuario.hasMany(Compra, {
	foreignkey: "usuario_id",
});

module.exports = Usuario;
