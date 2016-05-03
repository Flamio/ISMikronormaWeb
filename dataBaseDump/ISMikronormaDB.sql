-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2016 at 01:02 PM
-- Server version: 5.5.25
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ismikronormadb`
--

-- --------------------------------------------------------

--
-- Table structure for table `approach`
--

CREATE TABLE IF NOT EXISTS `approach` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idProcess` int(11) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `updated` date NOT NULL,
  `comment` text,
  `videoFilename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=70 ;

--
-- Dumping data for table `approach`
--

INSERT INTO `approach` (`id`, `idProcess`, `name`, `updated`, `comment`, `videoFilename`) VALUES
(66, 64, 'подход 1', '2016-05-03', '', 'WorkingDirectory/1.mp4'),
(67, 64, 'подход 2', '2016-05-03', '', 'WorkingDirectory/2.mp4'),
(68, 65, 'подход 1', '2016-05-03', '', 'WorkingDirectory/3.mp4'),
(69, 65, 'подход 2', '2016-05-03', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `operations`
--

CREATE TABLE IF NOT EXISTS `operations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idApproach` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `updated` date NOT NULL,
  `comment` varchar(100) NOT NULL,
  `position` int(11) NOT NULL,
  `actualTime` float NOT NULL,
  `directoryValueId` int(11) NOT NULL,
  `calcTime` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `operations`
--

INSERT INTO `operations` (`id`, `idApproach`, `name`, `updated`, `comment`, `position`, `actualTime`, `directoryValueId`, `calcTime`) VALUES
(2, 67, 'операция 1', '2016-05-03', 'фыаыа', 1, 1.8281, 856, 0.43),
(3, 67, 'операция 2', '2016-05-03', 'ы', 2, 13.8281, 845, 0.5),
(4, 68, 'операция 1', '2016-05-03', 'ы', 1, 1.15379, 845, 0.5),
(5, 66, 'asdf', '2016-05-03', 'ass', 1, 0.663104, 845, 0.5),
(6, 67, '221', '2016-05-03', '111', 3, 0.573104, 845, 0.5),
(7, 66, '7777', '2016-05-03', '', 2, 0.872125, 846, 0.34),
(8, 66, 'fdsgs', '2016-05-03', 'ss', 3, 0.552063, 846, 0.34),
(9, 67, '8', '2016-05-03', 'ss', 4, 1.1131, 1535, 0.25);

-- --------------------------------------------------------

--
-- Table structure for table `processes`
--

CREATE TABLE IF NOT EXISTS `processes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `comment` text,
  `updated` date NOT NULL,
  `directoryId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=66 ;

--
-- Dumping data for table `processes`
--

INSERT INTO `processes` (`id`, `name`, `comment`, `updated`, `directoryId`) VALUES
(64, 'процесс1 ', '', '2016-05-03', 117),
(65, 'процесс 2', '', '2016-05-03', 117);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
