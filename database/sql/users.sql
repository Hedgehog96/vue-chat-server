CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(50) NOT NULL COMMENT '登录账号',
  `password` varchar(50) NOT NULL COMMENT '登录密码',
  `nickname` varchar(255) NOT NULL COMMENT '昵称',
  `sex` varchar(10) NOT NULL COMMENT '性别',
  `avatar_url` varchar(500) NOT NULL COMMENT '头像',
  `sign` varchar(255) DEFAULT NULL COMMENT '签名',
  `city` varchar(30) NOT NULL COMMENT '城市',
  `is_online` varchar(20) NOT NULL COMMENT '在线',
  `create_time` varchar(20) NOT NULL COMMENT '注册时间',
  `update_time` varchar(20) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户';