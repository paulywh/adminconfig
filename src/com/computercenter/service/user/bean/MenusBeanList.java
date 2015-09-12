package com.computercenter.service.user.bean;

import java.util.Map;

public class MenusBeanList {
	private Map<String,MenusBean> menus;
	
	public Map<String, MenusBean> getMenus() {
		return menus;
	}

	public void setMenus(Map<String, MenusBean> menus) {
		this.menus = menus;
	}
}
