window.onload=function(){
	myFocus.set({id:"adv"})
var area=document.getElementById("noticeBox"),
	timer=0,
	btn1=document.getElementById("btn1")
	btn2=document.getElementById("btn2")
	goods=document.getElementById("goods").childNodes;
	area.innerHTML +=area.innerHTML;
	area.scrollTop=0;
//								遮罩
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

///       公告栏部分
function startscroll(){
		area.scrollTop++;
		timer=setInterval(scrollup,50)
	}
function scrollup() {
	area.scrollTop++;
	if (area.scrollTop % 30 ==0) {
			clearTimeout(timer);
			setTimeout(startscroll,2000)}
	else {area.scrollTop++;}
		if (area.scrollTop >= area.scrollHeight/2) {
		area.scrollTop=0;
	}
}
setTimeout(startscroll,1000)

//                      模式切换
	btn1.onclick=function(){
		btn1.className="pic_on";
		btn2.className="list_off";
		for (var i = 0; i < goods.length; i++) {
			goods[i].className="goods";
		}
		return false;
	}
		btn2.onclick=function(){
		btn2.className="list_on";
		btn1.className="pic_off";
				for (var i = 0; i < goods.length; i++) {
			goods[i].className="small";
		}
		return false;
	}
};