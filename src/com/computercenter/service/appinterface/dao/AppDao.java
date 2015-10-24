package com.computercenter.service.appinterface.dao;

import java.util.List;

import com.computercenter.service.appinterface.bean.Course;
import com.computercenter.service.bean.JSFBbs;
import com.computercenter.service.bean.JianShenFang;
import com.computercenter.service.bean.JsfService;
import com.computercenter.service.bean.User;

public interface AppDao
{
    //获取健身房信息
    List<JianShenFang> getChangGuanInfo(int pageNo,int pageSize);
    
    //健身房相关服务
    List<JsfService> getJsfService(int id);
    
    //获取健身房单个健身房数据
    JianShenFang getJianShenFangById(int jsfid);
    
    List<Course> getChangCiList(int changdiid);
    
    //注册第一步 部分数据入库
    boolean addUserDataStep1(User user);
    
    //检测验证码
    boolean checkCode(String code,String phone);
    
    //添加token到用户表
    void addTokenToUser(String phone,String token);
    
    //查询健身房留言数据
    List<JSFBbs> jsfBBSList(int jsfid);
}
