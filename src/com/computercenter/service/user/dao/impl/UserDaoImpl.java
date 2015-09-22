package com.computercenter.service.user.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

import com.computercenter.service.user.bean.Menus;
import com.computercenter.service.user.bean.MenusBean;
import com.computercenter.service.user.bean.MenusBeanList;
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

	@SuppressWarnings("unchecked")
	@Override
	public List<MenusBean> getUserLimit(int userid) {
		List<MenusBean> mblist = getSqlMapClientTemplate().queryForList("t_mc_userinfo.queryusermenusgroup",userid + "");
		for(MenusBean mb : mblist)
		{
			List<Menus> menus = getSqlMapClientTemplate().queryForList("t_mc_userinfo.queryusermenus",mb.getMenuid());
			mb.setMenus(menus);
		}
		return mblist;
	}

}
