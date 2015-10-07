$(function() {
	$('#w').window('close');
	$('#test').datagrid({
		title:'My DataGrid',
		iconCls:'icon-save',
		width:700,
		height:350,
		nowrap: false,
		striped: true,
		collapsible:true,
		url:'js/datagrid_data.json',
		sortName: 'code',
		sortOrder: 'desc',
		remoteSort: false,
		idField:'code',
		frozenColumns:[[
			
		]],
		columns:[[
			{field:'code',title:'id',width:80,sortable:true},
			{field:'name',title:'姓名',width:80},
			{field:'addr',title:'性别',width:80},
			{field:'col4',title:'电话',width:80},
			{field:'image',title:'头像',width:80,align:'center',
				formatter:function(value,rec){
					var img = rec.img;
					return '<img src="../upimage/'+img+'" />';
				}
			},
			{field:'opt',title:'Operation',width:100,align:'center',
				formatter:function(value,rec){
					var data = rec.code;
					return '<span style="color:red"><input type="button" value="Delete" onclick="deletefunction('+data+');"></span>';
				}
			}
		]],
		pagination:true,
		rownumbers:true,
		toolbar:[{
			id:'btnadd',
			text:'增加用户',
			iconCls:'icon-add',
			handler:function(){
				$('#btnsave').linkbutton('enable');
				open1();
			}
		}]
	});
});
function close1(){
	$('#w').window('close');
}

function ajaxFileUpload()
{
	$.ajaxFileUpload  
    (
        {
            url:'useraction!upload.action',//用于文件上传的服务器端请求地址  
            secureuri:false,//一般设置为false  
            fileElementId:'file',//文件上传空间的id属性  <</span>input type="file" id="file" name="file" />  
            dataType: 'json',//返回值类型 一般设置为json  
            success: function (data, status)  //服务器成功响应处理函数  
            {
                //alert(data.message + "okokokokok");//从服务器返回的json中取出message中的数据,其中message为在struts2中定义的成员变量  
                //$("#testImg").attr("src",data.message);  
                if(typeof(data.message) != 'undefined')  
                {  
                    alert("操作成功");
                }  
            },  
            error: function (data, status, e)//服务器响应失败处理函数  
            {
                alert(e);  
            }  
        }  
    )
    return false;  
}

function open1(){
	$('#w').window('open');
}
function deletefunction(data)
{
	alert(data);
}

function getFileName(obj)  
{  
    flag=1;  
        var pos = -1;  
        if(obj.value.indexOf("/") > -1){  
            pos = obj.value.lastIndexOf("/")*1;  
    }else if(obj.value.indexOf("\\") > -1){  
            pos = obj.value.lastIndexOf("\\")*1;  
    }  
    var fileName =  obj.value.substring(pos+1);
    //alert(fileName);
    //$("#fileName").val(fileName);  
    //$('.files').text(fileName);  
}