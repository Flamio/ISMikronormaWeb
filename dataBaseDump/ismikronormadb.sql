-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 09, 2016 at 11:01 AM
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `approach`
--

INSERT INTO `approach` (`id`, `idProcess`, `name`, `updated`, `comment`, `videoFilename`) VALUES
(1, 1, 'approach 1', '0000-00-00', NULL, 'WorkingDirectory/1.mp4'),
(2, 2, 'approach2', '0000-00-00', NULL, ''),
(3, 1, 'sdfsafsda', '2016-04-02', 'asfsadfsadfd', '');

-- --------------------------------------------------------

--
-- Table structure for table `operations`
--

CREATE TABLE IF NOT EXISTS `operations` (
  `id` int(11) NOT NULL,
  `idApproach` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `updated` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `operations`
--

INSERT INTO `operations` (`id`, `idApproach`, `name`, `updated`) VALUES
(1, 1, 'Opearation1', '2016-04-03');

-- --------------------------------------------------------

--
-- Table structure for table `processes`
--

CREATE TABLE IF NOT EXISTS `processes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `comment` text,
  `updated` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `processes`
--

INSERT INTO `processes` (`id`, `name`, `comment`, `updated`) VALUES
(1, 'process 1', NULL, '0000-00-00'),
(2, 'oooo', 'safsafsdafs', '2016-04-03');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
