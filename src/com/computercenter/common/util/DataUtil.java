package com.computercenter.common.util;

import java.util.Calendar;

public class DataUtil
{
    //获取今天周几
    public static int getWeekDay()
    {
        Calendar cal=Calendar.getInstance();
        System.out.println(cal.get(Calendar.DAY_OF_WEEK) - 1);
        return -1;
    }
    public static void main(String[] args)
    {
        DataUtil.getWeekDay();
    }
}
