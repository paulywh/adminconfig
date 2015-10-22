package com.computercenter.service.appinterface.action;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.RequestAware;

import com.alibaba.fastjson.JSONObject;
import com.computercenter.common.util.ActionUtil;
import com.computercenter.service.appinterface.appbean.ChangDiBean;
import com.computercenter.service.appinterface.appbean.ChangDiType;
import com.computercenter.service.appinterface.bean.MxChangCi;
import com.computercenter.service.appinterface.bean.MxChangdi;
import com.computercenter.service.appinterface.bean.MxChangdiSort;
import com.computercenter.service.appinterface.bean.MxDian;
import com.computercenter.service.appinterface.dao.AppDao;
import com.computercenter.service.bean.JianShenFang;
import com.computercenter.service.bean.JsfService;
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
        List<JianShenFang> jsflist = appDao.getChangGuanInfo(pageNo, pageSize);
        List<ChangDiBean> cdblist = new ArrayList<ChangDiBean>();
        for(JianShenFang cd : jsflist)
        {
            ChangDiBean cdb = new ChangDiBean();
            
            cdb.setChangdiname(cd.getName());
            cdb.setHeadimg(cd.getTitleimg());
            cdb.setLbsx(cd.getLbsx());
            cdb.setLbsy(cd.getLbsy());
            cdb.setNewprice(cd.getNewprice());
            cdb.setOldprice(cd.getOldprice());
            cdb.setAddress(cd.getAddress());
            cdb.setStarnum(cd.getLevel());
            
            List<JsfService> jsfservicelist = appDao.getJsfService(cd.getId());
            String[] sortstr = new String[jsfservicelist.size()];
            for(int i=0;i<jsfservicelist.size();i++)
            {
                JsfService jsfinfo = jsfservicelist.get(i);
                sortstr[i] = jsfinfo.getName();
            }
            cdb.setSort(sortstr);
            
            
            List<ChangDiType> cdtlist = new ArrayList<ChangDiType>(); 
//            List<MxChangCi> mcclist = appDao.getChangCiList(cd.getId());
//            for(MxChangCi mcc : mcclist)
//            {
//                ChangDiType cdt = new ChangDiType();
//                cdt.setType(mcc.getName());
//                cdt.setStartime(mcc.getStarttime());
//                cdt.setEndtime(mcc.getEndtime());
//                cdt.setRmb(mcc.getPrice());
//                cdtlist.add(cdt);
//            }
            
            cdb.setCdtype(cdtlist);
            cdblist.add(cdb);
        }
        
        json.put("data", cdblist);
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
