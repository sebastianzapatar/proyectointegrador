const fs = require('fs');
const path = require('path');
const rutaAbsoluta='../views/';
const productsFilePath = path.join(__dirname, '../src/data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const { dirname } = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let db = require('../database/models');
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }
const controller = {
	// Root - Show all products
	index: (req, res) => {
		console.log(req.session);
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'home');
		res.render(htmlPath, {
			products,
			toThousand,
			user:req.session.userLogged
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'productos');
		let id = req.params.id;
		let product = products.find(product => product.id == id)
		res.render(htmlPath, {
			product,
			user:req.session.userLogged,
			toThousand
		})
	},
	productos: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'productos2');
		
		res.render(htmlPath,{
			user:req.session.userLogged
		})
	},
	borrar: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'borrar');
		
		res.render(htmlPath, {
			products,
			user:req.session.userLogged,
			toThousand
		})
	},
	// Create - Form to create
	create: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'agregar');
		
		res.render(htmlPath,{
			user:req.session.userLogged
		})
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let image;
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'productos2');
		console.log(req.files);
		if(req.files[0] != undefined){
			image = '/img/imgHome/'+req.files[0].filename;
		} else {
			image = '/img/imgHome/madre.jpg'
		}
		let newProduct = {
			id: getRandomInt(1500000),
			...req.body,
			image: image
		};
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.render(htmlPath,{
			user:req.session.userLogged
		})
	},

	// Update - Form to edit
	edit: (req, res) => {
		console.log(req.session)
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'editar');
		res.render(htmlPath, {productToEdit,
			user:req.session.userLogged})
	},
	editar: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'editarT');
		
		res.render(htmlPath, {
			products,
			toThousand,
			user:req.session.userLogged
		})
	},

	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id;
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'productos2');
		let productToEdit = products.find(product => product.id == id)
		let image

		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = productToEdit.image
		}

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		};
		
		let newProducts = products.map(product => { 
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.render(htmlPath, {
			user:req.session.userLogged
		})
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'productos2');
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.render(htmlPath, {
			user:req.session.userLogged
		})
	},
	
	createDb: function (req, res) {
        // Productos.create({
		// 	idProducts: req.body.idProducts,
		// 	name: req.body.name,
		// 	description: req.body.description,
		// 	image: req.body.image,
		// 	price: req.body.price, 
		// 	idCategoria: req.body.idCategoria
        // })
		Productos.findAll()
    .then((productos)=>{
       return res.send(productos)
    })
    .catch(error => res.send(error))
   
}
}

module.exports = controller;