-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 16-03-2022 a las 03:46:59
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
-- Base de datos: `ejercicio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE IF NOT EXISTS `empleados` (
  `IdEmpleado` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `Apellido` varchar(150) NOT NULL,
  `Trabajo` int(5) NOT NULL,
  `Edad` int(3) NOT NULL,
  `Salario` int(6) NOT NULL,
  `Mail` varchar(250) NOT NULL,
  PRIMARY KEY (`IdEmpleado`),
  KEY `Trabajo` (`Trabajo`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`IdEmpleado`, `Nombre`, `Apellido`, `Trabajo`, `Edad`, `Salario`, `Mail`) VALUES
(1, 'Juan', 'Hagan', 1, 32, 120000, 'juan_hagan@bignet.com'),
(2, 'Gonzalo', 'Pillai', 1, 32, 110000, 'g_pillai@bignet.com'),
(3, 'Ana', 'Dharma', 2, 27, 90000, 'ana@bignet.com'),
(4, 'Maria', 'Anchor', 2, 26, 85000, 'mary@bignet.com'),
(5, 'Alfred', 'Fernandez', 3, 31, 75000, 'af@bignet.com'),
(6, 'Juan', 'Agüero', 3, 36, 85000, 'juan@bignet.com'),
(7, 'Eduardo', 'Sacan', 3, 25, 85000, 'eddi@bignet.com'),
(8, 'Alejandro', 'Nanda', 3, 32, 70000, 'alenanda@bignet.com'),
(9, 'Hernan', 'Rosso', 4, 33, 90000, 'hernan@bignet.com'),
(10, 'Pablo', 'Simon', 4, 43, 85000, 'ps@bignet.com'),
(11, 'Arturo', 'Hernandez', 4, 32, 75000, 'arturo@bignet.com'),
(12, 'Roberto', 'Luis', 6, 35, 100000, 'roberto@bignet.com'),
(13, 'Daniel', 'Gutierrez', 6, 34, 900000, 'daniel@bignet.com'),
(14, 'Miguel', 'Harper', 7, 36, 120000, 'miguel@bignet.com'),
(15, 'Monica', 'Sanchez', 8, 30, 90000, 'monica@bignet.com'),
(16, 'Alicia', 'Simlai', 8, 27, 70000, 'alicia@bignet.com'),
(17, 'Jose', 'Iriarte', 8, 27, 72000, 'jose@bignet.com'),
(18, 'Sabrina', 'Allende', 9, 32, 200000, 'sabrina@bignet.com'),
(19, 'Pedro', 'Campeon', 10, 36, 220000, 'pedro@bignet.com'),
(20, 'Mariano', 'Dharma', 11, 28, 300000, 'mariano@bignet.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajos`
--

DROP TABLE IF EXISTS `trabajos`;
CREATE TABLE IF NOT EXISTS `trabajos` (
  `IdTrabajo` int(11) NOT NULL AUTO_INCREMENT,
  `Trabajo` varchar(100) NOT NULL,
  PRIMARY KEY (`IdTrabajo`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `trabajos`
--

INSERT INTO `trabajos` (`IdTrabajo`, `Trabajo`) VALUES
(1, 'Programador Senior'),
(2, 'Desarrollador Web'),
(3, 'Programador'),
(4, 'Especialista Multimedia'),
(5, 'Diseñador Web'),
(6, 'Administrador de Sistemas'),
(7, 'Ejecutivo de Ventas Senior'),
(8, 'Ejecutivo de Ventas'),
(9, 'Gerente de Soporte Tecnico'),
(10, 'Gerente de Finanzas'),
(11, 'Presidente');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vempleados`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `vempleados`;
CREATE TABLE IF NOT EXISTS `vempleados` (
`Id` int(11)
,`NombreEmpleado` varchar(301)
,`Trabajo` varchar(100)
,`Edad` int(3)
,`Salario` int(6)
,`Mail` varchar(250)
);

-- --------------------------------------------------------

--
-- Estructura para la vista `vempleados`
--
DROP TABLE IF EXISTS `vempleados`;

DROP VIEW IF EXISTS `vempleados`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vempleados`  AS SELECT `emp`.`IdEmpleado` AS `Id`, concat(`emp`.`Nombre`,' ',`emp`.`Apellido`) AS `NombreEmpleado`, `tra`.`Trabajo` AS `Trabajo`, `emp`.`Edad` AS `Edad`, `emp`.`Salario` AS `Salario`, `emp`.`Mail` AS `Mail` FROM (`empleados` `emp` join `trabajos` `tra` on((`emp`.`Trabajo` = `tra`.`IdTrabajo`))) ;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `REL_TRABAJO` FOREIGN KEY (`Trabajo`) REFERENCES `trabajos` (`IdTrabajo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
