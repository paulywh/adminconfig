package com.computercenter.service.appinterface.appbean;

public class ChangDiType
{
    private String type;//瑜伽、街舞、跆拳道、门票
    private int startime;
    private int endtime;
    private float rmb;
    public String getType()
    {
        return type;
    }
    public void setType(String type)
    {
        this.type = type;
    }
    public float getRmb()
    {
        return rmb;
    }
    public void setRmb(float rmb)
    {
        this.rmb = rmb;
    }
    public int getStartime()
    {
        return startime;
    }
    public void setStartime(int startime)
    {
        this.startime = startime;
    }
    public int getEndtime()
    {
        return endtime;
    }
    public void setEndtime(int endtime)
    {
        this.endtime = endtime;
    }
}
