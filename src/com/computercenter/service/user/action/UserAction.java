package com.computercenter.service.user.action;

import java.io.IOException;
import java.util.Map;

import javax.mail.MessagingException;
import org.apache.struts2.interceptor.RequestAware;
import com.computercenter.service.user.manager.RegisterManager;
import com.opensymphony.xwork2.ActionSupport;

public class UserAction extends ActionSupport implements RequestAware{

	private static final long serialVersionUID = -6007394476923963291L;

	private RegisterManager registerManagerAction;
	
	private String username;
	
	private String assword;
	
	public String doLogin() throws IOException, MessagingException
    {
		System.out.println(username + "-------" + assword);
		return "success";
    }
	
	@Override
	public void setRequest(Map<String, Object> arg0) {
		
	}

	public RegisterManager getRegisterManagerAction() {
		return registerManagerAction;
	}

	public void setRegisterManagerAction(RegisterManager registerManagerAction) {
		this.registerManagerAction = registerManagerAction;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getAssword() {
		return assword;
	}

	public void setAssword(String assword) {
		this.assword = assword;
	}
}
