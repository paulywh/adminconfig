package com.computercenter.service.appinterface.action;

import java.util.Map;

import org.apache.struts2.interceptor.RequestAware;

import com.alibaba.fastjson.JSONObject;
import com.computercenter.common.util.ActionUtil;
import com.opensymphony.xwork2.ActionSupport;

public class AppQuery extends ActionSupport implements RequestAware
{
    private String uuid;

    /**
     * 注释内容
     */
    private static final long serialVersionUID = 6517206306464400719L;
    
    public void getuserdata()
    {
        System.out.println(uuid);
        JSONObject json = new JSONObject();
        json.put("data", "ok");
        ActionUtil.resultData(json.toJSONString());
    }

    @Override
    public void setRequest(Map<String, Object> arg0)
    {
        
    }

    public String getUuid()
    {
        return uuid;
    }

    public void setUuid(String uuid)
    {
        this.uuid = uuid;
    }
}
