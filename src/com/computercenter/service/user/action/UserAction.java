package com.computercenter.service.user.action;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.mail.MessagingException;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.RequestAware;

import com.alibaba.fastjson.JSONObject;
import com.computercenter.common.util.ActionUtil;
import com.computercenter.service.user.bean.MenusBean;
import com.computercenter.service.user.bean.UserBean;
import com.computercenter.service.user.manager.UserManager;

import javax.servlet.http.HttpServletResponse;

import com.opensymphony.xwork2.ActionSupport;

public class UserAction extends ActionSupport implements RequestAware{

	private static final long serialVersionUID = -6007394476923963291L;

	private UserManager userManager;
	
	private String username;
	
	private String password;
	
	private File file;
	 
    private String fileFileName;
 
    private String fileContentType;
 
    private String path = "";
 
    private String errorCode = "";
 
    String msg = "";
	
	public String doLogin() throws IOException, MessagingException
    {
		UserBean ub = new UserBean();
		ub.setUsername(username);
		ub.setPassword(password);
		List<MenusBean> mblist = userManager.checkUser(ub);
		if(mblist != null)
		{
			JSONObject json = new JSONObject();
	        json.put("basic", mblist);
	        ServletActionContext.getRequest().setAttribute("userlimitjson", json.toJSONString());
			return "success";
		}
		else
		{
			return "error";	
		}
    }
	
	public String toKaoQin()
	{
		return null;
	}
	
	public void upload()
	{
	    String result = "fail";
        HttpServletResponse response = null;
        try {
            response = ServletActionContext.getResponse();
 
            if (null != file) {
                String targetDirectory = ServletActionContext
                        .getServletContext().getRealPath("/uploads");
                String targetFileName = generateFileName(fileFileName);
                File target = new File(targetDirectory, targetFileName);
 
                if (!file.exists()) {
                    // 处理文件大小为0kb的情况
                    file = new File(file.getPath());
                    FileWriter fileWriter = new FileWriter(file);
                    fileWriter.write(" ");
                    fileWriter.flush();
                    fileWriter.close();
                }
 
                FileUtils.copyFile(file, target);
                result = "操作成功";
                JSONObject json = new JSONObject();
                json.put("message", result);
                ActionUtil.resultData(json.toJSONString());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
 
//        try {
//            response.getWriter().write(result);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
	}
	
	/**
     * 生成文件名
     * @param fileName
     * @return
     */
    private String generateFileName(String fileName) {
        DateFormat format = new SimpleDateFormat("yyMMddHHmmss");
        String formatDate = format.format(new Date());
 
        int random = new Random().nextInt(10000);
 
        int position = fileName.lastIndexOf(".");
        String extension = fileName.substring(position);
 
        return formatDate + random + extension;
    }
    
	@Override
	public void setRequest(Map<String, Object> arg0) {
	}


	public UserManager getUserManager() {
		return userManager;
	}

	public void setUserManager(UserManager userManager) {
		this.userManager = userManager;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

    public File getFile()
    {
        return file;
    }

    public void setFile(File file)
    {
        this.file = file;
    }

    public String getFileFileName()
    {
        return fileFileName;
    }

    public void setFileFileName(String fileFileName)
    {
        this.fileFileName = fileFileName;
    }

    public String getFileContentType()
    {
        return fileContentType;
    }

    public void setFileContentType(String fileContentType)
    {
        this.fileContentType = fileContentType;
    }

    public String getPath()
    {
        return path;
    }

    public void setPath(String path)
    {
        this.path = path;
    }

    public String getErrorCode()
    {
        return errorCode;
    }

    public void setErrorCode(String errorCode)
    {
        this.errorCode = errorCode;
    }
}
