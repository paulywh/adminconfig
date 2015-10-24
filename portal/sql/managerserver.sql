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

DROP TABLE IF EXISTS `config_jianshenfang`;
CREATE TABLE `config_jianshenfang`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL COMMENT '场馆名称',
  `cgalert` varchar(120) NOT NULL COMMENT '场馆描述性文字',
  `titleimg` varchar(60) DEFAULT NULL COMMENT '场馆头像',
  `bodyimg` varchar(150) DEFAULT NULL COMMENT '场馆其他照片',
  `opentime` int(11) DEFAULT NULL COMMENT '开门时间',
  `closetime` int(11) NOT NULL COMMENT '关门时间',
  `address` varchar(120) NOT NULL COMMENT '场馆地址',
  `phone` varchar(30) NOT NULL COMMENT '场馆联系方式',
  `level` int(11) NOT NULL COMMENT '场馆等级',
  `lbsx` varchar(10) NOT NULL COMMENT 'x',
  `lbsy` varchar(10) NOT NULL COMMENT 'y',
  `oldprice` int(11) NOT NULL COMMENT '场馆原价',
  `newprice` int(11) NOT NULL COMMENT '场馆优惠价',
  `count` int(11) COMMENT '限制人数',
  `yearprice` int(11) COMMENT '年卡价位',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=97 DEFAULT CHARSET=utf8;

INSERT INTO `config_jianshenfang` VALUES ('1', '新生健身（北苑店）', '朝阳区朝阳区北苑东路山水蓝维小区(勇士营郊野公园西门对面)', '20150626163702_16630.jpg', '20150617223300_79353.jpg;20150617223309_66538.jpg;', '10:00', '22:00','朝阳区朝阳区北苑东路山水蓝维小区(勇士营郊野公园西门对面)','010-57958688','1','40.036751', '116.441098','44', '30',10,8888);

DROP TABLE IF EXISTS `config_jianshenfang_service`;
CREATE TABLE `config_jianshenfang_service` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(2) CHARACTER SET utf8 DEFAULT NULL COMMENT '服务名称',
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

INSERT INTO `config_jianshenfang_service` VALUES ('1', '健身');
INSERT INTO `config_jianshenfang_service` VALUES ('2', '游泳');
INSERT INTO `config_jianshenfang_service` VALUES ('3', '私教');
INSERT INTO `config_jianshenfang_service` VALUES ('4', '瑜珈');
INSERT INTO `config_jianshenfang_service` VALUES ('5', '免费水果');
INSERT INTO `config_jianshenfang_service` VALUES ('7', '停车场');
INSERT INTO `config_jianshenfang_service` VALUES ('8', 'WiFi');
INSERT INTO `config_jianshenfang_service` VALUES ('9', 'SPA');
INSERT INTO `config_jianshenfang_service` VALUES ('10', '空气净化器');

DROP TABLE IF EXISTS `config_jsf_jsfservice_table`;
CREATE TABLE `config_jsf_jsfservice_table` (
  `id` int(11) NOT NULL,
  `jsfserviceid` int(11) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `config_jianshenfang_course`;
CREATE TABLE `config_jianshenfang_course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL COMMENT '课程名称',
  `desc` varchar(120) COMMENT '课程描述',
  `price` int(11) NOT NULL COMMENT '课程价格',
  `flagtry` int(11) NOT NULL COMMENT '每个人只能去一次(体验课标示)1是0否',
  `limitpeople` int(11) NOT NULL COMMENT '课程是否限制人数,不限制为0',
  `settype` int(11) COMMENT '预约类型0开始前多久不可以预约1当天不可以预约2结束前多久不可以预约',
  `setvalue` int(11) COMMENT '预约值',
  `flagcancle` int(11) NOT NULL COMMENT '是否可以取消1是0否',
  `cancletype` int(11) COMMENT '取消类型0开始前1结束前',
  `cancletime` int(11) COMMENT '开始前n小时可以取消',
  `starttime` int(11) COMMENT '开始时间',
  `endtime` int(11) COMMENT '结束时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
INSERT INTO `config_jianshenfang_course` VALUES (1, '伸展运动', '小学生广播体操第二节', 60, 0, 0, 0, 1, 1, 0, 3,1100101,1010101);

DROP TABLE IF EXISTS `config_jsf_jsfcourse_table`;
CREATE TABLE `config_jsf_jsfcourse_table` (
  `id` int(11) NOT NULL,
  `courseid` int(11) NOT NULL,
  `week` int(11) NOT NULL COMMENT '周几1-7'
) ENGINE=MyISAM AUTO_INCREMENT=97 DEFAULT CHARSET=utf8;
INSERT INTO `config_jsf_jsfcourse_table` VALUES (1,1,6);

DROP TABLE IF EXISTS `config_user`;
CREATE TABLE `config_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(30) NOT NULL COMMENT '用户手机号码',
  `udid` varchar(126) NOT NULL COMMENT '设备唯一号',
  `code` int(11) NOT NULL COMMENT '验证码',
  `token` varchar(50) COMMENT '生成唯一码',
  `headimg` varchar(50) COMMENT '用户头像',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `config_jsfbbs`;
CREATE TABLE `config_jsfbbs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jsfid` int(11) NOT NULL COMMENT '健身房id',
  `userid` int(11) NOT NULL COMMENT '用户id',
  `username` varchar(50) NOT NULL COMMENT '留言人',
  `level` int(11) COMMENT '给了多少分',
  `content` varchar(200) COMMENT '评论内容',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
INSERT INTO `config_jsfbbs` VALUES (1,1,6,'王二小',5,'日了狗');
