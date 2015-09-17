package com.computercenter.service.user.manager.impl;

import com.computercenter.service.user.bean.UserBean;
import com.computercenter.service.user.dao.UserDao;
import com.computercenter.service.user.manager.UserManager;

public class UserManagerImpl implements UserManager {

	private UserDao userDao;
	
	@Override
	public boolean checkUser(UserBean ub) {
		UserBean ubean = userDao.getUser(ub);
		if(ubean != null)
		{
			return true;
		}
		return false;
	}
	
	public UserDao getUserDao() {
		return userDao;
	}
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
}
