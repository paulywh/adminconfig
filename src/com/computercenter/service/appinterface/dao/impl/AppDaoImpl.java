package com.computercenter.service.appinterface.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

import com.computercenter.service.appinterface.bean.Course;
import com.computercenter.service.appinterface.dao.AppDao;
import com.computercenter.service.bean.JSFBbs;
import com.computercenter.service.bean.JianShenFang;
import com.computercenter.service.bean.JsfService;
import com.computercenter.service.bean.User;

public class AppDaoImpl extends SqlMapClientDaoSupport implements AppDao
{

    @Override
    public List<JianShenFang> getChangGuanInfo(int pageNo, int pageSize)
    {
        Map<String,Integer> mappar = new HashMap<String,Integer>();
        mappar.put("starpage", pageNo * pageSize);
        mappar.put("endpage", (pageNo + 1) * pageSize);
        
        @SuppressWarnings("unchecked")
        List<JianShenFang> cdlist = (List<JianShenFang>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.queryappcdinfo",mappar);
        return cdlist;
    }
    
    @Override
    public JianShenFang getJianShenFangById(int jsfid)
    {
        return (JianShenFang)getSqlMapClientTemplate().queryForObject("t_mc_appinfo.queryjianshenfangbyid",jsfid);
    }

    @Override
    public List<JsfService> getJsfService(int jsfid)
    {
        @SuppressWarnings("unchecked")
        List<JsfService> jsflist = (List<JsfService>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.queryjsfservice",jsfid);
        return jsflist;
    }

    @Override
    public List<Course> getChangCiList(int changdiid)
    {
        @SuppressWarnings("unchecked")
        List<Course> xcclist = (List<Course>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.querychangcibychangdiid",changdiid);
        return xcclist;
    }

    @Override
    public boolean addUserDataStep1(User user)
    {
        getSqlMapClientTemplate().insert("t_mc_appinfo.registerStep1", user);
        return true;
    }

    @Override
    public boolean checkCode(String code,String phone)
    {
        Map<String,String> mappar = new HashMap<String,String>();
        mappar.put("code",code);
        mappar.put("phone",phone);
        @SuppressWarnings("unchecked")
        List<User> cdlist = (List<User>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.checkcode",mappar);
        return cdlist.size() > 0;
    }

    @Override
    public void addTokenToUser(String phone, String token)
    {
        Map<String,String> mappar = new HashMap<String,String>();
        mappar.put("token",token);
        mappar.put("phone",phone);
        getSqlMapClientTemplate().update("t_mc_appinfo.updateUserToken", mappar);
    }
    
    @Override
    public List<JSFBbs> jsfBBSList(int jsfid)
    {
        @SuppressWarnings("unchecked")
        List<JSFBbs> jsflist = (List<JSFBbs>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.queryjsfBBSList", jsfid);
        return jsflist;
    }
}
