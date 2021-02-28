-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 27 fév. 2021 à 22:54
-- Version du serveur :  10.4.17-MariaDB
-- Version de PHP : 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `node-api`
--

-- --------------------------------------------------------

--
-- Structure de la table `lieux`
--
CREATE DATABASE lieu;

CREATE TABLE `lieux` (
  `idlieux` int(4) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nomlieux` varchar(40) NOT NULL,
  `description` varchar(90) DEFAULT NULL,
  `adresse` varchar(50) NOT NULL,
  `numfix` varchar(13) DEFAULT NULL,
  `nummobile` varchar(13) DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `website` varchar(50) DEFAULT NULL,
  `disponibility` varchar(50) DEFAULT NULL,
  `tarif` varchar(50) DEFAULT NULL,
  `type` varchar(40) NOT NULL,
  `image` varchar(50) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO lieux (idlieux, nomlieux, description, 
                  adresse, numfix, nummobile, email, website, 
                  disponibility, tarif, type, image, video) 
VALUES (5, "Place guidon", "blablablaaaa", 
        "Bejaia", "034161181", "0659819202", "i.merzoug16@gmail.com", "https://www.w3schools.com/",
        "places disponibles", "café a 30Da", "Terrasse", "on joutes le path ici", "https://www.youtube.com/watch?v=jEsF222Iz0M&ab_channel=AmazighSansFronti%C3%A8res%E2%B5%A3" );

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `lieux`
--
ALTER TABLE `lieux`
  ADD PRIMARY KEY (`idlieux`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `lieux`
--
ALTER TABLE `lieux`
  MODIFY `idlieux` int(4) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '0000'


