package com.computercenter.service.appinterface.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

import com.computercenter.service.appinterface.bean.Course;
import com.computercenter.service.appinterface.bean.JianShenFangCourseTable;
import com.computercenter.service.appinterface.dao.AppDao;
import com.computercenter.service.bean.JSFBbs;
import com.computercenter.service.bean.JianShenFang;
import com.computercenter.service.bean.JsfService;
import com.computercenter.service.bean.User;
import com.computercenter.service.bean.UserOrder;
import com.computercenter.service.bean.UserYouHuiJuanTable;

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
    public List<Course> getCourseList()
    {
        @SuppressWarnings("unchecked")
        List<Course> xcclist = (List<Course>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.queryallcourse");
        return xcclist;
    }
    
    @Override
    public User getUserByPhone(String phone)
    {
        return (User)getSqlMapClientTemplate().queryForObject("t_mc_appinfo.getuserbyphone", phone);
    }

    @Override
    public boolean addUserDataStep1(User user)
    {
        getSqlMapClientTemplate().insert("t_mc_appinfo.registerStep1", user);
        return true;
    }
    
    @Override
    public boolean updateUserCodeByPhone(String code,String phone)
    {
        Map<String,String> mappar = new HashMap<String,String>();
        mappar.put("code",code);
        mappar.put("phone",phone);
        getSqlMapClientTemplate().update("t_mc_appinfo.updateUserCode", mappar);
        return true;
    }

    @Override
    public User checkCode(String code,String phone)
    {
        Map<String,String> mappar = new HashMap<String,String>();
        mappar.put("code",code);
        mappar.put("phone",phone);
        User user = (User)getSqlMapClientTemplate().queryForObject("t_mc_appinfo.checkcode",mappar);
        return user;
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

    @Override
    public List<JianShenFangCourseTable> getCourseByJSFId(int jsfid)
    {
        @SuppressWarnings("unchecked")
        List<JianShenFangCourseTable> jsfsource = (List<JianShenFangCourseTable>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.queryjsfcoursetable", jsfid);
        return jsfsource;
    }
    
    @Override
    public List<UserYouHuiJuanTable> getUserYouHuiJuanTable(int userid)
    {
        @SuppressWarnings("unchecked")
        List<UserYouHuiJuanTable> uyyjtable = (List<UserYouHuiJuanTable>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.queryuseryouhuijuantable", userid);
        return uyyjtable;
    }

    @Override
    public void createUserOrder(UserOrder uo)
    {
        getSqlMapClientTemplate().insert("t_mc_appinfo.createOrder", uo);
    }

    @Override
    public UserOrder queryOrderByUidOid(int userid, String orderid)
    {
        UserOrder uopar = new UserOrder();
        uopar.setUserid(userid);
        uopar.setOrderid(orderid);
        Map<String,String> mappar = new HashMap<String,String>();
        mappar.put("userid",userid+"");
        mappar.put("orderid",orderid);
        UserOrder uo = (UserOrder)getSqlMapClientTemplate().queryForObject("t_mc_appinfo.queryuserorderbyuidoid", mappar);
        return uo;
    }

    @Override
    public void updateOrderPayType(String orderid, String paytype)
    {
        Map<String,String> mappar = new HashMap<String,String>();
        mappar.put("paytype",paytype);
        mappar.put("orderid",orderid);
        getSqlMapClientTemplate().update("t_mc_appinfo.updateUserOrderPayType", mappar);
    }

    @Override
    public List<UserOrder> queryOrderByUidOtype(int userid, int paytype)
    {
        Map<String,Integer> mappar = new HashMap<String,Integer>();
        mappar.put("userid",userid);
        mappar.put("paytype",paytype);
        
        @SuppressWarnings("unchecked")
        List<UserOrder> uolist = (List<UserOrder>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.queryuserorderbyuidotype", mappar);
        return uolist;
    }
    
    @Override
    public Course getCourseByCourseId(int courseid)
    {
        Course xcc = (Course)getSqlMapClientTemplate().queryForObject("t_mc_appinfo.queryallcoursebycourseid",courseid);
        return xcc;
    }
}
