-- Adminer 4.8.1 MySQL 11.3.2-MariaDB-1:11.3.2+maria~ubu2204 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `CoursNodeTp`;
CREATE DATABASE `CoursNodeTp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `CoursNodeTp`;

DROP TABLE IF EXISTS `Panier`;
CREATE TABLE `Panier` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `Panier` (`id`, `name`, `price`, `description`, `image`) VALUES
(43,	'souris',	20,	'Une souris pour jouer',	'/images/setup.jpeg'),
(44,	'casque audio',	50,	'Un casque audio pour écouter de la musique',	'/images/setup.jpeg');

DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `Products` (`id`, `name`, `price`, `description`, `image`) VALUES
(1,	'casque audio',	50,	'Un casque audio pour écouter de la musique',	'/images/setup.jpeg'),
(2,	'souris',	20,	'Une souris pour jouer',	'/images/setup.jpeg'),
(3,	'clavier',	30,	'Un clavier pour écrire',	'/images/setup.jpeg'),
(4,	'écran',	100,	'Un écran pour voir',	'/images/setup.jpeg'),
(5,	'pc',	1000,	'Un pc pour travailler',	'/images/setup.jpeg'),
(6,	'tapis de souris',	10,	'Un tapis de souris pour jouer',	'/images/setup.jpeg'),
(7,	'webcam',	40,	'Une webcam pour être regarder',	'/images/setup.jpeg');

-- 2024-03-14 15:51:03
