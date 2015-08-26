package com.computercenter.outerinterface.caeservice.impl;

import com.computercenter.outerinterface.caeservice.service;

public class CaeServiceImpl implements service
{
    
    @Override
    public String getCaeDes(String id)
    {
        System.out.println("hello" + id);
        return null;
    }
    
}
