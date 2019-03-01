var dom_01 = document.getElementById("count_01");
var myChart_01 = echarts.init(dom_01);
option_01 = {
    legend: {
		textStyle: {
			color: '#ffffff' 
		}	
	},
	tooltip: {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器,坐标轴触发有效
            type : 'shadow'        // 默认为直线,可选为:'line' | 'shadow'
        }
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '5%',
		top:'15%',
		containLabel: true
	},
    dataset: {
        source: [
            ['日期', '01-01[周一]','01-02[周二]','01-03[周三]','01-04[周四]','01-05[周五]','01-06[周六]','01-07[周日]','01-08[周一]','01-09[周二]','01-10[周三]','01-11[周四]','01-12[周五]','01-13[周六]',
		'01-14[周日]','01-15[周一]','01-16[周二]','01-17[周三]','01-18[周四]','01-19[周五]','01-20[周六]','01-21[周日]'],
            ['应到', 658,658,658,658,658,658,658,658,658,658,658,658,658,658,658,658,658,658,658,658,658],
            ['总入', 640,652,630,640,652,630,640,652,630,640,652,630,640,652,630,640,652,630,640,652,630],
            ['总出', 640,652,630,640,652,630,640,652,630,640,652,630,640,652,630,640,652,630,640,652,630]
        ]
    },axisLabel: {
           inside: false,
                textStyle: {
                    color: '#04cbf5',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
				formatter:function(params) {
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
    xAxis: [
        {type: 'category', gridIndex: 0,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#04cbf5",
                width: 1,
                type: "solid"
            }
        },},
    ],
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:20
    }],
    yAxis: [
        {
			gridIndex: 0,
			splitLine: {
				lineStyle: {
					// 使用深浅的间隔色
					color: ['rgba(255,255,255,.2)']
				}
			},
			axisLine:{
				lineStyle:{
					color:'#04cbf5',
					width:1,
				}
			},
		},
    ],
    series: [
        // These series are in the first grid.
        {
			type: 'bar', 
			seriesLayoutBy: 'row',
			barWidth : 10,//柱图宽度
			itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#96d668'
                    }, {
                        offset: 1,
                        color: '#01babc'
                    }]),
                    barBorderRadius: [50,50,0,0],
                    borderWidth: 0,
                }
            },
		},{
			type: 'bar', 
			seriesLayoutBy: 'row',
			barWidth : 10,//柱图宽度
			itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#1a98f8'
                    }, {
                        offset: 1,
                        color: '#7049f0'
                    }]),
                    barBorderRadius: [50,50,0,0],
                    borderWidth: 0,
                }
            },
		},{
			type: 'bar', 
			seriesLayoutBy: 'row',
			barWidth : 10,//柱图宽度
			itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f7734e'
                    }, {
                        offset: 1,
                        color: '#e12945'
                    }]),
                    barBorderRadius: [50,50,0,0],
                    borderWidth: 0,
                }
            },
		}
    ]
};


if (option_01 && typeof option_01 === "object") {
	myChart_01.setOption(option_01, true);
	var index_01 = 0; //播放所在下标
	var mTime = setInterval(function() {
		myChart_01.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_01
		});
		index_01++;
		if(index_01 >= option_01.dataset.source[0].length) {
			index_01 = 0;
		}
	},2000);
}


var dom_02 = document.getElementById("count_02");
var myChart_02 = echarts.init(dom_02);
option_02 = {
	title: {
		text: '考勤统计',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['入校'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '5%',
		top:'15%',
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
		data: ['01-01[周一]','01-02[周二]','01-03[周三]','01-04[周四]','01-05[周五]','01-06[周六]','01-07[周日]','01-08[周一]','01-09[周二]','01-10[周三]','01-11[周四]','01-12[周五]','01-13[周六]',
		'01-14[周日]','01-15[周一]','01-16[周二]','01-17[周三]','01-18[周四]','01-19[周五]','01-20[周六]','01-21[周日]'],
        axisLabel: {
            show: true,
			interval:0,
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
	series: [
		{
			name:'入校',
			type:'line',
			stack: '入校',
			areaStyle: {color: ['rgba(4,203,245,0.3)']},
			data:[640,652,630,640,652,630,640,652,630,640,652,630,640,652,630,640,652,630,640,652,630],
			color:'#04cbf5',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};

if (option_02 && typeof option_02 === "object") {
	myChart_02.setOption(option_02, true);
	var index_02 = 0; //播放所在下标
	var mTime = setInterval(function() {
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
		text: '考勤统计',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['离校'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '5%',
		top:'15%',
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
		data: ['01-01[周一]','01-02[周二]','01-03[周三]','01-04[周四]','01-05[周五]','01-06[周六]','01-07[周日]','01-08[周一]','01-09[周二]','01-10[周三]','01-11[周四]','01-12[周五]','01-13[周六]',
		'01-14[周日]','01-15[周一]','01-16[周二]','01-17[周三]','01-18[周四]','01-19[周五]','01-20[周六]','01-21[周日]'],
        axisLabel: {
            show: true,
			interval:0,
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
	series: [
		{
			name:'离校',
			type:'line',
			stack: '离校',
			areaStyle: {color: ['rgba(41,206,133,0.3)']},
			data:[640,652,630,640,652,630,640,652,630,640,652,630,640,652,630,640,652,630,640,652,630],
			color:'#29ce85',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};

if (option_03 && typeof option_03 === "object") {
	myChart_03.setOption(option_03, true);
	var index_03 = 0; //播放所在下标
	var mTime = setInterval(function() {
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


var dom_05 = document.getElementById("count_05");
var myChart_05 = echarts.init(dom_05);
option_05 = {
	title: {
		text: '学生迟到分析',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['总迟到','上午迟到','下午迟到'],
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
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
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
			name:'总迟到',
			type:'line',
			stack: '总迟到',
			/*areaStyle: {color: ['rgba(39,197,127,0.3)']},*/
			data:[80,60,90,80,95,85,78,80,60,90],
			color:'#27d181',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},{
			name:'上午迟到',
			type:'line',
			stack: '上午迟到',
			/*areaStyle: {color: ['rgba(255,145,31,0.3)']},*/
			data:[50,25,45,35,30,30,45,25,40,50],
			color:'#ff911f',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},{
			name:'下午迟到',
			type:'line',
			stack: '下午迟到',
			/*areaStyle: {color: ['rgba(255,145,31,0.3)']},*/
			data:[30,35,45,45,65,50,23,55,20,40],
			color:'#dddf2e',
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
		text: '学生迟到分析',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['上午迟到'],
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
			name:'上午迟到',
			type:'line',
			stack: '上午迟到',
			areaStyle: {color: ['rgba(255,145,31,0.3)']},
			data:[50,25,25,35,30,10,55,25,40,50],
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
			index_06 = 0;
		}
	},2000);
}



var dom_07 = document.getElementById("count_07");
var myChart_07 = echarts.init(dom_07);
option_07 = {
	title: {
		text: '学生迟到分析',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['下午迟到'],
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
			name:'下午迟到',
			type:'line',
			stack: '下午迟到',
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
        text: '',
		show:false
    },
    tooltip: {},
    legend: {
        data: ['年级全勤率分析'],
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
		radius:"60%",
        indicator: [
           { name: '一年级', max: 100},
           { name: '二年级', max: 100},
           { name: '三年级', max: 100},
           { name: '四年级', max: 100},
           { name: '五年级', max: 100},
           { name: '六年级', max: 100}
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
                value : [90,80,98,95,70,99],
                name : '年级全勤率分析'
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
if (option_08 && typeof option_08 === "object") {
	myChart_08.setOption(option_08, true);
}

/*var dom_09 = document.getElementById("count_09");
var myChart_09 = echarts.init(dom_09);
option_09 = {
    legend: {
		textStyle: {
			color: '#ffffff' 
		}	
	},
	tooltip: {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器,坐标轴触发有效
            type : 'shadow'        // 默认为直线,可选为:'line' | 'shadow'
        }
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '5%',
		top:'15%',
		containLabel: true
	},
    dataset: {
        source: [
            ['年级','一年级','二年级','三年级','四年级','五年级','六年级'],
            ['总数', 58,55,60,53,56,50],
            ['总入', 58,55,58,52,53,48],
            ['总出', 58,55,58,52,53,48]
        ]
    },axisLabel: {
           inside: false,
                textStyle: {
                    color: '#04cbf5',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
				formatter:function(params) {
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
    xAxis: [
        {type: 'category', gridIndex: 0,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#04cbf5",
                width: 1,
                type: "solid"
            }
        },},
    ],
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }],
    yAxis: [
        {
			gridIndex: 0,
			splitLine: {
				lineStyle: {
					// 使用深浅的间隔色
					color: ['rgba(255,255,255,.2)']
				}
			},
			axisLine:{
				lineStyle:{
					color:'#04cbf5',
					width:1,
				}
			},
		},
    ],
    series: [
        // These series are in the first grid.
        {
			type: 'bar', 
			seriesLayoutBy: 'row',
			barWidth : 8,//柱图宽度
			itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#96d668'
                    }, {
                        offset: 1,
                        color: '#01babc'
                    }]),
                    barBorderRadius: [50,50,0,0],
                    borderWidth: 0,
                }
            },
		},{
			type: 'bar', 
			seriesLayoutBy: 'row',
			barWidth : 8,//柱图宽度
			itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#1a98f8'
                    }, {
                        offset: 1,
                        color: '#7049f0'
                    }]),
                    barBorderRadius: [50,50,0,0],
                    borderWidth: 0,
                }
            },
		},{
			type: 'bar', 
			seriesLayoutBy: 'row',
			barWidth : 8,//柱图宽度
			itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f7734e'
                    }, {
                        offset: 1,
                        color: '#e12945'
                    }]),
                    barBorderRadius: [50,50,0,0],
                    borderWidth: 0,
                }
            },
		}
    ]
};


if (option_09 && typeof option_09 === "object") {
	myChart_09.setOption(option_09, true);
	var index_09 = 0; //播放所在下标
	var mTime = setInterval(function() {
		myChart_09.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_09
		});
		index_09++;
		if(index_09 >= option_09.dataset.source[0].length) {
			index_09 = 0;
		}
	},2000);
}
*/

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
	myChart_05.resize();
	myChart_06.resize();
	myChart_07.resize();
	myChart_08.resize();
	/*myChart_09.resize();*/
}