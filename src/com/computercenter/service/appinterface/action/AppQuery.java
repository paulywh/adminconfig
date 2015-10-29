package com.computercenter.service.appinterface.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.RequestAware;

import com.alibaba.fastjson.JSONObject;
import com.computercenter.common.util.ActionUtil;
import com.computercenter.common.util.DataUtil;
import com.computercenter.common.util.ErrorContent;
import com.computercenter.common.util.SendPhone;
import com.computercenter.common.util.Tools;
import com.computercenter.service.appinterface.appbean.ChangDiBean;
import com.computercenter.service.appinterface.appbean.ChangDiType;
import com.computercenter.service.appinterface.appbean.UserOrderBean;
import com.computercenter.service.appinterface.appbean.UserOrderDescBean;
import com.computercenter.service.appinterface.bean.Course;
import com.computercenter.service.appinterface.bean.IndexTypeBean;
import com.computercenter.service.appinterface.bean.JianShenFangCourseTable;
import com.computercenter.service.appinterface.bean.ResultBean;
import com.computercenter.service.appinterface.bean.ZhiNeng;
import com.computercenter.service.appinterface.dao.AppDao;
import com.computercenter.service.bean.JSFBbs;
import com.computercenter.service.bean.JianShenFang;
import com.computercenter.service.bean.JsfService;
import com.computercenter.service.bean.User;
import com.computercenter.service.bean.UserOrder;
import com.computercenter.service.bean.UserYouHuiJuanTable;
import com.opensymphony.xwork2.ActionSupport;

public class AppQuery extends ActionSupport implements RequestAware
{
    private String uuid;
    private int pageNo;
    private int pageSize;
    private int x;
    private int y;
    private int searchname;//搜索拦
    //距离1
    //价格2
    //评价3
    private int zn;
    //城市
    private String city;
    //data.put("1", "专业瑜伽");
    //data.put("2", "综合健身");
    //data.put("3", "舞蹈");
    private int coursetype;
    
    //user des
    private String phone;//用户手机号码
    private String udid;//设备唯一号
    private String code;//验证码6为数字
    private String token;//生成唯一码
    private String headimg;//用户头像
    
    //健身房id
    private String jsfid;
    
    //order
    private String coursedate;//课程日期2015-11-12-0
    private int count;//人数
    private int youhuijuanid;//优惠卷ID
    private String orderid;
    private int courseid;
    private int paytype = 0;//支付类型1成功0等待支付2完成3取消
    
    /**
     * 注释内容
     */
    private static final long serialVersionUID = 6517206306464400719L;
    private AppDao appDao;
    
    public void getJianShenFangdata()
    {
        List<JianShenFang> jsflist = appDao.getChangGuanInfo(pageNo, pageSize);
        List<ChangDiBean> cdblist = new ArrayList<ChangDiBean>();
        for(JianShenFang cd : jsflist)
        {
            ChangDiBean cdb = new ChangDiBean();
            
            cdb.setJsfid(cd.getId());
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
            cdb.setMapcdtype(getCourseData(0,cd.getId()));
            cdblist.add(cdb);
        }
        sendResponse(ErrorContent.SUCCESS,"",cdblist,"");
    }
    
    //获取首页3种类型
    public void getTypeList()
    {
        IndexTypeBean itb = new IndexTypeBean();
        Map<String,String> data = new HashMap<String,String>();
        data.put("1", "专业瑜伽");
        data.put("2", "综合健身");
        data.put("3", "舞蹈");
        itb.setData(data);
        
        List<ZhiNeng> znlist = new ArrayList<ZhiNeng>();
        ZhiNeng zn = new ZhiNeng();
        zn.setKey("1");
        zn.setValue("专业瑜伽");
        ZhiNeng zn1 = new ZhiNeng();
        zn1.setKey("2");
        zn1.setValue("综合健身");
        ZhiNeng zn2 = new ZhiNeng();
        zn2.setKey("3");
        zn2.setValue("舞蹈");
        znlist.add(zn);
        znlist.add(zn1);
        znlist.add(zn2);
        sendResponse(ErrorContent.SUCCESS,"",znlist,"");
    }
    
    //获取单个场馆信息
    public void getTheJianShenFang()
    {
        if(jsfid != null)
        {
            List<UserYouHuiJuanTable> useryouhuijuan = null;
            //TODO 只做没登录的
            if(phone != null)
            {
                User ur = getUserByPhone(phone);
                if(ur != null)
                {
                    useryouhuijuan = appDao.getUserYouHuiJuanTable(ur.getId());
                }
            }
            JianShenFang cd = appDao.getJianShenFangById(Integer.valueOf(jsfid));
            
            ChangDiBean cdb = new ChangDiBean();
            cdb.setChangdiname(cd.getName());
            cdb.setHeadimg(cd.getTitleimg());
            cdb.setLbsx(cd.getLbsx());
            cdb.setLbsy(cd.getLbsy());
            cdb.setNewprice(cd.getNewprice());
            cdb.setOldprice(cd.getOldprice());
            cdb.setAddress(cd.getAddress());
            cdb.setStarnum(cd.getLevel());
            cdb.setPhone(cd.getPhone());
            cdb.setYearprice(cd.getYearprice());
            
            cdb.setMapcdtype(getCourseData(6,Integer.valueOf(jsfid)));
            
            List<JSFBbs> jsfbbslist = appDao.jsfBBSList(cd.getId());
            cdb.setJsfbbslist(jsfbbslist);
            cdb.setBbscount(jsfbbslist.size());
            cdb.setUseryouhuijuan(useryouhuijuan);
            sendResponse(ErrorContent.SUCCESS,"",cdb,"");
            
        }
        else
        {
            sendResponse(ErrorContent.FAIL,"fuck",null,"");
        }
    }
    
    private Map<String,List<ChangDiType>> getCourseData(int day,int jianshenfid)
    {
        List<Course> mcclist = appDao.getCourseList();//查询出来所有课程
        List<JianShenFangCourseTable> jsfcoursetable = appDao.getCourseByJSFId(jianshenfid);
        List<String> weekdate = DataUtil.getDayWeek(day);
        Map<String,List<ChangDiType>> mapcdtype = new HashMap<String,List<ChangDiType>>();
        for(String str : weekdate)
        {
            int week = Integer.valueOf(str.split("-")[3]);
            List<ChangDiType> cdtlist = new ArrayList<ChangDiType>();
            for(JianShenFangCourseTable mcc : jsfcoursetable)
            {
                if(mcc.getWeek() == week)
                {
                    int courseid = mcc.getCourseid();
                    for(Course cs : mcclist)
                    {
                        if(courseid == cs.getId())
                        {
                            ChangDiType cdt = new ChangDiType();
                            cdt.setType(cs.getName());
                            cdt.setStartime(cs.getStarttime());
                            cdt.setEndtime(cs.getEndtime());
                            cdt.setRmb(cs.getPrice());
                            cdtlist.add(cdt);
                        }
                    }
                }
            }
            mapcdtype.put(Tools.updateTime(str), cdtlist);
        }
        return mapcdtype;
    }
    
    private User getUserByPhone(String phone)
    {
        User ur = appDao.getUserByPhone(phone);
        return ur;
    }
    
    //发送短信验证码
    public void sendMessageForReg()
    {
        if(phone != null || udid != null)
        {
            User ur = getUserByPhone(phone);
            if(ur == null)
            {
                User user = new User();
                user.setPhone(phone);
                user.setUdid(udid);
                String code = SendPhone.sendPhoneForHuoDong(phone);
                user.setCode(code);
                user.setGetcodetime(System.currentTimeMillis());
                appDao.addUserDataStep1(user);
                
                ResultBean rb = new ResultBean();
                rb.setErrorcode(0);
                sendResponse(ErrorContent.SUCCESS,"",null,"");
            }
            else
            {
                if((ur.getGetcodetime() + 60 * 1000) < System.currentTimeMillis())
                {
                    //大于1分钟了重新修改验证码
                    String code = "222222";//SendPhone.sendPhoneForHuoDong(phone);
                    appDao.updateUserCodeByPhone(code, phone);
                    sendResponse(ErrorContent.SUCCESS,"",null,"");
                }
            }
        }
        else
        {
            errorResponse();
        }
    }
    
    public void registerUser()
    {
        if(phone != null || udid != null || code != null)
        {
            User user = appDao.checkCode(code,phone);
            if(user != null)
            {
                User us = new User();
                String token = Tools.getUUID();
                appDao.addTokenToUser(phone,token);
                us.setToken(token);
                sendResponse(ErrorContent.SUCCESS,"",us,token);
            }
            else
            {
                sendResponse(ErrorContent.FAIL,"验证码错误！",null,"");
            }
        }
        else
        {
            errorResponse();
        }
    }
    
    //创建订单
    public void createOrder()
    {
        if(courseid != 0 && coursedate != null && count != 0 && youhuijuanid != 0 && phone != null && jsfid != null)
        {
            User user = appDao.getUserByPhone(phone);
            UserOrder uo = new UserOrder();
            uo.setUserid(user.getId());
            uo.setCoursid(courseid);
            uo.setOrderid(Tools.getUUID());
            uo.setCount(count);
            uo.setIsgo(0);
            uo.setJsfid(Integer.valueOf(jsfid));
            uo.setMaketime(coursedate);
            uo.setOrdertime(System.currentTimeMillis());
            uo.setPrice(50);
            uo.setCoursename("哈哈运动");
            
            appDao.createUserOrder(uo);
            
            sendResponse(ErrorContent.SUCCESS,"",uo,"");
        }
    }
    
    //客户端直接成功订单
    public void orderOK()
    {
        if(Tools.checkString(orderid) && Tools.checkString(phone) && Tools.checkString(token))
        {
            User user = appDao.getUserByPhone(phone);
            UserOrder uo = appDao.queryOrderByUidOid(user.getId(),orderid);
            if(uo != null)
            {
                appDao.updateOrderPayType(orderid,"1");
                sendResponse(ErrorContent.SUCCESS,"",null,"");
            }
        }
        else
        {
            errorResponse();
        }
    }
    
    //查询用户名下订单
    public void queryUserOrder()
    {
        if(Tools.checkString(phone) && Tools.checkString(token))
        {
            User user = appDao.getUserByPhone(phone);
            List<UserOrder> uolist = appDao.queryOrderByUidOtype(user.getId(),paytype);
            
            List<UserOrderBean>  uoblist = new ArrayList<UserOrderBean>();
            for(UserOrder uo : uolist)
            {
                UserOrderBean uob = new UserOrderBean();
                JianShenFang jsf = appDao.getJianShenFangById(uo.getJsfid());
                uob.setHeadimg(jsf.getTitleimg());
                uob.setJsfname(jsf.getName());
                uob.setCount(uo.getCount());
                uob.setOrdertime(uo.getOrdertime());
                uob.setPaytype(uob.getPaytype());
                uob.setSumprice(uo.getSumprice());
                
                uoblist.add(uob);
            }
            sendResponse(ErrorContent.SUCCESS,"",uoblist,"");
        }
    }
    
    //查询订单详情接口
    public void queryOrderByOrderId()
    {
        if(Tools.checkString(phone) && Tools.checkString(token) && Tools.checkString(orderid))
        {
            User user = appDao.getUserByPhone(phone);
            UserOrder uo = appDao.queryOrderByUidOid(user.getId(),orderid);
            Course course = appDao.getCourseByCourseId(uo.getCoursid());
            JianShenFang jsf = appDao.getJianShenFangById(uo.getJsfid());
            
            UserOrderDescBean uodb = new UserOrderDescBean();
            uodb.setCount(uo.getCount());
            uodb.setEndtime(course.getEndtime());
            uodb.setJsfname(jsf.getName());
            uodb.setMaketime(Tools.updateTime(uo.getMaketime()));
            uodb.setName(course.getName());
            uodb.setOrderid(uo.getOrderid());
            uodb.setPaytype(uo.getPaytype());
            uodb.setPrice(uo.getPrice());
            uodb.setOrdertime(uo.getOrdertime());
            uodb.setPaytype(uo.getPaytype());
            uodb.setStarttime(course.getStarttime());
            uodb.setSumprice(uo.getSumprice());
            uodb.setYouhuiprice(uo.getYouhuiprice());
            sendResponse(ErrorContent.SUCCESS,"",uodb,"");
        }
    }
    
    private void sendResponse(int errorcode,String errormsg,Object obj,String token)
    {
        JSONObject json = new JSONObject();
        json.put("errorcode", errorcode);
        json.put("errormsg", errormsg);
        json.put("data", obj == null ? "{}" : obj);
        json.put("token", token);
        ActionUtil.resultData(json.toJSONString());
    }
    
    private void errorResponse()
    {
        JSONObject json = new JSONObject();
        json.put("data", "error fuck");
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

    public String getPhone()
    {
        return phone;
    }

    public void setPhone(String phone)
    {
        this.phone = phone;
    }

    public String getUdid()
    {
        return udid;
    }

    public void setUdid(String udid)
    {
        this.udid = udid;
    }

    public String getCode()
    {
        return code;
    }

    public void setCode(String code)
    {
        this.code = code;
    }

    public String getToken()
    {
        return token;
    }

    public void setToken(String token)
    {
        this.token = token;
    }

    public String getHeadimg()
    {
        return headimg;
    }

    public void setHeadimg(String headimg)
    {
        this.headimg = headimg;
    }

    public int getCourseid()
    {
        return courseid;
    }

    public void setCourseid(int courseid)
    {
        this.courseid = courseid;
    }

    public int getX()
    {
        return x;
    }

    public void setX(int x)
    {
        this.x = x;
    }

    public int getY()
    {
        return y;
    }

    public void setY(int y)
    {
        this.y = y;
    }

    public int getSearchname()
    {
        return searchname;
    }

    public void setSearchname(int searchname)
    {
        this.searchname = searchname;
    }
    
    public String getJsfid()
    {
        return jsfid;
    }

    public void setJsfid(String jsfid)
    {
        this.jsfid = jsfid;
    }

    public String getCoursedate()
    {
        return coursedate;
    }

    public void setCoursedate(String coursedate)
    {
        this.coursedate = coursedate;
    }

    public int getCount()
    {
        return count;
    }

    public void setCount(int count)
    {
        this.count = count;
    }

    public int getYouhuijuanid()
    {
        return youhuijuanid;
    }

    public void setYouhuijuanid(int youhuijuanid)
    {
        this.youhuijuanid = youhuijuanid;
    }

    public String getOrderid()
    {
        return orderid;
    }

    public void setOrderid(String orderid)
    {
        this.orderid = orderid;
    }

    public int getZn()
    {
        return zn;
    }

    public void setZn(int zn)
    {
        this.zn = zn;
    }

    public String getCity()
    {
        return city;
    }

    public void setCity(String city)
    {
        this.city = city;
    }

    public int getCoursetype()
    {
        return coursetype;
    }

    public void setCoursetype(int coursetype)
    {
        this.coursetype = coursetype;
    }

    public int getPaytype()
    {
        return paytype;
    }

    public void setPaytype(int paytype)
    {
        this.paytype = paytype;
    }
}
