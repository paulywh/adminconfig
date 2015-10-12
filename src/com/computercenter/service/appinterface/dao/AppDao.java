package com.computercenter.service.appinterface.dao;

import java.util.List;

import com.computercenter.service.appinterface.bean.MxDian;

public interface AppDao
{
    //获取场馆信息
    List<MxDian> getChangGuanInfo(int pageNo,int pageSize);
}
