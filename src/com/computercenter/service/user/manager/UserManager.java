package com.computercenter.service.user.manager;

import java.util.List;

import com.computercenter.service.user.bean.MenusBean;
import com.computercenter.service.user.bean.UserBean;

public interface UserManager {
	List<MenusBean> checkUser(UserBean ub);
}
