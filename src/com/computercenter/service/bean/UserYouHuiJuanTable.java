package com.computercenter.service.bean;

import java.io.Serializable;

//用户所得优惠卷表
public class UserYouHuiJuanTable implements Serializable
{
    private static final long serialVersionUID = -7594991768786142686L;
    private int id;
    private int yhjid;//优惠卷id
    private int userid;//用户id
    private int price;//优惠卷金额
    private long overtim;//过期时间
    private int isuser;//是否使用
    public int getId()
    {
        return id;
    }
    public void setId(int id)
    {
        this.id = id;
    }
    public int getYhjid()
    {
        return yhjid;
    }
    public void setYhjid(int yhjid)
    {
        this.yhjid = yhjid;
    }
    public int getUserid()
    {
        return userid;
    }
    public void setUserid(int userid)
    {
        this.userid = userid;
    }
    public int getPrice()
    {
        return price;
    }
    public void setPrice(int price)
    {
        this.price = price;
    }
    public long getOvertim()
    {
        return overtim;
    }
    public void setOvertim(long overtim)
    {
        this.overtim = overtim;
    }
    public int getIsuser()
    {
        return isuser;
    }
    public void setIsuser(int isuser)
    {
        this.isuser = isuser;
    }
}
