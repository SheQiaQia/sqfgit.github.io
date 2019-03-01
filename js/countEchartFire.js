var dom_01 = document.getElementById("count_middle_001");
var myChart_01 = echarts.init(dom_01);
option_01 = {
    series: [{
        color:["#04cbf5","rgba(255,255,255,.2)"],
        name: '演习',
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
                name: '演习',
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
        name: '测试',
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
                name: '测试',
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
        name: '真实火警',
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
                name: '真实火警',
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
        name: '误报警情',
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
                name: '误报警情',
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
		text: '近三个月预警事件',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['预警事件'],
		textStyle: {
			color: 'rgba(255,255,255,.8)' 
		},
		show:false
	},
	grid: {
		top:'5%',
		left: '3%',
		right: '6%',
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
		data: ['2018-12','2019-01','2019-02'],
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
			name:'预警事件',
			type:'line',
			stack: '预警事件',
			areaStyle: {color: ['rgba(189,27,10,0.3)']},
			data:[50,90,30],
			color:'#bd1b0a',
			/*symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小*/
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
		text: '设备在线率',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['设备在线率'],
		textStyle: {
			color: 'rgba(255,255,255,.8)' 
		},
		show:false
	},
	grid: {
		top:'5%',
		left: '3%',
		right: '6%',
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
		data: ['02-01','02-02','02-03','02-04','02-05','02-06','02-07','02-08','02-09','02-10','02-11','02-12'],
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
		},
		max:100
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
			name:'设备在线率',
			type:'line',
			stack: '设备在线率',
			areaStyle: {color: ['rgba(42,206,131,0.3)']},
			data:[80,60,90,80,95,85,78,80,60,90,80,60,90],
			color:'#2ace83',
			/*symbol: 'circle', // 拐点类型*/
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
        show:false
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器,坐标轴触发有效
            type : 'shadow'        // 默认为直线,可选为:'line' | 'shadow'
        },  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"";  
            }  
           return relVal;  
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
		top:'5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['1楼', '2楼', '3楼', '4楼', '5楼', '6楼', '7楼'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		}
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
		},
    },
    series: [{
		name:'设备数量',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
		barWidth : 25,//柱图宽度
		itemStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(
					0, 0, 0, 1,
					[
						{offset: 0, color: '#58e3f6'},
						{offset: 1, color: '#019efd'}
					]
				),
				borderColor:'#70e2ff',
                borderWidth:2,
			},
			emphasis: {
				color: new echarts.graphic.LinearGradient(
					0, 0, 0, 1,
					[
						{offset: 0, color: '#58e3f6'},
						{offset: 1, color: '#019efd'}
					]
				)
			}
		}
    }]
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
}