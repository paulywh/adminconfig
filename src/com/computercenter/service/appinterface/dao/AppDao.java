package com.computercenter.service.appinterface.dao;

import java.util.List;

import com.computercenter.service.appinterface.bean.Course;
import com.computercenter.service.appinterface.bean.JianShenFangCourseTable;
import com.computercenter.service.bean.JSFBbs;
import com.computercenter.service.bean.JianShenFang;
import com.computercenter.service.bean.JsfService;
import com.computercenter.service.bean.User;
import com.computercenter.service.bean.UserYouHuiJuanTable;

public interface AppDao
{
    //获取健身房信息
    List<JianShenFang> getChangGuanInfo(int pageNo,int pageSize);
    
    //健身房相关服务
    List<JsfService> getJsfService(int id);
    
    //获取健身房单个健身房数据
    JianShenFang getJianShenFangById(int jsfid);
    
    //查询所有课程
    List<Course> getCourseList();
    
    //通过手机号码获取用户信息
    User getUserByPhone(String phone);
    
    //注册第一步 部分数据入库
    boolean addUserDataStep1(User user);
    
    //检测验证码
    User checkCode(String code,String phone);
    
    //添加token到用户表
    void addTokenToUser(String phone,String token);
    
    //查询健身房留言数据
    List<JSFBbs> jsfBBSList(int jsfid);
    
    //修改用户验证码
    boolean updateUserCodeByPhone(String code,String phone);
    
    //查询健身房和课程关联数据
    List<JianShenFangCourseTable> getCourseByJSFId(int jsfid);
    
    //查询用户优惠卷
    List<UserYouHuiJuanTable> getUserYouHuiJuanTable(int userid);
}
