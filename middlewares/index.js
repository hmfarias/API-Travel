// VALIDAR BODY PARA UNA COMPRA al hacer un POST
function validateCompraBody(req, res, next) {
	const msgError = [];
	!req.body.cantidad && msgError.push("La Cantidad es obligatoria");
	!req.body.fecha && msgError.push("La fecha es obligatoria");
	!req.body.usuario_id && msgError.push("El ID de usuario es obligatorio");
	!req.body.fecha_viaje && msgError.push("La fecha del viaje es obligatoria");

	msgError.length > 0
		? res.status(400).json({ error: msgError.join(",") })
		: next();
}

//const { Banda } = require("../models/Bandas");

// function validateAdmin(req, res, next) {
// 	if (!req.user.admin) {
// 		res.status(401).json({
// 			error: "el usuario No es ADMINISTRADOR",
// 		});
// 	} else {
// 		next();
// 	}
// }

//VALIDAR EXISTENCIA DE LA BANDA
// async function validateBandExists(req, res, next) {
// 	const bandPost = req.body.nombre;
// 	try {
// 		const bandExists = await db.query(
// 			"SELECT * FROM bandas WHERE nombre = :nombre",
// 			{
// 				type: db.QueryTypes.SELECT,
// 				replacements: { nombre: bandPost },
// 			}
// 		);
// 		if (!bandExists) {
// 			next();
// 		} else {
// 			res.status(409).json({ error: `Band: ${bandPost} already exists` });
// 		}
// 	} catch (error) {
// 		console.log("Error " + error);
// 	}
// }

//VALIDAR BODY PARA BANDA al hacer un POST
// function validateBandBody(req, res, next) {
// 	const msgError = [];
// 	!req.body.nombre && msgError.push("El nombre de la banda es obligatorio");
// 	!req.body.integrantes &&
// 		msgError.push("El número de integrantes es obligatorio");
// 	!req.body.fecha_inicio && msgError.push("La fecha de inicio es obligatoria");
// 	!req.body.pais && msgError.push("El país de la banda es obligatorio");
//
// 	msgError.length > 0
// 		? res.status(400).json({ error: msgError.join(",") })
// 		: next();
// }
//
module.exports = {
	validateCompraBody,
};

// module.exports = {
// 	validateAdmin,
// 	validateBandExists,
// 	validateBandBody,
// };
