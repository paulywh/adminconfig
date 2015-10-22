package com.computercenter.service.appinterface.dao;

import java.util.List;
import com.computercenter.service.appinterface.bean.MxChangCi;
import com.computercenter.service.bean.JianShenFang;
import com.computercenter.service.bean.JsfService;

public interface AppDao
{
    //获取健身房信息
    List<JianShenFang> getChangGuanInfo(int pageNo,int pageSize);
    
    //健身房相关服务
    List<JsfService> getJsfService(int id);
    
    List<MxChangCi> getChangCiList(int changdiid);
}
