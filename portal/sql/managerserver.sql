/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50611
Source Host           : localhost:3306
Source Database       : managerserver

Target Server Type    : MYSQL
Target Server Version : 50611
File Encoding         : 65001

Date: 2015-09-22 22:15:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `config_menus`
-- ----------------------------
DROP TABLE IF EXISTS `config_menus`;
CREATE TABLE `config_menus` (
  `menuid` varchar(50) NOT NULL,
  `menuname` varchar(50) DEFAULT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`menuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config_menus
-- ----------------------------
INSERT INTO `config_menus` VALUES ('1', '考勤', 'k.jpg', 'useraction!toKaoQin.action');
INSERT INTO `config_menus` VALUES ('2', '用户', 'yh.jpg', 'adminfile/configuser.jsp');

-- ----------------------------
-- Table structure for `config_menusgroup`
-- ----------------------------
DROP TABLE IF EXISTS `config_menusgroup`;
CREATE TABLE `config_menusgroup` (
  `menuid` varchar(50) NOT NULL,
  `icon` varchar(50) DEFAULT NULL,
  `menuname` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`menuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config_menusgroup
-- ----------------------------
INSERT INTO `config_menusgroup` VALUES ('1', '1.jpg', 'OA');
INSERT INTO `config_menusgroup` VALUES ('2', '2.jpg', 'OFFICE');
INSERT INTO `config_menusgroup` VALUES ('3', '3.jpg', '用户管理');

-- ----------------------------
-- Table structure for `config_menusgroup_menus`
-- ----------------------------
DROP TABLE IF EXISTS `config_menusgroup_menus`;
CREATE TABLE `config_menusgroup_menus` (
  `id` int(10) NOT NULL,
  `menusgroupid` varchar(50) NOT NULL,
  `menusid` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config_menusgroup_menus
-- ----------------------------
INSERT INTO `config_menusgroup_menus` VALUES ('1', '3', '2');

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

-- ----------------------------
-- Table structure for `config_usertable_menusgroup`
-- ----------------------------
DROP TABLE IF EXISTS `config_usertable_menusgroup`;
CREATE TABLE `config_usertable_menusgroup` (
  `id` int(10) NOT NULL,
  `userid` int(10) NOT NULL,
  `menugroupid` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config_usertable_menusgroup
-- ----------------------------
INSERT INTO `config_usertable_menusgroup` VALUES ('2', '0', '3');
