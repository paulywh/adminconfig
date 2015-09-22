package com.computercenter.service.user.dao;

import java.util.List;

import com.computercenter.service.user.bean.MenusBean;
import com.computercenter.service.user.bean.UserBean;

public interface UserDao {
	UserBean getUser(UserBean ub);
	
	/**
	 * 获取用户权限列表
	 * @param userid 用户id
	 * @return 权限列表
	 */
	List<MenusBean> getUserLimit(int userid);
}
