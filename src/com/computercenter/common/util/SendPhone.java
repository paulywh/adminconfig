package com.computercenter.common.util;

import java.io.IOException;

import org.apache.commons.httpclient.Header;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.methods.PostMethod;

public class SendPhone
{
    public static void main(String[] args) throws HttpException, IOException
    {
        double db = -1d;
        double db1 = -1d;
        System.out.println(db == db1);
        //sendPhone("13718769723","我是好人");
    }
    
    /**
     * http://sms.webchinese.cn/User/?action=sms
     * 短信发送端口：username:paul5-5 password:123456789a
     * @return
     * @throws HttpException
     * @throws IOException
     */
    public static String sendPhone(String phoneNumber,String testMessage) throws HttpException, IOException
    {
        HttpClient client = new HttpClient();
        PostMethod post = new PostMethod("http://utf8.sms.webchinese.cn");
        post.addRequestHeader("Content-Type",
                "application/x-www-form-urlencoded;charset=utf-8");//在头文件中设置转码
        NameValuePair[] data = {new NameValuePair("Uid", "paul5-5"),
                new NameValuePair("Key", "a688214a52ecfafc665c"),
                new NameValuePair("smsMob", phoneNumber),
                new NameValuePair("smsText", testMessage)};
        post.setRequestBody(data);
        
        client.executeMethod(post);
        Header[] headers = post.getResponseHeaders();
        int statusCode = post.getStatusCode();
        System.out.println("statusCode:" + statusCode);
        
        for (Header h : headers)
        {
            System.out.println(h.toString());
        }
        String result = new String(post.getResponseBodyAsString()
                .getBytes("utf-8"));
        System.out.println(result);
        
        post.releaseConnection();
        return result;
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
}
