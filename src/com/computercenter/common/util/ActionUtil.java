package com.computercenter.common.util;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

public class ActionUtil
{
    public static void resultData(String data)
    {
        HttpServletResponse response=ServletActionContext.getResponse();
        try
        {
            PrintWriter out = response.getWriter();
            out.println(data);
            out.flush();
            out.close();
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
    }
}
