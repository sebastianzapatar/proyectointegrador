const fs = require('fs');
const path = require('path');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const rutaAbsoluta='../views/';
const usuariosFilePath = path.join(__dirname, '../src/data/usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
const { dirname } = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }  

const saltRounds = 10;
const myPlaintextPassword = 's/b/a/a/t';
const someOtherPlaintextPassword = 'digital';
// Create - Form to create
const controller = {	
	create: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'registro');
		res.render(htmlPath)
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let image;
		console.log('hola');
		console.log(req.body);
		if(req.files[0] != undefined){
			image = '/img/imgRegistro/'+req.files[0].filename;
		} else {
			image = '/img/imgRegistro/madre.jpg'
		}
		let {nombre, email, categoria, password, password2} = req.body;
		if (password === password2) {
			const salt = bcrypt.genSaltSync(saltRounds);
            password = bcrypt.hashSync(password2, salt);
		}
		let newUsers = {
			id: getRandomInt(1500000),
            nombre: nombre, email: email, categoria: categoria, password: password,
			image: image
		};
		usuarios.push(newUsers);
		fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, ' '));
		res.redirect('/');

	}}
	module.exports=controller