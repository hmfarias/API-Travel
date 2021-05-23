//==========================================================================
//1. importar express y demas librerias
//==========================================================================
const express = require("express");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const Usuario = require("./models/Usuario");
const Compra = require("./models/Compra");
const FechaCompra = require("./models/Fecha");
const ImagenPaquete = require("./models/Imagen");
const Paquete = require("./models/Paquete");
const db = require("./db/index");
const { Op } = require("sequelize");
const cors = require("cors");

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
const { validateAdmin, validateBandBody } = require("./middlewares/index.js");
//const { response } = require("express");

//==========================================================================
// usar las librerias
//==========================================================================
//mysql 1. proteger todos los endpoints menos el de login usando express-jwt como middleware global
// por nada en la vida expongan esta cadena NADAAAAA!!!!
const secretJWT = "poneralgosupercompicadoconnumerosycaracteres123+5";
// app.use(
// 	expressJwt({
// 		secret: secretJWT,
// 		algorithms: ["HS256"],
// 	}).unless({ path: ["/login"] })
// );
app.use(express.json()); // este middleware nos convierte el json del body en objeto de js
app.use(helmet());
app.use(compression());
app.use(cors());

//==========================================================================
//4. ENDPOINTS
//==========================================================================
//mysql 2. escribir el endpoint de login
app.post("/login", async (req, res) => {
	const emailPost = req.body.mail;
	const passwordPost = req.body.password;
	const usuarioValidado = await User.findOne({
		email: emailPost,
		password: passwordPost,
	});

	if (!usuarioValidado) {
		res.status(401).json({
			error: "usuario o contrasena invalida",
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

//GET - TRAER TODOS LOS USUARIOS
//localhost:3000/usuarios
app.get("/usuarios", async (req, res) => {
	try {
		const usuarios = await db.query("SELECT * FROM usuario", {
			type: db.QueryTypes.SELECT,
		});
		res.status(200).json(usuarios);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//----------------------------sequelize---------------------------------
//GET - TRAER TODOS LOS USUARIOS V2
//localhost:3000/usuarios
app.get("/usuariosv2", async (req, res) => {
	try {
		const usuarios = await Usuario.findAll();
		res.status(200).json(usuarios);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});
//----------------------------END sequelize---------------------------------

//GET - TRAER BANDA/S POR PALABRA CLAVE
//localhost:3000/bandas/buscar/unaPalabra
app.get("/bandas/buscar/:palabra", async (req, res) => {
	const palabra = req.params.palabra;
	try {
		const bandas = await db.query(
			"SELECT * FROM bandas WHERE nombre LIKE :palabraQuery",
			{
				type: db.QueryTypes.SELECT,
				replacements: { palabraQuery: `%${palabra}%` },
			}
		);
		res.status(200).json(bandas);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//----------------------------sequelize---------------------------------
//GET - TRAER BANDA/S POR PALABRA CLAVE - V2
//localhost:3000/bandas/buscar/unaPalabra
app.get("/bandasv2/buscar/:palabra", async (req, res) => {
	const palabra = req.params.palabra;
	try {
		const bandas = await Bandas.findAll({
			where: {
				nombre: {
					[Op.substring]: palabra,
				},
			},
		});
		res.status(200).json(bandas);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});
//---------------------------- END sequelize---------------------------------

//GET - TRAER UNA BANDA POR ID
//localhost:3000/bandas/idBanda
app.get("/bandas/:idBanda", async (req, res) => {
	const idBanda = req.params.idBanda;
	try {
		const bandas = await db.query("SELECT * FROM bandas WHERE id = :id", {
			type: db.QueryTypes.SELECT,
			replacements: { id: idBanda },
		});
		res.status(200).json(bandas);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//----------------------------sequelize---------------------------------
//GET - TRAER UNA BANDA POR ID - V2
//localhost:3000/bandas/idBanda
app.get("/bandasv2/:idBanda", async (req, res) => {
	const idBanda = req.params.idBanda;
	try {
		const bandas = await Bandas.findByPk(idBanda);
		res.status(200).json(bandas);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});
//---------------------------- END sequelize---------------------------------

//----------------------------sequelize---------------------------------
//GET - TRAER BANDAS SOLISTAS - V2
//localhost:3000/bandasv2/solista
app.get("/bandasv2/solista/:numIntegrantes", async (req, res) => {
	const integrantes = req.params.numIntegrantes;
	try {
		const bandas = await Bandas.findAll({
			where: {
				integrantes: integrantes,
			},
		});
		res.status(200).json(bandas);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});
//---------------------------- END sequelize---------------------------------

//POST - AGREGAR UNA BANDA
//localhost:3000/bandas
app.post("/bandas", validateBandBody, async (req, res) => {
	try {
		const banda = await db.query(
			"INSERT INTO bandas (nombre, integrantes, fecha_inicio, fecha_separacion, pais) values (?,?,?,?,?)",
			{
				type: db.QueryTypes.INSERT,
				replacements: [
					req.body.nombre,
					req.body.integrantes,
					req.body.fecha_inicio,
					req.body.fecha_separacion,
					req.body.pais,
				],
			}
		);
		res.status(200).json(banda);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//----------------------------sequelize---------------------------------
//POST - AGREGAR UNA BANDA - V2
//localhost:3000/bandasv2
app.post("/bandasv2", validateBandBody, async (req, res) => {
	console.log("entra en agregar banda v2");
	try {
		const banda = await Bandas.create({
			nombre: req.body.nombre,
			integrantes: req.body.integrantes,
			fecha_inicio: req.body.fecha_inicio,
			fecha_separacion: req.body.fecha_separacion,
			pais: req.body.pais,
		});
		res.status(200).json(banda);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});
//---------------------------- END sequelize---------------------------------

//PUT - MODIFICAR UNA BANDA POR ID
//localhost:3000/bandas/idBanda
app.put("/bandas/:idBanda", validateBandBody, async (req, res) => {
	const idBanda = req.params.idBanda;
	try {
		const banda = await db.query(
			"UPDATE bandas SET nombre = ?, integrantes= ?, fecha_inicio = ?, fecha_separacion = ?, pais = ? WHERE id = ?",
			{
				type: db.QueryTypes.UPDATE,
				replacements: [
					req.body.nombre,
					req.body.integrantes,
					req.body.fecha_inicio,
					req.body.fecha_separacion,
					req.body.pais,
					idBanda,
				],
			}
		);
		res.status(200).json(banda);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//----------------------------sequelize---------------------------------
//PUT - MODIFICAR UNA BANDA POR ID - V2
//localhost:3000/bandas/idBanda
app.put("/bandasv2/:idBanda", validateBandBody, async (req, res) => {
	const idBanda = req.params.idBanda;
	try {
		const banda = await Bandas.update(
			{
				nombre: req.body.nombre,
				integrantes: req.body.integrantes,
				fecha_inicio: req.body.fecha_inicio,
				fecha_separacion: req.body.fecha_separacion,
				pais: req.body.pais,
			},
			{
				where: {
					id: {
						[Op.eq]: idBanda,
					},
				},
			}
		);
		res.status(200).json(banda);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});
//----------------------------END sequelize---------------------------------

//DELETE - ELIMINAR UNA BANDA POR ID
//localhost:3000/bandas/idBanda
app.delete("/bandas/:idBanda", async (req, res) => {
	const idBanda = req.params.idBanda;
	try {
		const banda = await db.query("DELETE FROM bandas WHERE id = :id", {
			type: db.QueryTypes.DELETE,
			replacements: { id: idBanda },
		});
		res.status(200).json(banda);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});

//----------------------------sequelize---------------------------------
//DELETE - ELIMINAR UNA BANDA POR ID - V2
//localhost:3000/bandasv2/idBanda
app.delete("/bandasv2/:idBanda", async (req, res) => {
	const idBanda = req.params.idBanda;
	try {
		const banda = await Bandas.destroy({
			where: {
				id: {
					[Op.eq]: idBanda,
				},
			},
		});
		res.status(200).json(banda);
	} catch (error) {
		res.status(500).json({ error: "Intente mas tarde..." });
	}
});
//----------------------------END sequelize---------------------------------

//==========================================================================
//5. levantar el servidor
//==========================================================================
app.listen(3000, () => {
	console.log("servidor iniciado");
});

//1:03
