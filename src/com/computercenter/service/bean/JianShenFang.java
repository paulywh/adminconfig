package com.computercenter.service.bean;

import java.io.Serializable;

public class JianShenFang implements Serializable
{
    private static final long serialVersionUID = 4676895260989024277L;
    private int id;
    private String name;
    private String cgalert;
    private String titleimg;
    private String bodyimg;
    private int opentime;
    private int closetime;
    private String address;
    private String phone;
    private int level;
    private String lbsx;
    private String lbsy;
    private int oldprice;
    private int newprice;
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
    public String getCgalert()
    {
        return cgalert;
    }
    public void setCgalert(String cgalert)
    {
        this.cgalert = cgalert;
    }
    public String getTitleimg()
    {
        return titleimg;
    }
    public void setTitleimg(String titleimg)
    {
        this.titleimg = titleimg;
    }
    public String getBodyimg()
    {
        return bodyimg;
    }
    public void setBodyimg(String bodyimg)
    {
        this.bodyimg = bodyimg;
    }
    public int getOpentime()
    {
        return opentime;
    }
    public void setOpentime(int opentime)
    {
        this.opentime = opentime;
    }
    public int getClosetime()
    {
        return closetime;
    }
    public void setClosetime(int closetime)
    {
        this.closetime = closetime;
    }
    public String getAddress()
    {
        return address;
    }
    public void setAddress(String address)
    {
        this.address = address;
    }
    public String getPhone()
    {
        return phone;
    }
    public void setPhone(String phone)
    {
        this.phone = phone;
    }
    public int getLevel()
    {
        return level;
    }
    public void setLevel(int level)
    {
        this.level = level;
    }
    public String getLbsx()
    {
        return lbsx;
    }
    public void setLbsx(String lbsx)
    {
        this.lbsx = lbsx;
    }
    public String getLbsy()
    {
        return lbsy;
    }
    public void setLbsy(String lbsy)
    {
        this.lbsy = lbsy;
    }
    public int getOldprice()
    {
        return oldprice;
    }
    public void setOldprice(int oldprice)
    {
        this.oldprice = oldprice;
    }
    public int getNewprice()
    {
        return newprice;
    }
    public void setNewprice(int newprice)
    {
        this.newprice = newprice;
    }
}
