const fs = require('fs');
const path = require('path');
const rutaAbsoluta='../views/';
const productsFilePath = path.join(__dirname, '../src/data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let db = require('../database/models');

const controller = {
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
		 const htmlPath=path.resolve(__dirname,rutaAbsoluta+'productos');
		
		
		db.products.findAll({
			include: ['categories']
        })
		.then((products)=>{
			console.log(products);
			res.render(htmlPath, {
				products,
				toThousand,
				user:req.session.userLogged
			})
		 })
		 .catch(error => res.send(error))
	},

	delete: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'borrar');
		let id = req.params.id
		db.products.findByPk(id)
		.then((producto)=>{
			console.log(producto)
			res.render(htmlPath, {producto,
				user:req.session.userLogged})
		 })
		 .catch(error => res.send(error))
	},

    processDelete: (req, res) => {
        let id = req.params.id;
		console.log(id);
        db.products.destroy({where:{idProduct:id}})
            .then(products => {
				console.log('resultado' , products);
                return res.render(path.resolve(__dirname,rutaAbsoluta+'/productos'), {products: []})
            })
    .catch(error => res.send(error)) 
},
		// let image;
		// if(req.files[0] != undefined){
		// 	image = req.files[0].filename
		// } else {
		// 	image = productToEdit.image
		// }
		
		// console.log(req.files);
		// if(req.files[0] != undefined){
		// 	image = '/img/imgHome/'+req.files[0].filename;
		// } else {
		// 	image = '/img/imgHome/madre.jpg'
		// }
		// let newProduct = {
		// 	id: getRandomInt(1500000),
		// 	...req.body,
		// 	image: image
		// };
		// products.push(newProduct);
		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		// res.render(htmlPath,{
		// 	user:req.session.userLogged
		// })
	

	edit: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'editar');
		console.log(req.session)
        let id = req.params.id
		let producto = 	db.products.findByPk(id);
		let categories = db.categories.findAll();
    Promise.all([producto, categories])
		.then(([producto, categories])=>{
			res.render(htmlPath, {producto, categories,
				user:req.session.userLogged})
		 })
		 .catch(error => res.send(error))
	},
	processEdit: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'editarT');
		db.products.findAll({
			include: ['categories']
        })
		.then((products)=>{
			console.log(products);
			res.render(htmlPath, {
				products,
				toThousand,
				user:req.session.userLogged
			})
		 })
		 .catch(error => res.send(error))
	},

	create: (req, res) => {
		const htmlPath=path.resolve(__dirname,rutaAbsoluta+'agregar');
		console.log(htmlPath);
		db.categories.findAll()
		.then((categories)=>{
			res.render(htmlPath,{
				categories: categories
			})
		 })
		 .catch(error => res.send(error))
	},
	processCreate: function (req, res) {
		let image;
		if(req.files[0] != undefined){
			image = '/img/imgHome/'+req.files[0].filename
		} else {
			image = productToEdit.image
		}
		console.log(image);
        db.products.create({
			
			name: req.body.name,
			description: req.body.description,
			image: image,
			price: req.body.price, 
			categorieId: req.body.idCategoria,
			description:req.body.descripcion,
			categorieId:req.body.idCategoria
        })
    .then((productos)=>{
       return res.redirect('/productos')
    })
    .catch(error => res.send(error)) 
},
detail : (req,res)=>{
	const htmlPath=path.resolve(__dirname,rutaAbsoluta+'detail');
	let id = req.params.id
	db.products.findByPk(id)
	.then((producto)=>{
		res.render(htmlPath, {producto,
			user:req.session.userLogged})
	 })
	 .catch(error => res.send(error))
}
}
module.exports = controller;	
