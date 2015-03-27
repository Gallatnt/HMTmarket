window.onload=function(){
	
	function forget(){
			var	mask=document.getElementById("mask")
	psw=document.getElementById("password")
	btn=document.getElementById("forget")
	icon=document.getElementById("close");
	heigh=document.documentElement.scrollHeight;
					btn.onclick=function(){
			mask.style.display="block";
			mask.style.height=heigh+"px";
			psw.style.display="block";
		}
		icon.onclick=function(){
			mask.style.display="none";
			psw.style.display="none";

		}
		}
forget()
}
