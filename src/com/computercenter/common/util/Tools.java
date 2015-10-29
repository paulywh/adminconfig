package com.computercenter.common.util;

import java.util.UUID;

public class Tools
{
    public static String getUUID()
    {
        UUID uuid = UUID.randomUUID();
        return uuid.toString();
    }
    
    public static boolean checkString(String str)
    {
        if(str == null || str.equals(""))
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    
    public static String updateTime(String maketime)
    {
        String restr = "";
        String[] str = maketime.split("-");
        for(int i=0;i<str.length;i++)
        {
            if(i == 3)
            {
                break;
            }
            restr += str[i]+ (i == 2 ? "" : "-");
        }
        return restr;
    }
}
