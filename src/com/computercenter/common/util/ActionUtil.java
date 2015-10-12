package com.computercenter.common.util;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.alibaba.fastjson.JSONObject;
import com.computercenter.service.user.bean.Menus;
import com.computercenter.service.user.bean.MenusBean;
import com.computercenter.service.user.bean.MenusBeanList;

public class ActionUtil
{
    public static void resultData(String data)
    {
        HttpServletResponse response=ServletActionContext.getResponse();
        response.setContentType("text/json");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(HttpServletResponse.SC_OK);
        response.setHeader("Server", "Node");
        PrintWriter out = null;
        try {
            out = response.getWriter();
            out.print(data.toString());
        } 
        catch (IOException e) 
        {
            try
            {
                throw e;
            }
            catch (IOException e1)
            {
                e1.printStackTrace();
            }
        } finally {
            try {
                out.close();
            } catch (Exception e) {
            }
        }
    }
    
    public static void main(String[] args) {
    	MenusBeanList mlist = new MenusBeanList();
    	
    	Map<String,MenusBean> menus = new HashMap<String,MenusBean>();
    	MenusBean mb = new MenusBean();
    	mb.setMenuid("11");
    	mb.setIcon("bjpg");
    	mb.setMenuname("shang");
    	
    	List<Menus> mslist = new ArrayList<Menus>();
    	Menus ms = new Menus();
    	ms.setMenuid("1");
    	ms.setIcon("ajpg");
    	ms.setMenuname("diyi");
    	ms.setUrl("a");
    	mslist.add(ms);
    	mb.setMenus(mslist);
    	
    	menus.put("basic", mb);
    	menus.put("point", mb);
    	
    	mlist.setMenus(menus);
    	
    	JSONObject json = new JSONObject();
        json.put("meauls", mlist);
        System.out.println(json.toJSONString());
        
	}
}
