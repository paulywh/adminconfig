/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50611
Source Host           : localhost:3306
Source Database       : managerserver

Target Server Type    : MYSQL
Target Server Version : 50611
File Encoding         : 65001

Date: 2015-09-17 21:43:18
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

-- ----------------------------
-- Table structure for `config_menushouse`
-- ----------------------------
DROP TABLE IF EXISTS `config_menushouse`;
CREATE TABLE `config_menushouse` (
  `id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config_menushouse
-- ----------------------------

-- ----------------------------
-- Table structure for `config_menushouse_menusgroup`
-- ----------------------------
DROP TABLE IF EXISTS `config_menushouse_menusgroup`;
CREATE TABLE `config_menushouse_menusgroup` (
  `id` int(10) NOT NULL,
  `shouseid` varchar(50) NOT NULL,
  `menusgroupid` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config_menushouse_menusgroup
-- ----------------------------

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
-- Table structure for `config_usertable_menushouse`
-- ----------------------------
DROP TABLE IF EXISTS `config_usertable_menushouse`;
CREATE TABLE `config_usertable_menushouse` (
  `id` int(10) NOT NULL,
  `userid` int(10) NOT NULL,
  `menushouseid` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config_usertable_menushouse
-- ----------------------------
