package com.computercenter.service.appinterface.appbean;

import java.util.List;

public class ChangDiBean
{
    private String changdiname;//场地名称
    private String address;//地址
    private int starnum;//星级
    private int oldprice;//原价
    private int newprice;//优惠价
    private int lbsx;//坐标
    private int lbsy;//坐标
    private String headimg;//头像
    private String[] sort;//游泳停车那一列包含
    private List<ChangDiType> cdtype;
    public int getLbsx()
    {
        return lbsx;
    }
    public void setLbsx(int lbsx)
    {
        this.lbsx = lbsx;
    }
    public int getLbsy()
    {
        return lbsy;
    }
    public void setLbsy(int lbsy)
    {
        this.lbsy = lbsy;
    }
    public String getHeadimg()
    {
        return headimg;
    }
    public void setHeadimg(String headimg)
    {
        this.headimg = headimg;
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
    public String getChangdiname()
    {
        return changdiname;
    }
    public void setChangdiname(String changdiname)
    {
        this.changdiname = changdiname;
    }
    public String getAddress()
    {
        return address;
    }
    public void setAddress(String address)
    {
        this.address = address;
    }
    public int getStarnum()
    {
        return starnum;
    }
    public void setStarnum(int starnum)
    {
        this.starnum = starnum;
    }
    public String[] getSort()
    {
        return sort;
    }
    public void setSort(String[] sort)
    {
        this.sort = sort;
    }
    public List<ChangDiType> getCdtype()
    {
        return cdtype;
    }
    public void setCdtype(List<ChangDiType> cdtype)
    {
        this.cdtype = cdtype;
    }
}

class ChangDiType
{
    private String type;//瑜伽、街舞、跆拳道、门票
    private String startime;
    private String endtime;
    private int rmb;
    public String getType()
    {
        return type;
    }
    public void setType(String type)
    {
        this.type = type;
    }
    public String getStartime()
    {
        return startime;
    }
    public void setStartime(String startime)
    {
        this.startime = startime;
    }
    public String getEndtime()
    {
        return endtime;
    }
    public void setEndtime(String endtime)
    {
        this.endtime = endtime;
    }
    public int getRmb()
    {
        return rmb;
    }
    public void setRmb(int rmb)
    {
        this.rmb = rmb;
    }
}
