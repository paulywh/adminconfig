package com.computercenter.service.appinterface.dao;

import java.util.List;

import com.computercenter.service.appinterface.bean.MxChangCi;
import com.computercenter.service.appinterface.bean.MxChangdi;
import com.computercenter.service.appinterface.bean.MxChangdiSort;
import com.computercenter.service.appinterface.bean.MxDian;

public interface AppDao
{
    //获取场馆信息
    List<MxChangdi> getChangGuanInfo(int pageNo,int pageSize);
    
    //二次获取场馆信息
    MxDian getDianData(int dianid);
    
    MxChangdiSort getChangDiSort(String sortkey);
    
    List<MxChangCi> getChangCiList(int changdiid);
}
