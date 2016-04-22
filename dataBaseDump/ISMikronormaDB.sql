-- phpMyAdmin SQL Dump
-- version 4.4.13.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 22, 2016 at 09:27 AM
-- Server version: 5.6.28-0ubuntu0.15.10.1
-- PHP Version: 5.6.11-1ubuntu3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ISMikronormaDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `approach`
--

CREATE TABLE IF NOT EXISTS `approach` (
  `id` int(11) NOT NULL,
  `idProcess` int(11) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `updated` date NOT NULL,
  `comment` text,
  `videoFilename` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `approach`
--

INSERT INTO `approach` (`id`, `idProcess`, `name`, `updated`, `comment`, `videoFilename`) VALUES
(37, 34, 'Ð¿Ð¾Ð´Ñ…Ð¾Ð´ 1', '2016-04-11', 'f', 'WorkingDirectory/22aa97c1bcd984d9baf3015e0ca80339'),
(39, 34, '2', '2016-04-12', '55', 'WorkingDirectory/dade88782e39b5af0eeb0242b1c7d93a'),
(40, 34, 'Ð¿Ð¾Ð´Ñ…Ð¾Ð´3', '2016-04-13', '2', 'WorkingDirectory/9c9b453eab20439ef777dca69be4a357'),
(41, 34, 'Ð¿Ð¾Ð´Ñ…Ð¾Ð´2', '2016-04-13', '2221', 'WorkingDirectory/f4af45d8991e16cce04148e91d2c1b56'),
(42, 34, '332', '2016-04-13', '3', ''),
(43, 34, '332', '2016-04-13', '444', ''),
(44, 34, '454564', '2016-04-13', '', ''),
(47, 36, '4455', '2016-04-13', '5', ''),
(58, 35, '6', '2016-04-14', '8', 'WorkingDirectory/683dd621f62dbf413a5cbf53cba711e3'),
(59, 41, '3', '2016-04-14', '4', ''),
(60, 41, '43', '2016-04-14', '2undefined', 'WorkingDirectory/f4af45d8991e16cce04148e91d2c1b56'),
(61, 40, 'undefined', '2016-04-14', 'undefined', ''),
(62, 43, 'wqr', '2016-04-15', 'qwer', ''),
(63, 44, '33', '2016-04-16', '22', ''),
(64, 44, '111', '2016-04-16', '23213', '');

-- --------------------------------------------------------

--
-- Table structure for table `operations`
--

CREATE TABLE IF NOT EXISTS `operations` (
  `id` int(11) NOT NULL,
  `idApproach` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `updated` date NOT NULL,
  `comment` varchar(100) NOT NULL,
  `position` int(11) NOT NULL,
  `actualTime` float NOT NULL,
  `calcTime` float NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `operations`
--

INSERT INTO `operations` (`id`, `idApproach`, `name`, `updated`, `comment`, `position`, `actualTime`, `calcTime`) VALUES
(5, 37, 'd', '2016-04-20', 'd', 0, 0.5, 0.782),
(6, 39, 'd', '2016-04-20', 'd', 0, 0.91, 0.79275),
(7, 39, '5', '2016-04-20', 'd', 0, 0.21, 0.604167),
(8, 37, '44', '2016-04-21', '33', 0, 0.22, 0.059667),
(9, 37, 'asds', '2016-04-21', 'safsdf', 0, 0.62, 0.410333),
(10, 37, '123', '2016-04-22', '221', 0, 0.27, 0.378667),
(11, 37, 'sdfg', '2016-04-22', 'dsfggggggg', 1, 0.91, 0.166),
(13, 37, '222', '2016-04-22', '1', 2, 2.61, 0.354667),
(14, 41, '222', '2016-04-22', '1', 1, 0.33, 2.383),
(15, 41, '222', '2016-04-22', '1', 2, 0.91, 0.645333);

-- --------------------------------------------------------

--
-- Table structure for table `processes`
--

CREATE TABLE IF NOT EXISTS `processes` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `comment` text,
  `updated` date NOT NULL,
  `directoryId` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `processes`
--

INSERT INTO `processes` (`id`, `name`, `comment`, `updated`, `directoryId`) VALUES
(34, 'Ð¿Ñ€Ð¾Ñ†ÐµÑÑ 3', 'ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹1', '2016-04-11', 117),
(35, 'ghghhg', 'rfsdaf', '2016-04-13', 46060),
(36, '22', '22', '2016-04-13', 0),
(37, '1123', '213', '2016-04-13', 0),
(38, '22', '33', '2016-04-13', 0),
(39, '333', '444', '2016-04-13', 0),
(40, '33', '22', '2016-04-13', 0),
(41, '99', '88', '2016-04-14', 0),
(42, '', '', '2016-04-15', 0),
(43, '11', '22', '2016-04-15', 0),
(44, '12', '1', '2016-04-15', 0),
(45, 'Ð°Ð°Ð°', 'Ð°', '2016-04-16', 0),
(46, '22331', '333221', '2016-04-16', 0),
(47, '11', '11', '2016-04-16', 0),
(48, 'sdf', 'sdffsdf', '2016-04-16', 0),
(49, 'sdaf', 'sadf', '2016-04-16', 0),
(50, 'Ñ‹Ð²Ð°Ñ‹', 'Ñ‹Ð²Ð°Ñ‹Ð²Ð°', '2016-04-16', 0),
(51, 'Ð¦Ð£', 'Ð¦Ð£', '2016-04-16', 0),
(52, 'ddd', 'dddf', '2016-04-16', 0),
(53, 'adf', 'asfd', '2016-04-16', 0),
(54, '1212121', '12121212', '2016-04-16', 0),
(55, 'gjgf', 'gfj', '2016-04-16', 0),
(56, 'sadf', 'sadf', '2016-04-16', 0),
(57, 'sadf', 'sadf', '2016-04-16', 0),
(58, 'dafg', 'dfg', '2016-04-16', 0),
(59, 'dafg', 'dfg', '2016-04-16', 0),
(60, 'sadf', 'sadf', '2016-04-16', 0),
(61, 'Ð°Ð¿Ð¾', 'Ð¿Ð°Ð¾', '2016-04-16', 27527),
(62, '222', '1111', '2016-04-16', 28073),
(63, '123', '222', '2016-04-17', 117);

--
-- Triggers `processes`
--
DELIMITER $$
CREATE TRIGGER `onDeleteProcessTrigger` AFTER DELETE ON `processes`
 FOR EACH ROW BEGIN
    DELETE FROM approach WHERE approach.idProcess = old.id;
  END
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `approach`
--
ALTER TABLE `approach`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `operations`
--
ALTER TABLE `operations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `processes`
--
ALTER TABLE `processes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `approach`
--
ALTER TABLE `approach`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=65;
--
-- AUTO_INCREMENT for table `operations`
--
ALTER TABLE `operations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `processes`
--
ALTER TABLE `processes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=64;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
