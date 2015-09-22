package com.computercenter.service.user.action;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import javax.mail.MessagingException;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.RequestAware;

import com.alibaba.fastjson.JSONObject;
import com.computercenter.service.user.bean.MenusBean;
import com.computercenter.service.user.bean.UserBean;
import com.computercenter.service.user.manager.UserManager;
import com.opensymphony.xwork2.ActionSupport;

public class UserAction extends ActionSupport implements RequestAware{

	private static final long serialVersionUID = -6007394476923963291L;

	private UserManager userManager;
	
	private String username;
	
	private String password;
	
	public String doLogin() throws IOException, MessagingException
    {
		UserBean ub = new UserBean();
		ub.setUsername(username);
		ub.setPassword(password);
		List<MenusBean> mblist = userManager.checkUser(ub);
		if(mblist != null)
		{
			JSONObject json = new JSONObject();
	        json.put("basic", mblist);
	        ServletActionContext.getRequest().setAttribute("userlimitjson", json.toJSONString());
			return "success";
		}
		else
		{
			return "error";	
		}
    }
	
	@Override
	public void setRequest(Map<String, Object> arg0) {
	}


	public UserManager getUserManager() {
		return userManager;
	}

	public void setUserManager(UserManager userManager) {
		this.userManager = userManager;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
