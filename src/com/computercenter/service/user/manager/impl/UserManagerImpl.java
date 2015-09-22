package com.computercenter.service.user.manager.impl;

import java.util.List;

import com.computercenter.service.user.bean.MenusBean;
import com.computercenter.service.user.bean.UserBean;
import com.computercenter.service.user.dao.UserDao;
import com.computercenter.service.user.manager.UserManager;

public class UserManagerImpl implements UserManager {

	private UserDao userDao;
	
	@Override
	public List<MenusBean> checkUser(UserBean ub) {
		UserBean ubean = userDao.getUser(ub);
		if(ubean != null)
		{
			//查询权限
			List<MenusBean> mblist = userDao.getUserLimit(ubean.getId());
			return mblist;
		}
		return null;
	}
	
	public UserDao getUserDao() {
		return userDao;
	}
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
}
