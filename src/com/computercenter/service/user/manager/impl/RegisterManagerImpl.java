package com.computercenter.service.user.manager.impl;

import com.computercenter.service.user.dao.RegisterDao;
import com.computercenter.service.user.manager.RegisterManager;


public class RegisterManagerImpl implements RegisterManager
{
    private RegisterDao registerDao;
    @Override
    public void query()
    {
        System.out.println("进入manager方法");
        registerDao.query();
    }
    
    
    public RegisterDao getRegisterDao()
    {
        return registerDao;
    }
    public void setRegisterDao(RegisterDao registerDao)
    {
        this.registerDao = registerDao;
    }
    
}
