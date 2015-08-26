$(document).ready(function(){
	$("#submitreg").click(popTips);
	$("#submitregstep2").click(submitstep2);
});
function submitstep2()
{
	alert("注册成功");
}
//弹出层调用
function popTips(){
	//后台校验
	$.ajax({
		type:"post",
		url:"register!regQyUser.action",
		data:{loginName:$("#loginName").val(),qyName:$("#qyName").val(),email:$("#email").val(),checkCode:$("#checkCode").val()},
		contentType:"application/x-www-form-urlencoded; charset=UTF-8",
		success:function(data)
		{
		    var mObj=jQuery.parseJSON(data);
		    alert(mObj.mail);
		    $("#registerreturn").html("邮件已发送到邮箱" + mObj.mail);
		    showTipsWindown("验证您的用户名", 'simTestContent', 600, 255);
		},
		error:function(data)
		{
		    alert("请求失败");
		}
	});
}
function showTipsWindown(title,id,width,height){
	tipsWindown(title,"id:"+id,width,height,"true","","true",id);
}
