DROP DATABASE IF EXISTS `compras_gamer`;
CREATE DATABASE IF NOT EXISTS `compras_gamer`;
USE `compras_gamer`;
CREATE TABLE `rols` (
   `idRol` INT AUTO_INCREMENT,
   `roleType` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`idRol`)
);
CREATE TABLE `users` (
   `idUsers` INT AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `rolld` INT NOT NULL,
   PRIMARY KEY (`idUsers`)
);
CREATE TABLE `categories` (
   `idCategories` INT AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`idCategories`)
);
CREATE TABLE `products` (
   `idProducts` INT AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `description` VARCHAR(1234) NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `price` DECIMAL(10,0) NOT NULL,
   `categorieId` INT NOT NULL,
   PRIMARY KEY (`idProducts`)
);
ALTER TABLE `rols` ADD CONSTRAINT `FK_7dbeadff-a65b-44fa-ae41-a7299f4e1b57` FOREIGN KEY (`idRol`) REFERENCES `users`(`idUsers`)  ;
ALTER TABLE `categories` ADD CONSTRAINT `FK_f3f932c9-1e2b-44ed-8dd2-8b6491ebef73` FOREIGN KEY (`idCategories`) REFERENCES `products`(`idProducts`)