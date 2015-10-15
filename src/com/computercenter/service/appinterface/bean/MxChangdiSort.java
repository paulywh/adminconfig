package com.computercenter.service.appinterface.bean;

import java.io.Serializable;

public class MxChangdiSort implements Serializable
{
    private static final long serialVersionUID = -7211312797989817198L;
    private int id;
    private String Key;
    private String value;
    private int order;
    public int getId()
    {
        return id;
    }
    public void setId(int id)
    {
        this.id = id;
    }
    public String getKey()
    {
        return Key;
    }
    public void setKey(String key)
    {
        Key = key;
    }
    public String getValue()
    {
        return value;
    }
    public void setValue(String value)
    {
        this.value = value;
    }
    public int getOrder()
    {
        return order;
    }
    public void setOrder(int order)
    {
        this.order = order;
    }
}
