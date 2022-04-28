-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-04-2022 a las 02:29:17
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
  PRIMARY KEY (`IdNews`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `news`
--

INSERT INTO `news` (`IdNews`, `Titulo`, `Subtitulo`, `Cuerpo`) VALUES
(2, 'Comprueba tu navegador: puedes estar en peligro por este fallo', 'Seguridad2', 'De entre los muchos navegadores de internet por los que nos podemos decantar para usar a diario, la mayoría prefiere Google Chrome. Con una penetración de mercado muy superior al resto de competidores, este es uno de los programas más utilizados en los ordenadores y dispositivos móviles de todo el mundo, pero no está carente de problemas.'),
(3, 'Controla mejor un PC antiguo remotamente en AnyDesk con estos cambios', 'Programas', 'En gran medida gracias al extendido uso de internet, todo aquello relacionado con los trabajos de forma remota cada vez se usa más. Para ello utilizamos aplicaciones específicas y especialmente desarrolladas para estas tareas como es el caso de AnyDesk.');

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
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`IdUser`, `Nombre`, `Apellido`, `NombreUsuario`, `Mail`, `Clave`) VALUES
(1, 'Matias', 'Monti', 'mmonti', 'mmonti@i2s.com.ar', 'c93ccd78b2076528346216b3b2f701e6');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
