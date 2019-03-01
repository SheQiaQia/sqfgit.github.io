var dom_01 = document.getElementById("count_middle_001");
var myChart_01 = echarts.init(dom_01);
option_01 = {
    series: [{
        color:["#04cbf5","rgba(255,255,255,.2)"],
        name: '优秀',
        type: 'pie',
        radius: ['56%', '60%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '15',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 35,/*优秀的比例*/
                name: '1256',
                label: {
                    normal: {
                        textStyle: {
                            fontSize: '24',
                            fontWeight: 'bold'
                        }
                    }
                },
            },
            {
                value: 65,/*除了优秀剩下的比例*/
                name: '优秀',
                label: {
                    normal: {
                         textStyle: {
                            fontSize: '15',
                            color:'rgba(255,255,255,.9)',
                            /*fontWeight: 'bold'*/
                        },
                        padding: [135, 0, 0, 0]
                    }
                },
            }
        ]
    }]
};
if (option_01 && typeof option_01 === "object") {
	myChart_01.setOption(option_01, true);
}

var dom_02 = document.getElementById("count_middle_002");
var myChart_02 = echarts.init(dom_02);
option_02 = {
    series: [{
        color:["#04cbf5","rgba(255,255,255,.2)"],
        name: '良好',
        type: 'pie',
        radius: ['56%', '60%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '15',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 30,
                name: '985',
                label: {
                    normal: {
                        textStyle: {
                            fontSize: '24',
                            fontWeight: 'bold'
                        }
                    }
                },
            },
            {
                value: 70,
                name: '良好',
                label: {
                    normal: {
                         textStyle: {
                            fontSize: '15',
                            color:'rgba(255,255,255,.9)',
                            /*fontWeight: 'bold'*/
                        },
                        padding: [135, 0, 0, 0]
                    }
                },
            }
        ]
    }]
};
if (option_02 && typeof option_02 === "object") {
	myChart_02.setOption(option_02, true);
}

var dom_03 = document.getElementById("count_middle_003");
var myChart_03 = echarts.init(dom_03);
option_03 = {
    series: [{
        color:["#04cbf5","rgba(255,255,255,.2)"],
        name: '及格',
        type: 'pie',
        radius: ['56%', '60%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '15',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 80,
                name: '3003',
                label: {
                    normal: {
                        textStyle: {
                            fontSize: '24',
                            fontWeight: 'bold'
                        }
                    }
                },
            },
            {
                value: 20,
                name: '及格',
                label: {
                    normal: {
                         textStyle: {
                            fontSize: '15',
                            color:'rgba(255,255,255,.9)',
                            /*fontWeight: 'bold'*/
                        },
                        padding: [135, 0, 0, 0]
                    }
                },
            }
        ]
    }]
};
if (option_03 && typeof option_03 === "object") {
	myChart_03.setOption(option_03, true);
}

var dom_04 = document.getElementById("count_middle_004");
var myChart_04 = echarts.init(dom_04);
option_04 = {
    series: [{
        color:["#04cbf5","rgba(255,255,255,.2)"],
        name: '不及格',
        type: 'pie',
        radius: ['56%', '60%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '15',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value:20,
                name: '565',
                label: {
                    normal: {
                        textStyle: {
                            fontSize: '24',
                            fontWeight: 'bold'
                        }
                    }
                },
            },
            {
                value: 80,
                name: '不及格',
                label: {
                    normal: {
                         textStyle: {
                            fontSize: '15',
                            color:'rgba(255,255,255,.9)',
                            /*fontWeight: 'bold'*/
                        },
                        padding: [135, 0, 0, 0]
                    }
                },
            }
        ]
    }]
};
if (option_04 && typeof option_04 === "object") {
	myChart_04.setOption(option_04, true);
}


var dom_05 = document.getElementById("count_05");
var myChart_05 = echarts.init(dom_05);
option_05 = {
	title: {
		text: '体质测试统计',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['优秀率'],
		textStyle: {
			color: '#ffffff' 
		},show:false
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '5%',
		top:'5%',
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
		data: ['01-30','01-25','01-23','01-21','01-20','01-18','01-15','01-12','01-10','01-05',],
        axisLabel: {
            show: true,
			interval:0,
            textStyle: {
                color: "#00c7ff",
            }
        },
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
				color: ['rgba(255,255,255,.2)']
			}
		},
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
        max: 100,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal +=  '<br/>' + "总测人数 : 500人" 
							+ '<br/>' + "优秀人数 : 300人" 
							+ '<br/>' + params[i].seriesName + ' : ' + params[i].value+"%" 
						
				;  
           }  
           return relVal;  
        }
	},
	series: [
		{
			name:'优秀率',
			type:'line',
			stack: '优秀率',
			areaStyle: {color: ['rgba(42,229,141,0.3)']},
			data:[90,80,95,70,80,85,89,87,95,100],
			color:'#2ae58d',
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
		text: '体质测试统计',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['及格率'],
		textStyle: {
			color: '#ffffff' 
		},show:false
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '5%',
		top:'5%',
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
		data: ['01-30','01-25','01-23','01-21','01-20','01-18','01-15','01-12','01-10','01-05',],
        axisLabel: {
            show: true,
			interval:0,
            textStyle: {
                color: "#00c7ff",
            }
        },
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
				color: ['rgba(255,255,255,.2)']
			}
		},
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
        max: 100,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal +=  '<br/>' + "总测人数 : 500人" 
							+ '<br/>' + "及格人数 : 300人" 
							+ '<br/>' + params[i].seriesName + ' : ' + params[i].value+"%" 
						
				;  
           }  
           return relVal;  
        }
	},
	series: [
		{
			name:'及格率',
			type:'line',
			stack: '及格率',
			areaStyle: {color: ['rgba(255,145,31,0.3)']},
			data:[70,80,85,89,87,95,100,90,80,75],
			color:'#ff911f',
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
			index = 0;
		}
	},2000);
}



var dom_07 = document.getElementById("count_07");
var myChart_07 = echarts.init(dom_07);
option_07 = {
	title: {
		text: '体质测试统计',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['不及格率'],
		textStyle: {
			color: '#ffffff' 
		},show:false
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '5%',
		top:'5%',
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
		data: ['01-30','01-25','01-23','01-21','01-20','01-18','01-15','01-12','01-10','01-05',],
        axisLabel: {
            show: true,
			interval:0,
            textStyle: {
                color: "#00c7ff",
            }
        },
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
				color: ['rgba(255,255,255,.2)']
			}
		},
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
        max: 100,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal +=  '<br/>' + "总测人数 : 500人" 
							+ '<br/>' + "不及格人数 : 300人" 
							+ '<br/>' + params[i].seriesName + ' : ' + params[i].value+"%" 
						
				;  
           }  
           return relVal;  
        }
	},
	series: [
		{
			name:'不及格率',
			type:'line',
			stack: '不及格率',
			areaStyle: {color: ['rgba(247,68,64,0.3)']},
			data:[60,50,70,83,75,79,67,50,70,65],
			color:'#f74440',
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
		text: '血氧测量',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['血氧测量'],
		textStyle: {
			color: '#ffffff' 
		},show:false
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '5%',
		top:'5%',
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
		data: ['01-30','01-25','01-23','01-21','01-20','01-18','01-15','01-12','01-10','01-05',],
        axisLabel: {
            show: true,
			interval:0,
            textStyle: {
                color: "#00c7ff",
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	/*dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }],*/
	yAxis: {
		type: 'value',
		splitLine: {
			lineStyle: {
				// 使用深浅的间隔色
				color: ['rgba(255,255,255,.2)']
			}
		},
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal +=  '<br/>' + params[i].seriesName + ' : ' + params[i].value+"人" 
						
				;  
           }  
           return relVal;  
        }
	},
	series: [
		{
			name:'血氧测量人数',
			type:'line',
			stack: '血氧测量人数',
			/*areaStyle: {color: ['rgba(4,203,245,0.3)']},*/
			data:[270,280,285,289,287,295,300,290,280,275],
			color:'#04cbf5',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},{
			name:'正常',
			type:'line',
			stack: '正常',
			/*areaStyle: {color: ['rgba(42,229,141,0.3)']},*/
			data:[250,260,255,260,277,235,260,240,230,260],
			color:'#2ae58d',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},{
			name:'异常',
			type:'line',
			stack: '异常',
			/*areaStyle: {color: ['rgba(247,68,64,0.3)']},*/
			data:[20,20,30,39,10,60,40,50,50,15],
			color:'#f74440',
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


var dom_09 = document.getElementById("count_09");
var myChart_09 = echarts.init(dom_09);
option_09 = {
	title: {
		text: '血压测量',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['血压测量'],
		textStyle: {
			color: '#ffffff' 
		},show:false
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '5%',
		top:'5%',
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
		data: ['01-30','01-25','01-23','01-21','01-20','01-18','01-15','01-12','01-10','01-05',],
        axisLabel: {
            show: true,
			interval:0,
            textStyle: {
                color: "#00c7ff",
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	/*dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }],*/
	yAxis: {
		type: 'value',
		splitLine: {
			lineStyle: {
				// 使用深浅的间隔色
				color: ['rgba(255,255,255,.2)']
			}
		},
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal +=  '<br/>' + params[i].seriesName + ' : ' + params[i].value+"人" 
						
				;  
           }  
           return relVal;  
        }
	},
	series: [
		{
			name:'血压测量人数',
			type:'line',
			stack: '血压测量人数',
			/*areaStyle: {color: ['rgba(4,203,245,0.3)']},*/
			data:[270,280,285,289,287,295,300,290,280,275],
			color:'#04cbf5',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},{
			name:'正常',
			type:'line',
			stack: '正常',
			/*areaStyle: {color: ['rgba(42,229,141,0.3)']},*/
			data:[250,260,255,260,277,235,260,240,230,260],
			color:'#2ae58d',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},{
			name:'异常',
			type:'line',
			stack: '异常',
			/*areaStyle: {color: ['rgba(247,68,64,0.3)']},*/
			data:[20,20,30,39,10,60,40,50,50,15],
			color:'#f74440',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};

if (option_09 && typeof option_09 === "object") {
	myChart_09.setOption(option_09, true);
	var index_09 = 0; //播放所在下标
	var mTime_09 = setInterval(function() {
		myChart_09.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_09
		});
		index_09++;
		if(index_09 >= option_09.xAxis.data.length) {
			index_09 = 0;
		}
	},2000);
}


var dom_10 = document.getElementById("count_10");
var myChart_10 = echarts.init(dom_10);
option_10 = {
	title: {
		text: '心率测量',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['心率测量'],
		textStyle: {
			color: '#ffffff' 
		},show:false
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '5%',
		top:'5%',
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
		data: ['01-30','01-25','01-23','01-21','01-20','01-18','01-15','01-12','01-10','01-05',],
        axisLabel: {
            show: true,
			interval:0,
            textStyle: {
                color: "#00c7ff",
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	/*dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }],*/
	yAxis: {
		type: 'value',
		splitLine: {
			lineStyle: {
				// 使用深浅的间隔色
				color: ['rgba(255,255,255,.2)']
			}
		},
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal +=  '<br/>' + params[i].seriesName + ' : ' + params[i].value+"人" 
						
				;  
           }  
           return relVal;  
        }
	},
	series: [
		{
			name:'心率测量人数',
			type:'line',
			stack: '心率测量人数',
			/*areaStyle: {color: ['rgba(4,203,245,0.3)']},*/
			data:[270,280,285,289,287,295,300,290,280,275],
			color:'#04cbf5',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},{
			name:'正常',
			type:'line',
			stack: '正常',
			/*areaStyle: {color: ['rgba(42,229,141,0.3)']},*/
			data:[250,260,255,260,277,235,260,240,230,260],
			color:'#2ae58d',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},{
			name:'异常',
			type:'line',
			stack: '异常',
			/*areaStyle: {color: ['rgba(247,68,64,0.3)']},*/
			data:[20,20,30,39,10,60,40,50,50,15],
			color:'#f74440',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};

if (option_10 && typeof option_10 === "object") {
	myChart_10.setOption(option_10, true);
	var index_10 = 0; //播放所在下标
	var mTime_10 = setInterval(function() {
		myChart_10.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_10
		});
		index_10++;
		if(index_10 >= option_10.xAxis.data.length) {
			index_10 = 0;
		}
	},2000);
}


var dom_11 = document.getElementById("count_11");
var myChart_11 = echarts.init(dom_11);
option_11 = {
    title: {
        text: '',
		show:false
    },
    tooltip: {},
    legend: {
        data: ['体侧项目统计分析'],
		show:false
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                borderRadius: 5,
                padding: [-5, -5]
           }
        },
		radius:"72%",
        indicator: [
           { name: 'BMI', max: 100},
           { name: '50米跑', max: 100},
           { name: '坐位体前驱', max: 100},
           { name: '立定跳远', max: 100},
           { name: '引体向上', max: 100},
           { name: '仰卧起坐', max: 100},
           { name: '1000米长跑', max: 100},
           { name: '800米长跑', max: 100}
        ],splitArea : {
            show : true,
            areaStyle : {
                color: 'rgba(255,255,255,.1)', // 图表背景的颜色
            },
        },
        splitLine : {
            show : true,
            lineStyle : {
                width : 1,
                color : 'rgba(255,255,255,.3)', // 设置网格的颜色
            },
        }
    },
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [90,80,98,95,70,99,70,99],
                name : '体侧项目统计分析'
            }
        ],itemStyle: {
                    normal: {
						areaStyle: {color: ['rgba(42,206,133,.6)']},
                        color: 'rgba(42,206,133,1)',
                        lineStyle: {
                            color: 'rgba(42,206,133,1)',
                        },
                    },
                },
    }]
};
if (option_11 && typeof option_11 === "object") {
	myChart_11.setOption(option_11, true);
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
	myChart_09.resize();
	myChart_10.resize();
	myChart_11.resize();
}