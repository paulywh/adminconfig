<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>登录</title>
<link rel="stylesheet" type="text/css" href="css/login.css" />
<script src="js/login.js"></script>
<script type="text/javascript" src="js/jquery/jQuery.js"></script>
</head>
<body>
<form action="useraction!doLogin.action"  onsubmit="return checkattr();" method="post">
<div class="form-4">
		    <h1>欢迎登录</h1>
		    <p>
		        <label for="login">用户名</label>
		        <input type="text" id="username" placeholder="用户名" name="username">
		    </p>
		    <p>
		        <label for="password">密码</label>
		        <input type="password" id= "assword" placeholder="密码" name="assword"> 
		    </p>
	
		    <p>
		        <input type="submit" name="submit" value="确定" >
		    </p>       
</div>
</form>
</body>
</html>