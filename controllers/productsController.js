const fs = require('fs');
const path = require('path');

const rutaAbsoluta='../views/';
const productsFilePath = path.join(__dirname, '../src/data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const { dirname } = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }
const controller = {
	// Root - Show all products
	index: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'home');
		res.render(htmlPath, {
			products,
			toThousand
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'productos');
		let id = req.params.id;
		let product = products.find(product => product.id == id)
		res.render(htmlPath, {
			product,
			toThousand
		})
	},
	productos: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'productos2');
		
		res.render(htmlPath)
	},
	borrar: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'borrar');
		
		res.render(htmlPath, {
			products,
			toThousand
		})
	},
	// Create - Form to create
	create: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'agregar');
		
		res.render(htmlPath)
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let image;
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
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('product-edit-form', {productToEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id;
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
		res.redirect('/');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	},
	
};

module.exports = controller;