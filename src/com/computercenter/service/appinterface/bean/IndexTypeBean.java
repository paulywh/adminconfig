package com.computercenter.service.appinterface.bean;

import java.io.Serializable;
import java.util.Map;

//首页数据
public class IndexTypeBean implements Serializable
{
    private static final long serialVersionUID = -2854939217320204649L;
    private Map<String,String> data;
    public Map<String, String> getData()
    {
        return data;
    }
    public void setData(Map<String, String> data)
    {
        this.data = data;
    }
}