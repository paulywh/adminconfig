package com.computercenter.common.util;

import java.io.IOException;

import org.apache.commons.httpclient.Header;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.methods.PostMethod;

import com.bcloud.msg.http.HttpSender;

public class SendPhone
{
    public static void main(String[] args) throws HttpException, IOException
    {
        sendPhoneForHuoDong("13718769723");
    }
    
    /**
     * http://sms.webchinese.cn/User/?action=sms
     * 短信发送端口：username:paul5-5 password:123456789a
     * @return
     * @throws HttpException
     * @throws IOException
     */
    private static String sendPhone(String phoneNumber,String testMessage) throws HttpException, IOException
    {
        String uri = "http://222.73.117.158/msg/HttpBatchSendSM";//应用地址
        String account = "huodong";//账号
        String pswd = "Huodong123";//密码
        String mobiles = phoneNumber;//手机号码，多个号码使用","分割
        String content = "良辰有100种方法让你记住这个验证码：" + testMessage;//短信内容
        boolean needstatus = true;//是否需要状态报告，需要true，不需要false
        String product = null;//产品ID
        String extno = null;//扩展码
         
        try {
            String returnString = HttpSender.batchSend(uri, account, pswd, mobiles, content, needstatus, product, extno);
            System.out.println(returnString);
            return returnString;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    
    /**
     * 飞信发送端口
     * @param phoneNumber 电话号码
     * @param message 短信内容
     * @return 标识
     */
    public static String sendFetionPhone(String phoneNumber,String message)
    {
        
        return "";
    }
    
    //发送用户短信并返回6为数字
    public static String sendPhoneForHuoDong(String phone)
    {
        String random = "111111";//getRandomStr();
//        try
//        {
//            sendPhone(phone,random);
//        }
//        catch (HttpException e)
//        {
//            e.printStackTrace();
//        }
//        catch (IOException e)
//        {
//            e.printStackTrace();
//        }
        return random;
    }
    
    public static String getRandomStr()
    {
        int i=(int)(Math.random()*1000000+100000); 
        String messageCode = String.valueOf(i);
        return messageCode;
    }
}
