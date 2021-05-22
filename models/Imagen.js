const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const Imagen = sequelize.define(
    "imagen",
    {
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        paquete_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: paquetes,
                key: "id",
            },
        },
    },
    {
        tablename : 'imagen_paquete',
        timestamps: false,
    }
);

module.exports = Imagen;