package com.computercenter.service.user.bean;

import java.io.Serializable;
import java.util.List;

public class MenusBean implements Serializable{
	private static final long serialVersionUID = -6754793881194784373L;
	private String menuid;
	private String icon;
	private String menuname;
	private List<Menus> menus;
	public String getMenuid() {
		return menuid;
	}
	public void setMenuid(String menuid) {
		this.menuid = menuid;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	public String getMenuname() {
		return menuname;
	}
	public void setMenuname(String menuname) {
		this.menuname = menuname;
	}
	public List<Menus> getMenus() {
		return menus;
	}
	public void setMenus(List<Menus> menus) {
		this.menus = menus;
	}
}
