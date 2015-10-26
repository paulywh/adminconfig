package com.computercenter.common.util;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

public class DataUtil
{
    //通过年月日获取当天是周几 0周日 1周一......
    public static int getWeekForYMD(int year,int month,int day)
    {
        Calendar calendar = Calendar.getInstance();//获得一个日历
        calendar.set(year, month-1, day);//设置当前时间,月份是从0月开始计算
        int number = calendar.get(Calendar.DAY_OF_WEEK);//星期表示1-7，是从星期日开始，   
        return number - 1;
    }
    
    //获取课程专用
    public static List<String> getDayWeek(int day)
    {
        List<String> strlist = new ArrayList<String>();
        for(int i=0;i<=day;i++)
        {
            Date date=new Date();//取时间
            Calendar calendar = new GregorianCalendar();
            calendar.setTime(date);
            calendar.add(calendar.DATE,i);//把日期往后增加一天.整数往后推,负数往前移动
            date=calendar.getTime(); //这个时间就是日期往后推一天的结果        
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            String dateString = formatter.format(date);
            int week = getWeekForYMD(Integer.valueOf(dateString.split("-")[0]),Integer.valueOf(dateString.split("-")[1]),Integer.valueOf(dateString.split("-")[2]));
            strlist.add(dateString + "-" + week);
        }
        return strlist;
    }
    
    //获取当前时间
    public static String getTodayTime()
    {
        Date date=new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmdd");
        String dateString = formatter.format(date);
        return dateString + SendPhone.getRandomStr();
    }
    
    public static void main(String[] args)
    {
        System.out.println(getTodayTime());
    }
}
