/*
******************************
********** author:@zhou小白猪
******************************
*/

window.onload = function () {
    setTimeout(function(){
		if (document.readyState == 'complete') {
			$("#loading").hide();
		}
	},1000);
}
setTimeout(function(){
	$("#loading").hide();
},5000);

$(function(){
	countResize();
	/*setDateTime("nowTime");
	setInterval("setDateTime('nowTime')",1000);*/
	/* 添加背景星星 */
	for(i=0;i<400;i++){
		$(".starBg").append('<div class="star star-'+i+'"></div>');
	}
});
$(window).resize(function(){
	countResize();
});

function countResize(){
	$(".count_all").width($(window).width());
	$(".count_all").height($(window).height());
	$(".slideBox .bd li").each(function(index, element) {
        $(this).width($(".slideBox").width());
    });
	$(".kqaq_left").each(function(index, element) {
        $(this).width($(this).height());
		$(this).css("line-height",$(this).height()+"px");
		$(this).parent().children(".kqaq_right").width($(this).parent().width()-$(this).height()-30);
    });
}

/* 当前时间 */
function setDateTime(id){
	var d = new Date();
	var vYear = d.getFullYear();
	var vMon = d.getMonth() + 1;
	var vDay = d.getDate();                    
	var date = vMon+"/"+vDay+"/"+vYear;    //此处也可以写成 17/07/2014 一样识别    也可以写成 07-17-2014  但需要正则转
	var day = new Date(Date.parse(date));   //需要正则转换的则 此处为 : var day = new Date(Date.parse(date.replace(/-/g, '/')));
	var today = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
	var week = today[day.getDay()];
	var h = d.getHours();
	var m = d.getMinutes();
	var se = d.getSeconds();
	if (m < 10) {
		m = "0" + m;
	}
	if (se < 10) {
		se = "0" + se;
	}
	current_time = h + ':' + m + ":" + se;
	var thistext = vYear + "年" + vMon + "月" + vDay + "日" + "     " + week + " " +current_time;
	$("#"+id).html(thistext);
}