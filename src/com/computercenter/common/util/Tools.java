package com.computercenter.common.util;

import java.util.UUID;

public class Tools
{
    public static void main(String[] args)
    {
    }
    
    public static String getUUID()
    {
        UUID uuid = UUID.randomUUID();
        return uuid.toString();
    }
}
