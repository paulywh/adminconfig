/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50611
Source Host           : localhost:3306
Source Database       : managerserver

Target Server Type    : MYSQL
Target Server Version : 50611
File Encoding         : 65001

Date: 2015-09-17 21:00:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `config_usertable`
-- ----------------------------
DROP TABLE IF EXISTS `config_usertable`;
CREATE TABLE `config_usertable` (
  `id` int(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `loginname` varchar(50) DEFAULT NULL,
  `qyname` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `checkcode` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config_usertable
-- ----------------------------
INSERT INTO `config_usertable` VALUES ('0', 'wangerxiao', 'wangerxiao', null, null, null, null);
