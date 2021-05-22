const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const Fecha = sequelize.define(
    "fecha",
    {
        fecha: {
            type: DataTypes.DATE,
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
        timestamps: false,
        tablename: 'fecha_paquete'
    }
);

module.exports = Fecha;
