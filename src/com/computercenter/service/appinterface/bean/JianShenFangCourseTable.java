package com.computercenter.service.appinterface.bean;

import java.io.Serializable;

//健身房和课程关联表
public class JianShenFangCourseTable implements Serializable
{
    private static final long serialVersionUID = -5759873407022618706L;
    private int id;//健身房id
    private int courseid;//课程id
    private int week;//周几0-6
    public int getId()
    {
        return id;
    }
    public void setId(int id)
    {
        this.id = id;
    }
    public int getCourseid()
    {
        return courseid;
    }
    public void setCourseid(int courseid)
    {
        this.courseid = courseid;
    }
    public int getWeek()
    {
        return week;
    }
    public void setWeek(int week)
    {
        this.week = week;
    }
}
