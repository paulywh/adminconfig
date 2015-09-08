function checkattr()
{
	var username = $("#username").val();
	var assword = $("#assword").val();
	if(!/^[A-Za-z0-9]+$/.test(username) || !/^[A-Za-z0-9]+$/.test(assword)){  
        alert("请输正确的用户名密码");  
        return false;
    }
	return true;
}

