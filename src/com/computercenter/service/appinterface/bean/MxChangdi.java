package com.computercenter.service.appinterface.bean;

import java.io.Serializable;

public class MxChangdi implements Serializable{

    private static final long serialVersionUID = -1859268244896535899L;
    
    private int id;
    private String name;
    private String xinxi;
    private String litimg;
    private String showimg;
    private int flid;
    private int dianid;
    private int type;
    private int num;
    private String sort;
    private String content;
    private String opentime;
    private String closetime;
    private String ps;
    private String check;
    private int cishu;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getXinxi() {
        return xinxi;
    }
    public void setXinxi(String xinxi) {
        this.xinxi = xinxi;
    }
    public String getLitimg() {
        return litimg;
    }
    public void setLitimg(String litimg) {
        this.litimg = litimg;
    }
    public String getShowimg() {
        return showimg;
    }
    public void setShowimg(String showimg) {
        this.showimg = showimg;
    }
    public int getFlid() {
        return flid;
    }
    public void setFlid(int flid) {
        this.flid = flid;
    }
    public int getDianid() {
        return dianid;
    }
    public void setDianid(int dianid) {
        this.dianid = dianid;
    }
    public int getType() {
        return type;
    }
    public void setType(int type) {
        this.type = type;
    }
    public int getNum() {
        return num;
    }
    public void setNum(int num) {
        this.num = num;
    }
    public String getSort() {
        return sort;
    }
    public void setSort(String sort) {
        this.sort = sort;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public String getOpentime() {
        return opentime;
    }
    public void setOpentime(String opentime) {
        this.opentime = opentime;
    }
    public String getClosetime() {
        return closetime;
    }
    public void setClosetime(String closetime) {
        this.closetime = closetime;
    }
    public String getPs() {
        return ps;
    }
    public void setPs(String ps) {
        this.ps = ps;
    }
    public String getCheck() {
        return check;
    }
    public void setCheck(String check) {
        this.check = check;
    }
    public int getCishu() {
        return cishu;
    }
    public void setCishu(int cishu) {
        this.cishu = cishu;
    }
}