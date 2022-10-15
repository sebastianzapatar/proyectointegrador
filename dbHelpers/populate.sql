USE `compras_gamer`;
INSERT INTO `rols` (idRol, roleType) VALUES
(default, "admin"), (default, "cliente"), (default, "encargado");

USE `compras_gamer`;
INSERT INTO `categories` (idCategorie, name) VALUES
(default, "categoria1"), (default, "categoria2"), (default, "categoria3");

USE `compras_gamer`;
INSERT INTO `products` (idProduct, name, description, image, price, categorieId) VALUES
(default, "Ryzen", "algo tecnologico", "archivo.png", 25000, 1),
(default, "Ryzen2", "algo tecnologico", "archivo.png", 25000, 1);

USE `compras_gamer`;
INSERT INTO `users` (idUser, name, email, image, password, rolId) VALUES
(default, "Guido", "guido.maimone@digitalhouse.com", "archivo.png", "oagasdi782gfifa8", 2),
(default, "Bautista", "guido.maimone@digitalhouse.com", "archivo.png", "oagasdi782gfifa8", 2)

