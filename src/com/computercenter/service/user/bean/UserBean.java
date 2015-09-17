package com.computercenter.service.user.bean;

import java.io.Serializable;

public class UserBean implements Serializable
{
	private static final long serialVersionUID = 4553523212421040619L;

	private int id;
	/**
     * 登录名
     */
    private String loginName;
    
    /**
     * 企业名字
     */
    private String qyName;
    
    /**
     * 邮箱
     */
    private String email;
    
    /**
     * 验证码
     */
    private String checkCode;
    
    //用户登陆名字
    private String username;
	
    //用户登陆密码
	private String password;

    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLoginName()
    {
        return loginName;
    }

    public void setLoginName(String loginName)
    {
        this.loginName = loginName;
    }

    public String getQyName()
    {
        return qyName;
    }

    public void setQyName(String qyName)
    {
        this.qyName = qyName;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }

    public String getCheckCode()
    {
        return checkCode;
    }

    public void setCheckCode(String checkCode)
    {
        this.checkCode = checkCode;
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
