window.onload=function(){
var pic=document.getElementById("picbox").getElementsByTagName("img"),
	 li=document.getElementById("picbox").getElementsByTagName("li"),
	 time=document.getElementById("time"),
	year=new Date() .getFullYear()
	month=new Date() .getMonth()+1
	mydate=new Date() .getDate()
	hour=new Date() .getHours()
	min=new Date() .getMinutes()
	sec=new Date() .getSeconds()
	Text=document.getElementsByTagName("textarea")
	 a=0,
	timer=0;
	time.innerHTML=year+"-"+month+"."+mydate+" "+hour+":"+min+":"+sec;
		for (var i = 0; i < li.length; i++) {
			li[i].i=i;
			li[i].onmouseover=function(){
					clearInterval(timer)
					change(this.i)		
					a=this.i;
			}
			li[i].onclick=function(){return false;}
			li[i].onmouseout=function(){
				timer=setInterval(count,1000);
			}
		}
		
	timer=setInterval(count,1000);
function count (){
		a++;
		if (a>=pic.length) {a=0}
		
		change(a)
}
function change(index){
	    				for (var j = 0; j < pic.length; j++) {
					pic[j].style.top="250px";
					li[j].firstChild.className="";
				}
				  pic[index].style.position = "absolute";
				  pic[index].style.top = "0";
				  li[index].firstChild.className="hover";
}
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
};