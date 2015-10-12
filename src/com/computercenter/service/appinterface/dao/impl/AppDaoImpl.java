package com.computercenter.service.appinterface.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

import com.computercenter.service.appinterface.bean.MxDian;
import com.computercenter.service.appinterface.dao.AppDao;

public class AppDaoImpl extends SqlMapClientDaoSupport implements AppDao
{

    @Override
    public List<MxDian> getChangGuanInfo(int pageNo, int pageSize)
    {
        Map<String,Integer> mappar = new HashMap<String,Integer>();
        mappar.put("starpage", pageSize==1?1:(pageSize * pageNo) + 1);
        mappar.put("endpage", pageSize * pageNo + pageNo);
        
        @SuppressWarnings("unchecked")
        List<MxDian> dianlist = (List<MxDian>)getSqlMapClientTemplate().queryForList("t_mc_appinfo.queryappcginfo",mappar);
        return dianlist;
    }
}
