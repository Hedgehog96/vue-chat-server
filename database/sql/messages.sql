CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '记录id',
  `messages` text NOT NULL COMMENT '聊天记录',
  `status` char(2)  NOT NULL COMMENT '接收状态',
  `send_time` varchar(20) NOT NULL COMMENT '发生时间',
  `from_user_id` int(11) NOT NULL COMMENT '发送者ID',
  `to_user_id` int(11) NOT NULL COMMENT '接收者ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='聊天记录';