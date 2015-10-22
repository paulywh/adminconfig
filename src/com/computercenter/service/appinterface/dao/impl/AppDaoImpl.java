package com.computercenter.service.appinterface.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;
import com.computercenter.service.appinterface.bean.MxChangCi;
import com.computercenter.service.appinterface.dao.AppDao;
import com.computercenter.service.bean.JianShenFang;
import com.computercenter.service.bean.JsfService;

public class AppDaoImpl extends SqlMapClientDaoSupport implements AppDao
{

    @Override
    public List<JianShenFang> getChangGuanInfo(int pageNo, int pageSize)
    {
        Map<String,Integer> mappar = new HashMap<String,Integer>();
        mappar.put("starpage", pageNo==1?0:(pageSize * pageNo) + 1);
        mappar.put("endpage", pageSize * pageNo + pageNo);
        
        @SuppressWarnings("unchecked")
        List<JianShenFang> cdlist = (List<JianShenFang>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.queryappcdinfo",mappar);
        return cdlist;
    }

    @Override
    public List<JsfService> getJsfService(int jsfid)
    {
        @SuppressWarnings("unchecked")
        List<JsfService> jsflist = (List<JsfService>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.queryjsfservice",jsfid);
        return jsflist;
    }

    @Override
    public List<MxChangCi> getChangCiList(int changdiid)
    {
        @SuppressWarnings("unchecked")
        List<MxChangCi> xcclist = (List<MxChangCi>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.querychangcibychangdiid",changdiid);
        return xcclist;
    }
}
