package com.computercenter.service.bean;

import java.io.Serializable;

//用户数据
public class User implements Serializable
{

    /**
     * 注释内容
     */
    private static final long serialVersionUID = -1629958576858261109L;
    private int id;
    private String phone;//用户手机号码
    private String udid;//设备唯一号
    private String code;//验证码6位
    private String token;//生成唯一码
    private String headimg;//用户头像
    private long getcodetime;//验证码下发时间
    public long getGetcodetime()
    {
        return getcodetime;
    }
    public void setGetcodetime(long getcodetime)
    {
        this.getcodetime = getcodetime;
    }
    public int getId()
    {
        return id;
    }
    public void setId(int id)
    {
        this.id = id;
    }
    public String getPhone()
    {
        return phone;
    }
    public void setPhone(String phone)
    {
        this.phone = phone;
    }
    public String getUdid()
    {
        return udid;
    }
    public void setUdid(String udid)
    {
        this.udid = udid;
    }
    public String getCode()
    {
        return code;
    }
    public void setCode(String code)
    {
        this.code = code;
    }
    public String getToken()
    {
        return token;
    }
    public void setToken(String token)
    {
        this.token = token;
    }
    public String getHeadimg()
    {
        return headimg;
    }
    public void setHeadimg(String headimg)
    {
        this.headimg = headimg;
    }
}
