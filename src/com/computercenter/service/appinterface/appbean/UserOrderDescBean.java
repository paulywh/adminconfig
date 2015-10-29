package com.computercenter.service.appinterface.appbean;

//订单详情返回
public class UserOrderDescBean
{
    private String orderid;
    private long ordertime;
    private String jsfname;
    private String maketime;//预定时间
    private int starttime;//使用时间开始
    private int endtime;//使用时间结束
    private String name;
    private int count;
    private int sumprice;
    private int youhuiprice;//优惠金额
    private int price;//实际消费金额
    private int paytype;
    public String getOrderid()
    {
        return orderid;
    }
    public void setOrderid(String orderid)
    {
        this.orderid = orderid;
    }
    public long getOrdertime()
    {
        return ordertime;
    }
    public void setOrdertime(long ordertime)
    {
        this.ordertime = ordertime;
    }
    public String getJsfname()
    {
        return jsfname;
    }
    public void setJsfname(String jsfname)
    {
        this.jsfname = jsfname;
    }
    public String getMaketime()
    {
        return maketime;
    }
    public void setMaketime(String maketime)
    {
        this.maketime = maketime;
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
    public String getName()
    {
        return name;
    }
    public void setName(String name)
    {
        this.name = name;
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
    public int getYouhuiprice()
    {
        return youhuiprice;
    }
    public void setYouhuiprice(int youhuiprice)
    {
        this.youhuiprice = youhuiprice;
    }
    public int getPrice()
    {
        return price;
    }
    public void setPrice(int price)
    {
        this.price = price;
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
