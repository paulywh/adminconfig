package com.computercenter.service.user.dao;

import com.computercenter.service.user.bean.UserBean;

public interface RegisterDao
{
    void add();
    
    UserBean query();
}
