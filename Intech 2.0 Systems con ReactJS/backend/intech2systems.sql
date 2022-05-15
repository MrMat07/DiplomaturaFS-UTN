-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 15-05-2022 a las 20:26:55
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
-- Base de datos: `intech2systems`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `news`
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `IdNews` int(11) NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `Subtitulo` text COLLATE utf8_unicode_ci NOT NULL,
  `Cuerpo` text COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`IdNews`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `news`
--

INSERT INTO `news` (`IdNews`, `Titulo`, `Subtitulo`, `Cuerpo`, `img`) VALUES
(2, 'Búsqueda de Personal', 'Estamos Reclutando Nuevos Talentos', 'Estamos en la búsqueda de nuevos talentos, para incorporar en nuestro Staff.', 'd9rerhwd2z3q4tlulzq3'),
(3, 'Próximos Productos', 'Desarrollo de un Nuevo Producto', 'Estamos trabajando en un nuevo producto, para sumar a nuestro amplio catalogo. Un nuevo ERP 100% en la nube.', 'mixhvnsytkl5buz9vjm1'),
(17, 'Business Intelligence', 'Nueva Incorporación', 'Ya poseemos tableros dinámicos para business intelligence, ahora podrás ver toda la información cargadas en nuestros sistemas, de una manera mas didáctica y estratégica para la toma de decisiones.', 'ddfyrxnzzbnnmt5i0187');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `promotions`
--

DROP TABLE IF EXISTS `promotions`;
CREATE TABLE IF NOT EXISTS `promotions` (
  `IdPromotion` int(11) NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Precio` float NOT NULL,
  `Detalle` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`IdPromotion`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `promotions`
--

INSERT INTO `promotions` (`IdPromotion`, `Titulo`, `Precio`, `Detalle`) VALUES
(1, 'Servicio Empresa Básico', 603.9, 'Organiza reuniones online y videoconferencias para un máximo de 300 usuarios.\r\nObtén ayuda en cualquier momento con el soporte telefónico y web ininterrumpido.'),
(2, 'Aplicaciones para negocios', 830.4, 'Versiones de escritorio de aplicaciones de Office con características premium.\r\nSeguridad estándar.\r\nSoporte ininterrumpido por teléfono y a través de la Web.'),
(3, 'Servicio Empresa Estándar', 1258.2, 'Versiones de escritorio de las aplicaciones de Office con características premium\r\nOrganización sencilla de seminarios web\r\nHerramientas de informes y registro de asistentes\r\nAdministra citas de clientes'),
(4, 'Servicio Empresa Premium', 2214.4, 'Seguridad avanzada\r\nControl de datos y acceso\r\nProtección contra ciberamenazas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `IdUser` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Apellido` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `NombreUsuario` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Mail` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Clave` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`IdUser`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`IdUser`, `Nombre`, `Apellido`, `NombreUsuario`, `Mail`, `Clave`) VALUES
(1, 'Matias', 'Monti', 'mmonti', 'mmonti@i2s.com.ar', 'c93ccd78b2076528346216b3b2f701e6'),
(2, 'Flavia', 'Ursino', 'Flavia', 'flaviaursino@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vusers`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `vusers`;
CREATE TABLE IF NOT EXISTS `vusers` (
`IdUser` int(11)
,`Nombre` varchar(201)
,`Nickname` varchar(100)
,`Mail` varchar(100)
);

-- --------------------------------------------------------

--
-- Estructura para la vista `vusers`
--
DROP TABLE IF EXISTS `vusers`;

DROP VIEW IF EXISTS `vusers`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vusers`  AS SELECT `us`.`IdUser` AS `IdUser`, concat(`us`.`Nombre`,' ',`us`.`Apellido`) AS `Nombre`, `us`.`NombreUsuario` AS `Nickname`, `us`.`Mail` AS `Mail` FROM `users` AS `us` ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
