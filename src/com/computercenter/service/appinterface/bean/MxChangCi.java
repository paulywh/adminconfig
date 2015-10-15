package com.computercenter.service.appinterface.bean;

import java.io.Serializable;

public class MxChangCi implements Serializable
{
    private static final long serialVersionUID = -4280575248694307909L;
    private int id;
    private int changdiid;
    private String name;
    private int starttime;
    private int endtime;
    private float price;
    private int yuyuezhuangtai;
    private int type;
    private String weekday;
    private int yue;
    private int renshu;
    private int cishu;
    public int getId()
    {
        return id;
    }
    public void setId(int id)
    {
        this.id = id;
    }
    public int getChangdiid()
    {
        return changdiid;
    }
    public void setChangdiid(int changdiid)
    {
        this.changdiid = changdiid;
    }
    public String getName()
    {
        return name;
    }
    public void setName(String name)
    {
        this.name = name;
    }
    public int getStarttime()
    {
        return starttime;
    }
    public void setStarttime(int starttime)
    {
        this.starttime = starttime;
    }
    public int getEndtime()
    {
        return endtime;
    }
    public void setEndtime(int endtime)
    {
        this.endtime = endtime;
    }
    public float getPrice()
    {
        return price;
    }
    public void setPrice(float price)
    {
        this.price = price;
    }
    public int getYuyuezhuangtai()
    {
        return yuyuezhuangtai;
    }
    public void setYuyuezhuangtai(int yuyuezhuangtai)
    {
        this.yuyuezhuangtai = yuyuezhuangtai;
    }
    public int getType()
    {
        return type;
    }
    public void setType(int type)
    {
        this.type = type;
    }
    public String getWeekday()
    {
        return weekday;
    }
    public void setWeekday(String weekday)
    {
        this.weekday = weekday;
    }
    public int getYue()
    {
        return yue;
    }
    public void setYue(int yue)
    {
        this.yue = yue;
    }
    public int getRenshu()
    {
        return renshu;
    }
    public void setRenshu(int renshu)
    {
        this.renshu = renshu;
    }
    public int getCishu()
    {
        return cishu;
    }
    public void setCishu(int cishu)
    {
        this.cishu = cishu;
    }
}
