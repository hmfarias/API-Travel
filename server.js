//==========================================================================
//1. importar express y demas librerias
//==========================================================================
const express = require("express");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const {
	Paquete,
	PaqueteCompra,
	Fecha,
	Usuario,
	Compra,
	Imagen,
} = require("./models/Associations");
const db = require("./db/index");
const { Op } = require("sequelize");
const cors = require("cors"); // necesario para que en el front no nos aparezca error de cors

//==========================================================================
//2. crear la instacia de express
//==========================================================================
const app = express();

//==========================================================================
//3. agregar middlewares globales
//==========================================================================

const rateLimitPolicy = rateLimit({
	message: "intente de nuevo mas tarde",
	max: 10,
	windowMs: 5 * 60 * 1000, //minutos * 60 * 1000
});

//==========================================================================
// 3.1 crear middlewares propios de nuestra API
//==========================================================================
const {
	validateAdmin,
	validateCompraBody,
	validatePaqueteBody,
} = require("./middlewares/index.js");
//const { response } = require("express");

//==========================================================================
// usar las librerias
//==========================================================================
//mysql 1. proteger todos los endpoints menos el de login usando express-jwt como middleware global
// por nada en la vida expongan esta cadena NADAAAAA!!!!
const secretJWT = "poneralgosupercompicadoconnumerosycaracteres123+5";
app.use(
	expressJwt({
		secret: secretJWT,
		algorithms: ["HS256"],
	}).unless({ path: ["/login"] })
);

app.use(express.json()); // este middleware nos convierte el json del body en objeto de js
app.use(helmet());
app.use(compression());
app.use(cors()); // necesario para que en el front no nos aparezca error de cors

//==========================================================================
//4. ENDPOINTS
//==========================================================================

// Testeo de correcta conexión entre modelo y tablas :

// app.get("/paquetes", async (req, res) => {
// 	const paquete = await Paquete.findAll();
// 	res.status(200).json(paquete);
// });

//mysql 2. escribir el endpoint de login
//localhost:3000/login
app.post("/login", async (req, res) => {
	const emailPost = req.body.email;
	const passwordPost = req.body.password;
	const usuarioValidado = await Usuario.findOne({
		email: emailPost,
		password: passwordPost,
	});

	if (!usuarioValidado) {
		res.status(401).json({
			error: "usuario o contraseña inválida",
		});
	} else {
		//mysql 3. crear el token
		const token = jwt.sign(
			{
				email: usuarioValidado.email,
				es_admin: usuarioValidado.es_admin,
			},
			secretJWT,
			{ expiresIn: "60m" }
		);
		res.status(200).json({ token });
	}
});

//mysql 4. escribir endpoints el resto

//------------------------------------------------------------------------------//
//                                   USUARIOS                                   //
//------------------------------------------------------------------------------//
//GET - TRAER TODOS LOS USUARIOS
//localhost:3000/usuarios
app.get("/usuarios", validateAdmin, async (req, res) => {
	try {
		const usuarios = await Usuario.findAll({
			include: [
				{
					model: Compra,
					include: [
						{
							model: Paquete,
						},
					],
				},
			],
		});

		res.status(200).json(usuarios);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//GET - TRAER UN USUARIO POR ID
//localhost:3000/usuarios/idUsuario
app.get("/usuarios/:idUsuario", async (req, res) => {
	const idUsuario = req.params.idUsuario;
	try {
		const usuario = await Usuario.findByPk(idUsuario);
		res.status(200).json(usuario);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//POST - AGREGAR UN USUARIO
//localhost:3000/usuarios
app.post("/usuarios", validateAdmin, async (req, res) => {
	try {
		const usuario = await Usuario.create({
			password: req.body.password,
			email: req.body.email,
			es_admin: req.body.es_admin,
		});
		res.status(200).json(usuario);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});
//                                   FIN USUARIOS                               //
//------------------------------------------------------------------------------//

//------------------------------------------------------------------------------//
//                                   PAQUETES                                   //
//------------------------------------------------------------------------------//
//GET - TRAER TODOS LOS PAQUETES
//localhost:3000/paquetes
app.get("/paquetes", validateAdmin, async (req, res) => {
	try {
		const paquetes = await Paquete.findAll({
			include: [
				{
					model: Fecha,
				},
				{
					model: Imagen,
				},
			],
		});
		res.status(200).json(paquetes);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//GET - TRAER UN PAQUETE POR ID
//localhost:3000/paquetes/:idPaquete
app.get("/paquetes/:idPaquete", async (req, res) => {
	const idPaquete = req.params.idPaquete;
	try {
		const paquetes = await Paquete.findByPk(idPaquete, {
			include: [
				{
					model: Fecha,
				},
				{
					model: Imagen,
				},
			],
		});
		res.status(200).json(paquetes);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//POST - AGREGAR UN PAQUETE
//localhost:3000/paquetes
app.post("/paquetes", validatePaqueteBody, async (req, res) => {
	try {
		const paquete = await Paquete.create({
			precio: req.body.precio,
			destino: req.body.destino,
			comidas: req.body.comidas,
			alojamiento: req.body.alojamiento,
			duracion: req.body.duracion,
			descripcion: req.body.descripcion,
			pasajeros: req.body.pasajeros,
		});

		res.status(200).json(paquete);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//PUT - MODIFICAR UN PAQUETE POR ID
//localhost:3000/paquetes/idCompra
app.put(
	"/paquetes/:idPaquete",
	validateAdmin,
	validatePaqueteBody,
	async (req, res) => {
		const idPaquete = req.params.idPaquete;
		try {
			const paquete = await Paquete.update(
				{
					precio: req.body.precio,
					destino: req.body.destino,
					comidas: req.body.comidas,
					alojamiento: req.body.alojamiento,
					duracion: req.body.duracion,
					descripcion: req.body.descripcion,
					pasajeros: req.body.pasajeros,
				},
				{
					where: {
						id: {
							[Op.eq]: idPaquete,
						},
					},
				}
			);
			res.status(200).json(paquete);
		} catch (error) {
			res.status(500).json({ error: "Intente mas tarde... modifica paquete" });
		}
	}
);
//DELETE - ELIMINAR UNA COMPRA POR ID
//localhost:3000/compras/idCompra
app.delete("/paquetes/:idPaquete", async (req, res) => {
	const idPaquete = req.params.idPaquete;
	try {
		const paquete = await Paquete.destroy({
			where: {
				id: {
					[Op.eq]: idPaquete,
				},
			},
		});
		res.status(200).json(paquete);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//                                   FIN PAQUETES                               //
//------------------------------------------------------------------------------//

//------------------------------------------------------------------------------//
//                                   COMPRAS                                    //
//GET - TRAER TODAS LAS COMPRAS
//localhost:3000/compras
app.get("/compras", validateAdmin, async (req, res) => {
	try {
		const compras = await Compra.findAll();
		res.status(200).json(compras);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//GET - TRAER UNA COMPRA POR ID
//localhost:3000/compras/:idCompra
app.get("/compras/:idCompra", async (req, res) => {
	const idCompra = req.params.idCompra;
	try {
		const compras = await Compra.findByPk(idCompra);
		res.status(200).json(compras);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//POST - AGREGAR UNA COMPRA
//localhost:3000/compras
app.post("/compras", validateCompraBody, async (req, res) => {
	try {
		const compra = await Compra.create({
			cantidad: req.body.cantidad,
			fecha: req.body.fecha,
			usuario_id: req.body.usuario_id,
			fecha_viaje: req.body.usuario_id,
		});
		res.status(200).json(compra);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//DELETE - ELIMINAR UNA COMPRA POR ID
//localhost:3000/compras/idCompra
app.delete("/compras/:idCompra", async (req, res) => {
	const idCompra = req.params.idCompra;
	try {
		const compra = await Compra.destroy({
			where: {
				id: {
					[Op.eq]: idCompra,
				},
			},
		});
		res.status(200).json(compra);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//PUT - MODIFICAR UNA COMPRA POR ID
//localhost:3000/compras/idCompra
app.put(
	"/compras/:idCompra",
	validateAdmin,
	validateCompraBody,
	async (req, res) => {
		const idCompra = req.params.idCompra;
		console.log(req.body);
		try {
			const compra = await Compra.update(
				{
					cantidad: req.body.cantidad,
					fecha: req.body.fecha,
					usuario_id: req.body.usuario_id,
					fecha_viaje: req.body.usuario_id,
				},
				{
					where: {
						id: {
							[Op.eq]: idCompra,
						},
					},
				}
			);
			res.status(200).json(compra);
		} catch (error) {
			res.status(500).json({ error: "Intente mas tarde... modifica compra" });
		}
	}
);

//                                  FIN COMPRAS                                 //
//------------------------------------------------------------------------------//

//GET - TRAER TODOS LOS PAQUETE-COMPRA (PARA PROBAR)
//localhost:3000/paquete_compra
app.get("/paquete_compra", validateAdmin, async (req, res) => {
	try {
		const paquete_compra = await PaqueteCompra.findAll();
		res.status(200).json(paquete_compra);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//----------------------------sequelize---------------------------------
//GET - TRAER BANDA/S POR PALABRA CLAVE - V2
//localhost:3000/bandas/buscar/unaPalabra
// app.get("/bandasv2/buscar/:palabra", async (req, res) => {
// 	const palabra = req.params.palabra;
// 	try {
// 		const bandas = await Bandas.findAll({
// 			where: {
// 				nombre: {
// 					[Op.substring]: palabra,
// 				},
// 			},
// 		});
// 		res.status(200).json(bandas);
// 	} catch (error) {
// 		res.status(500).json({ error: "Intente mas tarde..." });
// 	}
// });
//---------------------------- END sequelize---------------------------------

//==========================================================================
//5. levantar el servidor
//==========================================================================
app.listen(3000, () => {
	console.log("servidor iniciado");
});

//1:03
