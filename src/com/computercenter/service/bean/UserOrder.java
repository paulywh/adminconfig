package com.computercenter.service.bean;

import java.io.Serializable;

public class UserOrder implements Serializable
{
    private static final long serialVersionUID = 1L;
    private int id;
    private String orderid;//订单id
    private int jsfid;//健身房id
    private int yhjid;//优惠卷id
    private int userid;//用户id
    private String maketime;//预约时间
    private int price;//消费金额
    private int sumprice;//总金额
    private int youhuiprice;//优惠金额
    private String coursename;//课程名字
    private String usertime;//使用时间
    private long ordertime;//下单日期
    private int isgo;//是否去了1是0否
    private int count;//可以去几个人
    private int pay;//是否支付1是0否
    private int paytype;//支付类型
    private long paytime;//支付时间
    public int getSumprice()
    {
        return sumprice;
    }
    public void setSumprice(int sumprice)
    {
        this.sumprice = sumprice;
    }
    public int getYouhuiprice()
    {
        return youhuiprice;
    }
    public void setYouhuiprice(int youhuiprice)
    {
        this.youhuiprice = youhuiprice;
    }
    public String getCoursename()
    {
        return coursename;
    }
    public void setCoursename(String coursename)
    {
        this.coursename = coursename;
    }
    public String getUsertime()
    {
        return usertime;
    }
    public void setUsertime(String usertime)
    {
        this.usertime = usertime;
    }
    public int getId()
    {
        return id;
    }
    public void setId(int id)
    {
        this.id = id;
    }
    public String getOrderid()
    {
        return orderid;
    }
    public void setOrderid(String orderid)
    {
        this.orderid = orderid;
    }
    public int getJsfid()
    {
        return jsfid;
    }
    public void setJsfid(int jsfid)
    {
        this.jsfid = jsfid;
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
    public String getMaketime()
    {
        return maketime;
    }
    public void setMaketime(String maketime)
    {
        this.maketime = maketime;
    }
    public int getPrice()
    {
        return price;
    }
    public void setPrice(int price)
    {
        this.price = price;
    }
    public long getOrdertime()
    {
        return ordertime;
    }
    public void setOrdertime(long ordertime)
    {
        this.ordertime = ordertime;
    }
    public int getIsgo()
    {
        return isgo;
    }
    public void setIsgo(int isgo)
    {
        this.isgo = isgo;
    }
    public int getCount()
    {
        return count;
    }
    public void setCount(int count)
    {
        this.count = count;
    }
    public int getPay()
    {
        return pay;
    }
    public void setPay(int pay)
    {
        this.pay = pay;
    }
    public int getPaytype()
    {
        return paytype;
    }
    public void setPaytype(int paytype)
    {
        this.paytype = paytype;
    }
    public long getPaytime()
    {
        return paytime;
    }
    public void setPaytime(long paytime)
    {
        this.paytime = paytime;
    }
}
