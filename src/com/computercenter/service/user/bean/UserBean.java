package com.computercenter.service.user.bean;

import java.io.Serializable;

public class UserBean implements Serializable
{
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
}
