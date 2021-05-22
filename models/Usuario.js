const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const Usuario = sequelize.define(
    "usuario",
    {
        mail: {
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
    }
);
module.exports = Usuario;
