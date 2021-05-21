// here goes the connection with mysql
const Sequelize = require("sequelize");

//build the connection string
const user = "root";
const pwd = "";
const host = "localhost";
const port = 3306;
const dataBase = "travel";
const conectionString = `mysql://${user}:${pwd}@${host}:${port}/${dataBase}`;

//create a connection
const sequelizeObject = new Sequelize(conectionString);

sequelizeObject
	.authenticate()
	.then(() => {
		console.log("Successful connection");
	})
	.catch((err) => {
		console.error(err.message);
	});

module.exports = sequelizeObject;

