-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : jeu. 06 juil. 2023 à 20:45
-- Version du serveur : 10.6.5-MariaDB
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `candies`
--

-- --------------------------------------------------------

--
-- Structure de la table `candies`
--

DROP TABLE IF EXISTS `candies`;
CREATE TABLE IF NOT EXISTS `candies` (
  `idCandy` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`idCandy`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `candies`
--

INSERT INTO `candies` (`idCandy`, `name`, `type`, `weight`, `price`) VALUES
(1, 'Snickers', 'Snack sucré', '150g', 50000),
(2, 'Glaces cornet', 'Snack sucré', '50g', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
