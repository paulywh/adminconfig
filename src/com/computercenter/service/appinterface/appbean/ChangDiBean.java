package com.computercenter.service.appinterface.appbean;

import java.util.List;

public class ChangDiBean
{
    private String changdiname;//场地名称
    private String address;//地址
    private int starnum;//星级
    private float oldprice;//原价
    private float newprice;//优惠价
    private String lbsx;//坐标
    private String lbsy;//坐标
    private String headimg;//头像
    private String[] sort;//游泳停车那一列包含
    private List<ChangDiType> cdtype;
    
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
    public String getHeadimg()
    {
        return headimg;
    }
    public void setHeadimg(String headimg)
    {
        this.headimg = headimg;
    }
    public float getOldprice()
    {
        return oldprice;
    }
    public void setOldprice(float oldprice)
    {
        this.oldprice = oldprice;
    }
    public float getNewprice()
    {
        return newprice;
    }
    public void setNewprice(float newprice)
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