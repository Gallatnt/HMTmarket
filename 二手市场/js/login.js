window.onload=function(){
	var inps =document.getElementsByTagName("input");
		re 	 =/[^\w\u4e00-\u9fa5]/g;
		num  =/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/g;
	for (var i = 0; i < inps.length; i++) {
		inps[i].i=i;
		inps[i].onfocus=function(){
			this.parentNode.parentNode.lastElementChild.style.display="block";
		}
				inps[i].onblur=function(){
					var dd=this.parentNode.parentNode,
						p =dd.getElementsByTagName("p")[0],
						i =dd.getElementsByTagName("i")[0];
			    		 check.blurs[this.id](i,this,p);
			}
				
	}
				var check={
					blurs:{
						name:function(a,b,c){
							if (b.value=="") {c.innerHTML="用户名不能为空"}
							else if(b.value.length<3 ||b.value.length>20){c.innerHTML="用户名长度注册名应在3-20个字符"}
							else if(re.test(b.value)){c.innerHTML="注册名只允许中文名、数字或英文"}
							else {c.innerHTML="<i></i>";}
						},
						psw:function(a,b,c){
							if (b.value.length<6) {c.innerHTML="请输入不少于6位的密码"}
							else if(re.test(b.value)){c.innerHTML="密码只允许中文名、数字或英文"}
							else {c.innerHTML="<i></i>";}
						},
						re_psw:function(a,b,c){
							if (b.value!==inps[3].value) {c.innerHTML="两次输入不正确"}
							else if(b.value=="") {c.innerHTML="不能为空"}
							else {c.innerHTML="<i></i>";}
						},
						youname:function(a,b,c){
							if (b.value=="") {c.innerHTML="姓名不能为空"}
							else {c.innerHTML="<i></i>";}
						},
						scl:function(a,b,c){
							if (b.value=="") {c.innerHTML="学校名不能为空"}
							else {c.innerHTML="<i></i>";}
							
						},
						tel:function(a,b,c){
							if (b.value=="") {c.innerHTML="手机不能为空"}
							else if(num.test(b.value)){c.innerHTML="请输入正确格式"}
							else {c.innerHTML="<i></i>";}
							
						},
						QQ:function(a,b,c){
							if (b.value=="") {c.innerHTML="QQ不能为空"}
							else if(!/^\d/g.test(b.value)){c.innerHTML="请输入正确格式"}
							else {c.innerHTML="<i></i>";}
							
						},
												mail:function(a,b,c){
							if (b.value=="") {c.innerHTML="邮箱不能为空"}
							else if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(b.value)){c.innerHTML="请输入正确格式"}
							else {c.innerHTML="<i></i>";}
							
						},
												iden:function(a,b,c){
							if (b.value=="") {c.innerHTML="身份证不能为空"}
							else if(!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/.test(b.value)){c.innerHTML="请输入正确格式"}
							else {c.innerHTML="<i></i>";}
							
						},
												num:function(a,b,c){
							if (b.value=="") {c.innerHTML="学号不能为空"}
							else {c.innerHTML="<i></i>";}
							
						},

					}
				}
	
}
