package com.computercenter.service.bean;

import java.io.Serializable;

public class JSFBbs implements Serializable
{
    private static final long serialVersionUID = -9039670063796047389L;
    private int id;
    private int jsfid;//健身房id
    private int userid;//用户id
    private String username;//留言人,
    private int level;//给了多少分
    private String content;//评论内容
    public int getId()
    {
        return id;
    }
    public void setId(int id)
    {
        this.id = id;
    }
    public int getJsfid()
    {
        return jsfid;
    }
    public void setJsfid(int jsfid)
    {
        this.jsfid = jsfid;
    }
    public int getUserid()
    {
        return userid;
    }
    public void setUserid(int userid)
    {
        this.userid = userid;
    }
    public String getUsername()
    {
        return username;
    }
    public void setUsername(String username)
    {
        this.username = username;
    }
    public int getLevel()
    {
        return level;
    }
    public void setLevel(int level)
    {
        this.level = level;
    }
    public String getContent()
    {
        return content;
    }
    public void setContent(String content)
    {
        this.content = content;
    }
}
