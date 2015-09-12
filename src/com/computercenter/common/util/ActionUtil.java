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
