const Compra = require("./Compra");
const Fecha = require("./Fecha");
const Imagen = require("./Imagen");
const Paquete_Compra = require("./Paquete_Compra");
const Paquete = require("./Paquete");
const Usuario = require("./Usuario");

Paquete.hasMany(Imagen, {
	foreignKey: "paquete_id",
});
Paquete.hasMany(Fecha, {
	foreignKey: "paquete_id",
});

Usuario.hasMany(Compra, { foreignKey: "usuario_id" });

Compra.belongsToMany(Paquete, { through: Paquete_Compra });

Paquete.belongsToMany(Compra, { through: Paquete_Compra });

module.exports = {
	Usuario,
	Paquete,
	Compra,
	PaqueteCompra: Paquete_Compra,
	Fecha,
	Imagen,
};
