package com.computercenter.service.user.bean;

import java.io.Serializable;

public class Menus implements Serializable{
	private static final long serialVersionUID = -5033404121317611943L;
	private String menuid;
	private String menuname;
	private String icon;
	private String url;
	public String getMenuid() {
		return menuid;
	}
	public void setMenuid(String menuid) {
		this.menuid = menuid;
	}
	public String getMenuname() {
		return menuname;
	}
	public void setMenuname(String menuname) {
		this.menuname = menuname;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
}
