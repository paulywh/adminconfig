function checkattr()
{
	var username = $("#username").val();
	var password = $("#assword").val();
	if(!/^[A-Za-z0-9]+$/.test(username) || !/^[A-Za-z0-9]+$/.test(password)){  
        alert("请输正确的用户名密码");  
        return false;
    }
	return true;
}

