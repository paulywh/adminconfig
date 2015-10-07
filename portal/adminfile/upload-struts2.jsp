<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 
<title></title>
<link href="<%=request.getContextPath() %>/adminfile/uploadify-v3.1/uploadify.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="<%=request.getContextPath() %>/adminfile/uploadify-v3.1/jquery-1.7.2.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/adminfile/uploadify-v3.1/jquery.uploadify-3.1.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/adminfile/uploadify-v3.1/swfobject.js"></script>
<script type="text/javascript">
 
$(document).ready(function(){
$("#file").uploadify({
		   'swf': 'uploadify-v3.1/uploadify.swf',
		   'uploader' : 'controlor/upload.action',//servlet的路径或者.jsp 这是访问servlet 'scripts/uploadif'
		   'queueID' : 'fileQueue', //和存放队列的DIV的id一致  
		   'auto'  : false, //是否自动开始  
		   'multi': true, //是否支持多文件上传,如果不支持改为false
		   'buttonText': '选择文件', //按钮上的文字  
		   'simUploadLimit' : 1, //一次同步上传的文件数目  
		   'fileSizeLimit' : '1GB',
		   'queueSizeLimit' : 10, //队列中同时存在的文件个数限制 ,如果一次只能上传1个，改为1.
		 //  'formData'     :{'path':path}, // 多个参数用逗号隔开 'name':$('#name').val(),'num':$('#num').val(),'ttl':$('#ttl').val()
		   'fileObjName'   : 'file',//和input的name属性值保持一致就好，Struts2就能处理了
		   'onSelect'		:function(file)
		   {
			   $("#a_upload").show();
		   },
		   　'onUploadSuccess': function ( fileObj, response, data) {  
		    var value = response ;
		    if("fail" == value)
		    {
		    	$("#a_upload").hide();
		    	alert("文件:" + fileObj.name + "上传失败");  
		    }else if("exist" == value)
		    {
		    	$("#a_upload").hide();
		    	alert(fileObj.name + "文件名重复");  
		    }else if("existBlank" == value)
		    {
		    	$("#a_upload").hide();
		    	alert(fileObj.name + "文件名存在空格");
		    }else if("outOfSize" == value)
		    {
		    	$("#a_upload").hide();
		    	alert("超出容量大小");  
		    }else
		    {
		    	  alert("文件:" + fileObj.name + "上传成功");
		    	  //window.location.href="${pageContext.request.contextPath}/controlor/controlorCloudStorage.html"
		    }
		   },  
		   　'onUploadError': function(event, queueID, fileObj,errorObj) {  
			   if (errorObj.type === "File Size"){
				   alert('超过文件上传大小限制（1G）！');
				   return;
				   }
		   　 		alert("文件:" + fileObj.name + "上传失败");  
		   },  
		   'onCancel': function(event, queueID, fileObj){  
		　		alert("取消了" + fileObj.name);  
		　   } 
		  });
		  
});
 
 
</script>
<style type="text/css">
body {
	margin:0;
	padding:0;
}
#fileUploader{
	float:left;
}
</style>
</head>
<body>
		<table width="100%">
		    <tr>
		    <td valign="middle">
		    	<div id="fileQueue" style="margin-bottom:10px;"></div> 
				<input type="file" name="file" id="file"/> 
				<input type="button" value="上传" onclick="javascript:jQuery('#file').uploadify('upload','*')" id="a_upload" />
		    	<div style="padding-top:10px; clear:both"><font color="ff6600">注：单个文件1G以内,同一目录下文件名不能相同</font></div>
		    </td>
		    </tr>
		    
		</table>
</body>
</html>