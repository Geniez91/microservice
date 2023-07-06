-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : jeu. 06 juil. 2023 à 18:42
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
-- Base de données : `movies`
--

-- --------------------------------------------------------

--
-- Structure de la table `movies`
--

DROP TABLE IF EXISTS `movies`;
CREATE TABLE IF NOT EXISTS `movies` (
  `idMovies` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `director` varchar(255) NOT NULL,
  `duration` int(11) NOT NULL,
  `synopsis` varchar(255) NOT NULL,
  `nationality` varchar(255) NOT NULL,
  `realease_date` datetime NOT NULL,
  `availableTickets` int(11) NOT NULL,
  PRIMARY KEY (`idMovies`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `movies`
--

INSERT INTO `movies` (`idMovies`, `title`, `director`, `duration`, `synopsis`, `nationality`, `realease_date`, `availableTickets`) VALUES
(1, 'Star Wars : La Menace Fantome2', 'testaaaa', 180, 'Avant de devenir un célèbre chevalier Jedi, et bien avant de se révéler l\'âme la plus noire de la galaxie, Anakin Skywalker est un jeune esclave sur la planète Tatooine. La Force est déjà puissante en lui et il est un remarquable pilote de Podracer. ', 'Américain', '1999-10-13 16:34:41', 47),
(2, 'Titanic', 'Cameron', 200, 'Avant de devenir un célèbre chevalier Jedi, et bien avant de se révéler l\'âme la plus noire de la galaxie, Anakin Skywalker est un jeune esclave sur la planète Tatooine. La Force est déjà puissante en lui et il est un remarquable pilote de Podracer. ', 'Américain', '1999-10-13 16:34:41', 37),
(3, 'Titanic', 'Cameron', 200, 'Avant de devenir un célèbre chevalier Jedi, et bien avant de se révéler l\'âme la plus noire de la galaxie, Anakin Skywalker est un jeune esclave sur la planète Tatooine. La Force est déjà puissante en lui et il est un remarquable pilote de Podracer. ', 'Américain', '1999-10-13 16:34:41', 0),
(4, 'Titanic', 'Cameron', 200, 'Avant de devenir un célèbre chevalier Jedi, et bien avant de se révéler l\'âme la plus noire de la galaxie, Anakin Skywalker est un jeune esclave sur la planète Tatooine. La Force est déjà puissante en lui et il est un remarquable pilote de Podracer. ', 'algerienne', '1999-10-13 16:34:41', 0),
(5, 'Titanic', 'Cameron', 200, 'Avant de devenir un célèbre chevalier Jedi, et bien avant de se révéler l\'âme la plus noire de la galaxie, Anakin Skywalker est un jeune esclave sur la planète Tatooine. La Force est déjà puissante en lui et il est un remarquable pilote de Podracer. ', 'algerienne', '1999-10-13 16:34:41', 0),
(6, 'Titanic', 'Cameron', 200, 'Avant de devenir un célèbre chevalier Jedi, et bien avant de se révéler l\'âme la plus noire de la galaxie, Anakin Skywalker est un jeune esclave sur la planète Tatooine. La Force est déjà puissante en lui et il est un remarquable pilote de Podracer. ', 'algerienne', '1999-10-13 16:34:41', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
