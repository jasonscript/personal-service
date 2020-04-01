CREATE TABLE `temperature` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `time` datetime NOT NULL,
  `value` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
