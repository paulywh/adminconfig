package com.computercenter.service.appinterface.action;

import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.RequestAware;

import com.alibaba.fastjson.JSONObject;
import com.computercenter.common.util.ActionUtil;
import com.computercenter.service.appinterface.bean.MxDian;
import com.computercenter.service.appinterface.dao.AppDao;
import com.opensymphony.xwork2.ActionSupport;

public class AppQuery extends ActionSupport implements RequestAware
{
    private String uuid;
    private int pageNo;
    private int pageSize;
    /**
     * 注释内容
     */
    private static final long serialVersionUID = 6517206306464400719L;
    private AppDao appDao;
    
    public void getuserdata()
    {
        System.out.println(uuid);
        JSONObject json = new JSONObject();
        if(pageNo == 0 || pageSize == 0)
        {
            pageNo = 1;
            pageSize = 10;
        }
        List<MxDian> changguandata = appDao.getChangGuanInfo(pageNo, pageSize);
        
        json.put("data", changguandata);
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

    public int getPageNo()
    {
        return pageNo;
    }

    public void setPageNo(int pageNo)
    {
        this.pageNo = pageNo;
    }

    public int getPageSize()
    {
        return pageSize;
    }

    public void setPageSize(int pageSize)
    {
        this.pageSize = pageSize;
    }

    public AppDao getAppDao()
    {
        return appDao;
    }

    public void setAppDao(AppDao appDao)
    {
        this.appDao = appDao;
    }
}
