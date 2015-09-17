package com.computercenter.service.user.dao.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

import com.computercenter.service.user.bean.UserBean;
import com.computercenter.service.user.dao.UserDao;

public class UserDaoImpl extends SqlMapClientDaoSupport implements UserDao{

	@Override
	public UserBean getUser(UserBean ub) {
		Map<String,String> mappar = new HashMap<String,String>();
		mappar.put("username", ub.getUsername());
		mappar.put("password", ub.getPassword());
        UserBean user = (UserBean)getSqlMapClientTemplate().queryForObject("t_mc_userinfo.queryuserinfo",mappar);
        return user;
	}

}
