package com.computercenter.service.appinterface.appbean;

import java.util.List;
import java.util.Map;

import com.computercenter.service.bean.JSFBbs;
import com.computercenter.service.bean.UserYouHuiJuanTable;

//客户端场馆信息
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
    private int yearprice;//年卡
    private String phone;//场馆电话
    private int bbscount;//评论数
    private String[] sort;//游泳停车那一列包含
    private Map<String,List<ChangDiType>> mapcdtype;
    private List<JSFBbs> jsfbbslist;//健身房留言列表
    List<UserYouHuiJuanTable> useryouhuijuan;//用户优惠卷列表
    public List<UserYouHuiJuanTable> getUseryouhuijuan()
    {
        return useryouhuijuan;
    }
    public void setUseryouhuijuan(List<UserYouHuiJuanTable> useryouhuijuan)
    {
        this.useryouhuijuan = useryouhuijuan;
    }
    public int getYearprice()
    {
        return yearprice;
    }
    public void setYearprice(int yearprice)
    {
        this.yearprice = yearprice;
    }
    public String getPhone()
    {
        return phone;
    }
    public int getBbscount()
    {
        return bbscount;
    }
    public void setBbscount(int bbscount)
    {
        this.bbscount = bbscount;
    }
    public void setPhone(String phone)
    {
        this.phone = phone;
    }
    public List<JSFBbs> getJsfbbslist()
    {
        return jsfbbslist;
    }
    public void setJsfbbslist(List<JSFBbs> jsfbbslist)
    {
        this.jsfbbslist = jsfbbslist;
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
    public Map<String, List<ChangDiType>> getMapcdtype()
    {
        return mapcdtype;
    }
    public void setMapcdtype(Map<String, List<ChangDiType>> mapcdtype)
    {
        this.mapcdtype = mapcdtype;
    }
}