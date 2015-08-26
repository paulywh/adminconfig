package com.computercenter.service.user.dao.impl;

import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

import com.computercenter.service.user.bean.UserBean;
import com.computercenter.service.user.dao.RegisterDao;

public class RegisterDaoImpl extends SqlMapClientDaoSupport implements RegisterDao
{

    @Override
    public void add()
    {
        
    }

    @Override
    public UserBean query()
    {
        System.out.println("进入dao");
        UserBean user = (UserBean)getSqlMapClientTemplate().queryForObject("t_mc_userinfo.queryuserinfo","ywh");
        System.out.println(".............." + user.getLoginName());
        return null;
    }
    
}
