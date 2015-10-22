package com.computercenter.service.bean;

import java.io.Serializable;

//健身房和健身房额外服务关系表
public class JsfService implements Serializable
{

    /**
     * 注释内容
     */
    private static final long serialVersionUID = 6348161441112085868L;
    private int id;
    private String name;
    public int getId()
    {
        return id;
    }
    public void setId(int id)
    {
        this.id = id;
    }
    public String getName()
    {
        return name;
    }
    public void setName(String name)
    {
        this.name = name;
    }
}
