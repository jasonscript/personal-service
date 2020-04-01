CREATE TABLE `gains` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `date` date NOT NULL,
  `channel` varchar(20) NOT NULL,
  `money` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
