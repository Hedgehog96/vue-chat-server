CREATE TABLE IF NOT EXISTS `friends` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '唯一标识',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `friend_id` int(11) DEFAULT NULL COMMENT '好友id',
  `friend_name` varchar(50) DEFAULT NULL COMMENT '好友备注',
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='好友';