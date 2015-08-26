package com.computercenter.service.user.action;

import java.io.IOException;
import java.util.Map;
import javax.mail.MessagingException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.RequestAware;
import com.alibaba.fastjson.JSONObject;
import com.computercenter.common.util.ActionUtil;
import com.computercenter.common.util.SendMail;
import com.computercenter.service.user.manager.RegisterManager;
import com.opensymphony.xwork2.ActionSupport;

public class RegisterAction extends ActionSupport implements RequestAware
{
    
    private static final long serialVersionUID = 1L;
    
    /**
     * 登录名
     */
    private String loginName;
    
    /**
     * 企业名字
     */
    private String qyName;
    
    /**
     * 邮箱
     */
    private String email;
    
    /**
     * 验证码
     */
    private String checkCode;
    
    /**
     * 邮箱进入标识
     */
    private String flagMail;
    
    private RegisterManager registerManagerAction;
    
    
    public void add()
    {
        System.out.println("xxx");
    }
    
    public void regQyUser() throws IOException, MessagingException
    {
        System.out.println("loginName:" + loginName + " qyName:" + qyName + " email:" + email + " checkCode:" + checkCode);
        registerManagerAction.query();
        SendMail themail = new SendMail("smtp.163.com");
        String mailbody = "<a href='http://192.168.121.3:8088/portal/register!regQyUserStep2.action?flagMail="+email+"' target='_blank'>点击完成后续注册</a>";//邮件正文 
        themail.setNeedAuth(true);
        themail.setSubject("请完成后续注册");//邮件主题 
        themail.setBody(mailbody);//邮件正文 
        themail.setTo(email);//收件人地址 
        themail.setFrom("paul5-5@163.com");//发件人地址
        themail.setNamePass("paul5-5", "123456789a");//发件人地址和密码 **改为相应邮箱密码 
        themail.sendout();
        
        //校验数据
        JSONObject json = new JSONObject();
        json.put("mail", email);
        ActionUtil.resultData(json.toJSONString());
    }
    
    /**
     * 注册第二次请求，邮箱请求进入列表
     * http://localhost:8088/portal/register!regQyUserStep2.action?flagMail=1234@qq.com
     * @throws IOException 
     * @throws ServletException 
     */
    public String regQyUserStep2() throws IOException, ServletException
    {
        System.out.println(flagMail);
        //校验如果数据正确，返回到继续注册界面
        HttpServletRequest request = ServletActionContext.getRequest(); 
        HttpServletResponse response = ServletActionContext.getResponse();
        request.setAttribute("flagMail", flagMail);
//        request.getRequestDispatcher("registerstep2.jsp").forward(request, response);
//        response.sendRedirect("whotakeme.jsp");
        return "success";
    }
    
    public String execute()
    {
        return "";
    }

    @Override
    public void setRequest(Map arg0)
    {
    }
    
    public String getLoginName()
    {
        return loginName;
    }

    public void setLoginName(String loginName)
    {
        this.loginName = loginName;
    }

    public String getQyName()
    {
        return qyName;
    }

    public void setQyName(String qyName)
    {
        this.qyName = qyName;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }

    public String getCheckCode()
    {
        return checkCode;
    }

    public void setCheckCode(String checkCode)
    {
        this.checkCode = checkCode;
    }

    public String getFlagMail()
    {
        return flagMail;
    }

    public void setFlagMail(String flagMail)
    {
        this.flagMail = flagMail;
    }
    
    public RegisterManager getRegisterManagerAction()
    {
        return registerManagerAction;
    }

    public void setRegisterManagerAction(RegisterManager registerManagerAction)
    {
        this.registerManagerAction = registerManagerAction;
    }
}
