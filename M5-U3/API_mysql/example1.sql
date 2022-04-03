-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 03-04-2022 a las 00:31:57
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `example1`
--

DELIMITER $$
--
-- Procedimientos
--
DROP PROCEDURE IF EXISTS `AddUpdateUser`$$
CREATE DEFINER=`Admin1`@`localhost` PROCEDURE `AddUpdateUser` (`_iduser` INT, `_nombre` VARCHAR(50), `_apellido` VARCHAR(50), `_mail` VARCHAR(100), `_username` VARCHAR(50), `_password` VARCHAR(50))  BEGIN
  IF _iduser = 0 THEN
    INSERT INTO ssec_user  (nombre, apellido, mail, username, password)
    VALUES (_nombre, _apellido, _mail, _username, _password);

    SET _iduser = LAST_INSERT_ID();
  ELSE
    UPDATE ssec_user
    SET
    nombre = _nombre,
    apellido = _apellido,
    mail=_mail,
    username=_username,
    password=_password
    WHERE iduser = _iduser;
  END IF;

  SELECT _iduser AS 'iduser';
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ssec_user`
--

DROP TABLE IF EXISTS `ssec_user`;
CREATE TABLE IF NOT EXISTS `ssec_user` (
  `iduser` int(6) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ssec_user`
--

INSERT INTO `ssec_user` (`iduser`, `nombre`, `apellido`, `mail`, `username`, `password`) VALUES
(1, 'Matias', 'Monti', 'mm@localhost.com', 'mat01', '1234'),
(2, 'Emanuel', 'Monti', 'mm@hotmail.com', 'Ema10', '123456');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
