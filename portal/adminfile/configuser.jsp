<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="<%=request.getContextPath()%>/adminfile/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/adminfile/js/jquery.easyui.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/adminfile/js/configuser.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/adminfile/js/ajaxfileupload.js"></script>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/adminfile/js/themes/icon.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/adminfile/js/themes/default/easyui.css" />
<title>configuser</title>
</head>
<body>
<table id="test"></table>

<div id="w" class="easyui-window" title="My Window" iconCls="icon-save" style="width:500px;height:500px;padding:5px;">
<div class="easyui-layout" fit="true">
		<div region="center" border="false" style="padding:10px;background:#fff;border:1px solid #ccc;">
			<div style="background:#fafafa;padding:10px;width:300px;height:300px;">
			    <form id="ff" method="post" novalidate>
			        <div>
			            <label for="name">Name:</label>
			            <input class="easyui-validatebox" type="text" name="name" required="true"></input>
			        </div>
			        <div>
			            <label for="email">Email:</label>
			            <input class="easyui-validatebox" type="text" name="email" validType="email"></input>
			        </div>
			        <div>
			            <input type="file" id="file" name="file" />
						<input type="button" value="上传" onclick="return ajaxFileUpload();">
			        </div>
			        <div>
			            <input type="submit" value="Submit">
			        </div>
			    </form>
		</div>
	</div>
</div>
</body>
</html>