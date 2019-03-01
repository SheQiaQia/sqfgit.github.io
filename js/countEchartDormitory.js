var dom_01 = document.getElementById("count_01");
var myChart_01 = echarts.init(dom_01);
option_01 = {
	title: {
		text: '预警事件统计',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['预警事件统计'],
		textStyle: {
			color: 'rgba(255,255,255,.8)' 
		},
		show:false
	},
	grid: {
		top:'5%',
		left: '3%',
		right: '4%',
		bottom: '6%',
		containLabel: true
	},
	toolbox: {
		feature: {
			saveAsImage: {}
		},
		show:false
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }],
	xAxis: {
		type: 'category',
		boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },formatter:function(params) {
				var newParamsName = "";
				var paramsNameNumber = params.length;
				var provideNumber = 5;  //一行显示几个字
				var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
				if (paramsNameNumber > provideNumber) {
					for (var p = 0; p < rowNumber; p++) {
						var tempStr = "";
						var start = p * provideNumber;
						var end = start + provideNumber;
						if (p == rowNumber - 1) {
							tempStr = params.substring(start, paramsNameNumber);
						} else {
							tempStr = params.substring(start, end) + "\n";
						}
						newParamsName += tempStr;
					}

				} else {
					newParamsName = params;
				}
				return newParamsName
			}
        },
		data: ['01-06[周六]','01-07[周日]','01-08[周一]','01-09[周二]','01-10[周三]','01-11[周四]','01-12[周五]','01-13[周六]',
		'01-14[周日]','01-15[周一]','01-16[周二]','01-17[周三]','01-18[周四]','01-19[周五]','01-20[周六]','01-21[周日]'],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	}, 
	yAxis: {
		type: 'value',
		splitLine: {
			lineStyle: {
				// 使用深浅的间隔色
				color: ['rgba(255,255,255,.1)']
			}
		},
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:{
			formatter:'{value}',
            textStyle: {
                color: "#00c7ff",
            }
		}/*,
		max:100*/
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'预警事件统计',
			type:'line',
			stack: '预警事件统计',
			areaStyle: {color: ['rgba(42,207,132,0.3)']},
			data:[20,10,30,20,15,25,18,10,20,30,20,12,17,22,15,25],
			color:'#2acf84'
		}
	]
};
if (option_01 && typeof option_01 === "object") {
	myChart_01.setOption(option_01, true);
	var index_01 = 0; //播放所在下标
	var mTime_01 = setInterval(function() {
		myChart_01.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_01
		});
		index_01++;
		if(index_01 >= option_01.xAxis.data.length) {
			index_01 = 0;
		}
	},2000);
}


var dom_02 = document.getElementById("count_02");
var myChart_02 = echarts.init(dom_02);
option_02 = {
	title: {
		text: '宿舍来访统计',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['总来访','校内来访','校外来访'],
		textStyle: {
			color: 'rgba(255,255,255,.8)' 
		}
	},
	grid: {
		top:'15%',
		left: '3%',
		right: '4%',
		bottom: '6%',
		containLabel: true
	},
	toolbox: {
		feature: {
			saveAsImage: {}
		},
		show:false
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
		data: ['01-08','01-09','01-10','01-11','01-12','01-13','01-14','01-15','01-16','01-17'],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }], 
	yAxis: {
		type: 'value',
		splitLine: {
			lineStyle: {
				// 使用深浅的间隔色
				color: ['rgba(255,255,255,.1)']
			}
		},
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:{
			formatter:'{value}',
            textStyle: {
                color: "#00c7ff",
            }
		}/*,
		max:100*/
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"人";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'总来访',
			type:'line',
			stack: '总来访',
			/*areaStyle: {color: ['rgba(39,197,127,0.3)']},*/
			data:[80,60,90,80,95,85,78,80,60,90],
			color:'#27c57f',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},{
			name:'校内来访',
			type:'line',
			stack: '校内来访',
			/*areaStyle: {color: ['rgba(255,145,31,0.3)']},*/
			data:[20,20,25,35,30,10,55,25,40,50],
			color:'#ff911f',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},{
			name:'校外来访',
			type:'line',
			stack: '校外来访',
			/*areaStyle: {color: ['rgba(221,223,46,0.3)']},*/
			data:[60,40,75,45,65,70,23,55,20,40],
			color:'#dddf2e',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};
if (option_02 && typeof option_02 === "object") {
	myChart_02.setOption(option_02, true);
	var index_02 = 0; //播放所在下标
	var mTime_02 = setInterval(function() {
		myChart_02.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_02
		});
		index_02++;
		if(index_02 >= option_02.xAxis.data.length) {
			index_02 = 0;
		}
	},2000);
}

var dom_03 = document.getElementById("count_03");
var myChart_03 = echarts.init(dom_03);
option_03 = {
	title: {
		text: '宿舍来访统计',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['校内来访'],
		textStyle: {
			color: 'rgba(255,255,255,.8)' 
		},
		show:false
	},
	grid: {
		top:'5%',
		left: '3%',
		right: '4%',
		bottom: '6%',
		containLabel: true
	},
	toolbox: {
		feature: {
			saveAsImage: {}
		},
		show:false
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
		data: ['01-08','01-09','01-10','01-11','01-12','01-13','01-14','01-15','01-16','01-17'],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }], 
	yAxis: {
		type: 'value',
		splitLine: {
			lineStyle: {
				// 使用深浅的间隔色
				color: ['rgba(255,255,255,.1)']
			}
		},
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:{
			formatter:'{value}',
            textStyle: {
                color: "#00c7ff",
            }
		}/*,
		max:100*/
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"人";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'校内来访',
			type:'line',
			stack: '校内来访',
			areaStyle: {color: ['rgba(255,145,31,0.3)']},
			data:[20,20,25,35,30,10,55,25,40,50],
			color:'#ff911f',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};
if (option_03 && typeof option_03 === "object") {
	myChart_03.setOption(option_03, true);
	var index_03 = 0; //播放所在下标
	var mTime_03 = setInterval(function() {
		myChart_03.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_03
		});
		index_03++;
		if(index_03 >= option_03.xAxis.data.length) {
			index_03 = 0;
		}
	},2000);
}


var dom_04 = document.getElementById("count_04");
var myChart_04 = echarts.init(dom_04);
option_04 = {
	title: {
		text: '宿舍来访统计',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['校外来访'],
		textStyle: {
			color: 'rgba(255,255,255,.8)' 
		},
		show:false
	},
	grid: {
		top:'5%',
		left: '3%',
		right: '4%',
		bottom: '6%',
		containLabel: true
	},
	toolbox: {
		feature: {
			saveAsImage: {}
		},
		show:false
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
		data: ['01-08','01-09','01-10','01-11','01-12','01-13','01-14','01-15','01-16','01-17'],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }], 
	yAxis: {
		type: 'value',
		splitLine: {
			lineStyle: {
				// 使用深浅的间隔色
				color: ['rgba(255,255,255,.1)']
			}
		},
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:{
			formatter:'{value}',
            textStyle: {
                color: "#00c7ff",
            }
		}/*,
		max:100*/
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"人";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'校外来访',
			type:'line',
			stack: '校外来访',
			areaStyle: {color: ['rgba(221,223,46,0.3)']},
			data:[60,40,75,45,65,70,23,55,20,40],
			color:'#dddf2e',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};
if (option_04 && typeof option_04 === "object") {
	myChart_04.setOption(option_04, true);
	var index_04 = 0; //播放所在下标
	var mTime_04 = setInterval(function() {
		myChart_04.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_04
		});
		index_04++;
		if(index_04 >= option_04.xAxis.data.length) {
			index_04 = 0;
		}
	},2000);
}


var dom_05 = document.getElementById("count_05");
var myChart_05 = echarts.init(dom_05);
option_05 = {
	title: {
		text: '本学期学生晚归统计',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['总异常','晚归','晚出','未归'],
		textStyle: {
			color: 'rgba(255,255,255,.8)' 
		}
	},
	grid: {
		top:'15%',
		left: '3%',
		right: '4%',
		bottom: '6%',
		containLabel: true
	},
	toolbox: {
		feature: {
			saveAsImage: {}
		},
		show:false
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
		data: ['01-08','01-09','01-10','01-11','01-12','01-13','01-14','01-15','01-16','01-17'],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }], 
	yAxis: {
		type: 'value',
		splitLine: {
			lineStyle: {
				// 使用深浅的间隔色
				color: ['rgba(255,255,255,.1)']
			}
		},
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:{
			formatter:'{value}',
            textStyle: {
                color: "#00c7ff",
            }
		}/*,
		max:100*/
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"人";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'总异常',
			type:'line',
			stack: '总异常',
			/*areaStyle: {color: ['rgba(39,197,127,0.3)']},*/
			data:[80,60,90,80,95,85,78,80,60,90],
			color:'#ff911f',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},{
			name:'晚归',
			type:'line',
			stack: '晚归',
			/*areaStyle: {color: ['rgba(255,145,31,0.3)']},*/
			data:[50,25,25,35,30,10,55,25,40,50],
			color:'#27d181',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},{
			name:'晚出',
			type:'line',
			stack: '晚出',
			/*areaStyle: {color: ['rgba(255,145,31,0.3)']},*/
			data:[20,15,55,15,30,10,10,25,20,20],
			color:'#dddf2e',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},{
			name:'未归',
			type:'line',
			stack: '未归',
			/*areaStyle: {color: ['rgba(221,223,46,0.3)']},*/
			data:[10,20,20,25,35,60,13,30,20,10],
			color:'#d02833',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};
if (option_05 && typeof option_05 === "object") {
	myChart_05.setOption(option_05, true);
	var index_05 = 0; //播放所在下标
	var mTime_05 = setInterval(function() {
		myChart_05.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_05
		});
		index_05++;
		if(index_05 >= option_05.xAxis.data.length) {
			index_05 = 0;
		}
	},2000);
}


var dom_06 = document.getElementById("count_06");
var myChart_06 = echarts.init(dom_06);
option_06 = {
	title: {
		text: '本学期学生晚归统计',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['晚归'],
		textStyle: {
			color: 'rgba(255,255,255,.8)' 
		},show:false
	},
	grid: {
		top:'15%',
		left: '3%',
		right: '4%',
		bottom: '6%',
		containLabel: true
	},
	toolbox: {
		feature: {
			saveAsImage: {}
		},
		show:false
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
		data: ['01-08','01-09','01-10','01-11','01-12','01-13','01-14','01-15','01-16','01-17'],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }], 
	yAxis: {
		type: 'value',
		splitLine: {
			lineStyle: {
				// 使用深浅的间隔色
				color: ['rgba(255,255,255,.1)']
			}
		},
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:{
			formatter:'{value}',
            textStyle: {
                color: "#00c7ff",
            }
		}/*,
		max:100*/
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"人";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'晚归',
			type:'line',
			stack: '晚归',
			areaStyle: {color: ['rgba(39,209,129,0.3)']},
			data:[50,25,25,35,30,10,55,25,40,50],
			color:'#27d181',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};
if (option_06 && typeof option_06 === "object") {
	myChart_06.setOption(option_06, true);
	var index_06 = 0; //播放所在下标
	var mTime_06 = setInterval(function() {
		myChart_06.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_06
		});
		index_06++;
		if(index_06 >= option_06.xAxis.data.length) {
			index_06 = 0;
		}
	},2000);
}



var dom_07 = document.getElementById("count_07");
var myChart_07 = echarts.init(dom_07);
option_07 = {
	title: {
		text: '本学期学生晚归统计',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['晚出'],
		textStyle: {
			color: 'rgba(255,255,255,.8)' 
		}
	},
	grid: {
		top:'15%',
		left: '3%',
		right: '4%',
		bottom: '6%',
		containLabel: true
	},
	toolbox: {
		feature: {
			saveAsImage: {}
		},
		show:false
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
		data: ['01-08','01-09','01-10','01-11','01-12','01-13','01-14','01-15','01-16','01-17'],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }], 
	yAxis: {
		type: 'value',
		splitLine: {
			lineStyle: {
				// 使用深浅的间隔色
				color: ['rgba(255,255,255,.1)']
			}
		},
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:{
			formatter:'{value}',
            textStyle: {
                color: "#00c7ff",
            }
		}/*,
		max:100*/
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"人";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'晚出',
			type:'line',
			stack: '晚出',
			areaStyle: {color: ['rgba(221,223,46,0.3)']},
			data:[30,35,75,45,65,70,23,55,20,40],
			color:'#dddf2e',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};
if (option_07 && typeof option_07 === "object") {
	myChart_07.setOption(option_07, true);
	var index_07 = 0; //播放所在下标
	var mTime_07 = setInterval(function() {
		myChart_07.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_07
		});
		index_07++;
		if(index_07 >= option_07.xAxis.data.length) {
			index_07 = 0;
		}
	},2000);
}

var dom_08 = document.getElementById("count_08");
var myChart_08 = echarts.init(dom_08);
option_08 = {
	title: {
		text: '本学期学生晚归统计',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['未归'],
		textStyle: {
			color: 'rgba(255,255,255,.8)' 
		}
	},
	grid: {
		top:'15%',
		left: '3%',
		right: '4%',
		bottom: '6%',
		containLabel: true
	},
	toolbox: {
		feature: {
			saveAsImage: {}
		},
		show:false
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
		data: ['01-08','01-09','01-10','01-11','01-12','01-13','01-14','01-15','01-16','01-17'],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }], 
	yAxis: {
		type: 'value',
		splitLine: {
			lineStyle: {
				// 使用深浅的间隔色
				color: ['rgba(255,255,255,.1)']
			}
		},
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:{
			formatter:'{value}',
            textStyle: {
                color: "#00c7ff",
            }
		}/*,
		max:100*/
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"人";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'未归',
			type:'line',
			stack: '未归',
			areaStyle: {color: ['rgba(208,40,51,0.3)']},
			data:[10,20,20,25,35,60,13,30,20,10],
			color:'#d02833',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};
if (option_08 && typeof option_08 === "object") {
	myChart_08.setOption(option_08, true);
	var index_08 = 0; //播放所在下标
	var mTime_08 = setInterval(function() {
		myChart_08.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_08
		});
		index_08++;
		if(index_08 >= option_08.xAxis.data.length) {
			index_08 = 0;
		}
	},2000);
}



$(function(){
	myChart_resize();
});
window.onresize = function(){
	myChart_resize();
}
function myChart_resize(){
	myChart_01.resize();
	myChart_02.resize();
	myChart_03.resize();
	myChart_04.resize();
	myChart_05.resize();
	myChart_06.resize();
	myChart_07.resize();
	myChart_08.resize();
}