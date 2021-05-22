const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const usuarios = sequelize.define(
    "usuarios",
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
            type: DataTypes.TINYINT,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);
module.exports = usuarios;
