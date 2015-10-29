package com.computercenter.service.appinterface.appbean;

public class UserOrderBean
{
    private String jsfname;
    private int count;
    private int sumprice;
    private long ordertime;
    private int paytype;
    private String headimg;
    public String getHeadimg()
    {
        return headimg;
    }
    public void setHeadimg(String headimg)
    {
        this.headimg = headimg;
    }
    public String getJsfname()
    {
        return jsfname;
    }
    public void setJsfname(String jsfname)
    {
        this.jsfname = jsfname;
    }
    public int getCount()
    {
        return count;
    }
    public void setCount(int count)
    {
        this.count = count;
    }
    public int getSumprice()
    {
        return sumprice;
    }
    public void setSumprice(int sumprice)
    {
        this.sumprice = sumprice;
    }
    public long getOrdertime()
    {
        return ordertime;
    }
    public void setOrdertime(long ordertime)
    {
        this.ordertime = ordertime;
    }
    public int getPaytype()
    {
        return paytype;
    }
    public void setPaytype(int paytype)
    {
        this.paytype = paytype;
    }
}
