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
import com.computercenter.service.appinterface.bean.Course;
import com.computercenter.service.appinterface.bean.JianShenFangCourseTable;
import com.computercenter.service.appinterface.bean.ResultBean;
import com.computercenter.service.appinterface.dao.AppDao;
import com.computercenter.service.bean.JSFBbs;
import com.computercenter.service.bean.JianShenFang;
import com.computercenter.service.bean.JsfService;
import com.computercenter.service.bean.User;
import com.opensymphony.xwork2.ActionSupport;

public class AppQuery extends ActionSupport implements RequestAware
{
    private String uuid;
    private int pageNo;
    private int pageSize;
    private int city;//城市{北京、上海..}
    private int courseid;//课程id
    private int quanbu;//界面的全部
    private int zhineng;//界面智能
    private int x;
    private int y;
    private int searchname;//搜索名称
    
    //user des
    private String phone;//用户手机号码
    private String udid;//设备唯一号
    private String code;//验证码6为数字
    private String token;//生成唯一码
    private String headimg;//用户头像
    
    //健身房id
    private String jsfid;
    
    /**
     * 注释内容
     */
    private static final long serialVersionUID = 6517206306464400719L;
    private AppDao appDao;
    
    public void getuserdata()
    {
        List<JianShenFang> jsflist = appDao.getChangGuanInfo(pageNo, pageSize);
        List<ChangDiBean> cdblist = new ArrayList<ChangDiBean>();
        for(JianShenFang cd : jsflist)
        {
            ChangDiBean cdb = new ChangDiBean();
            
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
        sendResponse("0","",cdblist,"");
    }
    
    //获取首页3种类型
    public void getTypeList()
    {
        
    }
    
    //获取单个场馆信息
    public void getTheJianShenFang()
    {
        if(jsfid != null)
        {
            //TODO 只做没登录的
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
            sendResponse("0","",cdb,"");
            
        }
        else
        {
            sendResponse("1","fuck",null,"");
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
            mapcdtype.put(str, cdtlist);
        }
        return mapcdtype;
    }
    
    //发送短信验证码
    public void sendMessageForReg()
    {
        if(phone != null || udid != null)
        {
            User ur = appDao.getUserByPhone(phone);
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
                sendResponse("0","",null,"");
            }
            else
            {
                if((ur.getGetcodetime() + 60 * 1000) < System.currentTimeMillis())
                {
                    //大于1分钟了重新修改验证码
                    String code = "222222";//SendPhone.sendPhoneForHuoDong(phone);
                    appDao.updateUserCodeByPhone(code, phone);
                    sendResponse("0","",null,"");
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
            if(appDao.checkCode(code,phone))
            {
                User user = new User();
                String token = Tools.getUUID();
                appDao.addTokenToUser(phone,token);
                user.setToken(token);
                sendResponse("0","",null,token);
            }
        }
        else
        {
            errorResponse();
        }
    }
    
    private void sendResponse(String errorcode,String errormsg,Object obj,String token)
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

    public int getCity()
    {
        return city;
    }

    public void setCity(int city)
    {
        this.city = city;
    }

    public int getCourseid()
    {
        return courseid;
    }

    public void setCourseid(int courseid)
    {
        this.courseid = courseid;
    }

    public int getQuanbu()
    {
        return quanbu;
    }

    public void setQuanbu(int quanbu)
    {
        this.quanbu = quanbu;
    }

    public int getZhineng()
    {
        return zhineng;
    }

    public void setZhineng(int zhineng)
    {
        this.zhineng = zhineng;
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
}
