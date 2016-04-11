-- phpMyAdmin SQL Dump
-- version 4.4.13.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 11, 2016 at 08:45 AM
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
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `approach`
--

INSERT INTO `approach` (`id`, `idProcess`, `name`, `updated`, `comment`, `videoFilename`) VALUES
(37, 34, 'Ð¿Ð¾Ð´Ñ…Ð¾Ð´1', '2016-04-11', 'sdaf', '');

-- --------------------------------------------------------

--
-- Table structure for table `operations`
--

CREATE TABLE IF NOT EXISTS `operations` (
  `id` int(11) NOT NULL,
  `idApproach` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `updated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `processes`
--

CREATE TABLE IF NOT EXISTS `processes` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `comment` text,
  `updated` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `processes`
--

INSERT INTO `processes` (`id`, `name`, `comment`, `updated`) VALUES
(33, 'Ð¿Ñ€Ð¾Ñ†ÐµÑÑ 2', '', '2016-04-11'),
(34, 'Ð¿Ñ€Ð¾Ñ†ÐµÑÑ 3', 'ddd', '2016-04-11');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `processes`
--
ALTER TABLE `processes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=35;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
