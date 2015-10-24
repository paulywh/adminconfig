package com.computercenter.service.appinterface.bean;

import java.io.Serializable;

//课程
public class Course implements Serializable
{
    private static final long serialVersionUID = -4280575248694307909L;
    private int id;
    private String name;
    private String desc;
    private float price;
    private int flagtry;
    private int settype;
    private int setvalue;
    private int flagcancle;
    private int cancletype;
    private int cancletime;
    private int starttime;
    private int endtime;
    private int isview;//是否展示1是0否
    
    public int getIsview()
    {
        return isview;
    }
    public void setIsview(int isview)
    {
        this.isview = isview;
    }
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
    public String getDesc()
    {
        return desc;
    }
    public void setDesc(String desc)
    {
        this.desc = desc;
    }
    public int getFlagtry()
    {
        return flagtry;
    }
    public void setFlagtry(int flagtry)
    {
        this.flagtry = flagtry;
    }
    public int getSettype()
    {
        return settype;
    }
    public void setSettype(int settype)
    {
        this.settype = settype;
    }
    public int getSetvalue()
    {
        return setvalue;
    }
    public void setSetvalue(int setvalue)
    {
        this.setvalue = setvalue;
    }
    public int getFlagcancle()
    {
        return flagcancle;
    }
    public void setFlagcancle(int flagcancle)
    {
        this.flagcancle = flagcancle;
    }
    public int getCancletype()
    {
        return cancletype;
    }
    public void setCancletype(int cancletype)
    {
        this.cancletype = cancletype;
    }
    public int getCancletime()
    {
        return cancletime;
    }
    public void setCancletime(int cancletime)
    {
        this.cancletime = cancletime;
    }
}
