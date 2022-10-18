const fs = require('fs');
const path = require('path');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const rutaAbsoluta = '../views/';
const usuariosFilePath = path.join(__dirname, '../src/data/usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
const { dirname } = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let db = require('../database/models');
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

const saltRounds = 10;
const myPlaintextPassword = 's/b/a/a/t';

// Create - Form to create
const controller = {
	create: (req, res) => {
		const htmlPath = path.resolve(__dirname, rutaAbsoluta + 'registro');
		res.render(htmlPath, {
			user: req.session.userLogged
		})
	},
	loggin: (req, res) => {
		console.log(req.session);
		const htmlPath = path.resolve(__dirname, rutaAbsoluta + 'login');
		res.render(htmlPath, {
			user: req.session.userLogged
		})
	},
	// Create -  Method to store
	store: (req, res) => {
		let image;
		const htmlPath = path.resolve(__dirname, rutaAbsoluta + 'registro');
		const htmlPath2 = path.resolve(__dirname, rutaAbsoluta + '/');
		console.log('hola');
		console.log(req.body);
		if (req.files[0] != undefined) {
			image = '/img/imgRegistro/' + req.files[0].filename;
		} else {
			image = '/img/imgRegistro/madre.jpg'
		}
		let { nombre, email, categoria, password, password2 } = req.body;
		let user = usuarios.find(user => user.email == email);
		if (password === password2 && user == null) {
			const salt = bcrypt.genSaltSync(saltRounds);
			password = bcrypt.hashSync(password2, salt);
			let newUsers = {
				id: getRandomInt(1500000),
				name: nombre, email: email, rolId: categoria, password: password,
				image: image
			};
			console.log(newUsers);
			db.users.create(
				newUsers
			).then((productos) => {
				return res.redirect('/productos')
			})
				.catch(error => res.send(error))
		}
		else {
			console.log("No coinciden");
			console.log("Usuario ya registrado");
			res.render(htmlPath, {
				user: req.session.userLogged,
				error: {
					msg: 'usuario ya existe'
				}
			})
		}


	},
	login: (req, res) => {
		let { email, password } = req.body;
		const salt = bcrypt.genSaltSync(saltRounds);
		//password = bcrypt.hashSync(password, salt);
		console.log(email, password);
		db.users.findOne({
			where: {
				email: email
			}
		}).then((user) => {
			const htmlPath = path.resolve(__dirname, rutaAbsoluta + 'login');
			if (user != null) {
				if (bcrypt.compareSync(password, user.password)) {
					console.log('Todo correcto puede seguir :D');
					user.password = "";
					req.session.userLogged = user;
					res.redirect('/');
				}
				else {
					console.log('error no entro :(');
					return res.render(htmlPath, {
						errors: {
							msg: 'Credenciales erroneas'
						}
					});
				}
			}
			else {
				console.log('error no entro :(');
				return res.render(htmlPath, {
					errors: {
						msg: 'Credenciales erroneas'
					}
				});
			}
		});


	},
}
module.exports = controller