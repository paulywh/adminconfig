$(function() {
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
		rownumbers:false,
		toolbar:[{
			id:'btnadd',
			text:'增加用户',
			iconCls:'icon-add',
			handler:function(){
				$('#btnsave').linkbutton('enable');
				alert('add')
			}
		},{
			id:'btncut',
			text:'Cut',
			iconCls:'icon-cut',
			handler:function(){
				$('#btnsave').linkbutton('enable');
				alert('cut')
			}
		}]
	});
});
function deletefunction(data)
{
	alert(data);
}