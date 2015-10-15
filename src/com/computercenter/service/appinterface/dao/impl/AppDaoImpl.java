package com.computercenter.service.appinterface.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

import com.computercenter.service.appinterface.bean.MxChangCi;
import com.computercenter.service.appinterface.bean.MxChangdi;
import com.computercenter.service.appinterface.bean.MxChangdiSort;
import com.computercenter.service.appinterface.bean.MxDian;
import com.computercenter.service.appinterface.dao.AppDao;

public class AppDaoImpl extends SqlMapClientDaoSupport implements AppDao
{

    @Override
    public List<MxChangdi> getChangGuanInfo(int pageNo, int pageSize)
    {
        Map<String,Integer> mappar = new HashMap<String,Integer>();
        mappar.put("starpage", pageSize==1?1:(pageSize * pageNo) + 1);
        mappar.put("endpage", pageSize * pageNo + pageNo);
        
        @SuppressWarnings("unchecked")
        List<MxChangdi> cdlist = (List<MxChangdi>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.queryappcdinfo",mappar);
        return cdlist;
    }

    @Override
    public MxDian getDianData(int dianid)
    {
        MxDian md = (MxDian)getSqlMapClientTemplate().queryForObject("t_mc_appinfo.querydianbydianid",dianid);
        return md;
    }

    @Override
    public MxChangdiSort getChangDiSort(String sortkey)
    {
        
        MxChangdiSort mcs = (MxChangdiSort)getSqlMapClientTemplate().queryForObject("t_mc_appinfo.querysortbysortkey",sortkey);
        return mcs;
    }

    @Override
    public List<MxChangCi> getChangCiList(int changdiid)
    {
        @SuppressWarnings("unchecked")
        List<MxChangCi> xcclist = (List<MxChangCi>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.querychangcibychangdiid",changdiid);
        return xcclist;
    }
}
