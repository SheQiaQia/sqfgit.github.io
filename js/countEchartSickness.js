var dom_01 = document.getElementById("count_01");
var myChart_01 = echarts.init(dom_01);
option_01 = {
	title: {
		text: '折线图堆叠',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['疾病趋势分析'],
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
		data: ['01-08[周一]','01-09[周二]','01-10[周三]','01-11[周四]','01-12[周五]','01-13[周六]',
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
			name:'疾病发生次数',
			type:'line',
			stack: '疾病发生次数',
			areaStyle: {color: ['rgba(42,207,132,0.3)']},
			data:[5,2,3,6,2,0,0,5,6,8,2,1,0,0],
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
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: '',
        x: 'left',
        data:['疑似传染疾病','一般疾病'],
		show:false,
		textStyle: {
			fontSize: '12',
			color:'#ffffff'
		}
    },
    series: [
        {
            name:'传染性分析',
            type:'pie',
            radius: ['40%', '60%'],
			color:['#f69746','#2acf84'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'left',
					formatter: '{b}\n[{c}例]',
                    textStyle: {
                        fontSize: '13'
                    },
					color:'#fff'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:135, name:'疑似传染疾病'/*, selected:true*/},
                {value:310, name:'一般疾病'}
            ]
        }
    ]
};

if (option_02 && typeof option_02 === "object") {
	myChart_02.setOption(option_02, true);
}


var dom_03 = document.getElementById("count_03");
var myChart_03 = echarts.init(dom_03);
option_03 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: '',
        x: 'left',
        data:['登革热','感冒','肠胃病','其他'],
		show:false,
		textStyle: {
			fontSize: '12',
			color:'#ffffff'
		}
    },
    series: [
        {
            name:'疾病类别分析',
            type:'pie',
            radius: ['20%', '65%'],
            roseType : 'radius',
			color:['#8771f9','#19db80','#2fa6f9','#f86364','#fd912a','#efdf00','#ff3d44','#fc41ee'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'left',
					formatter: '{b}\n[{c}例]',
                    textStyle: {
                        fontSize: '13'
                    },
					color:'#fff'
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
                    show: true
                }
            },
            data:[
                {value:95, name:'登革热'},
                {value:60, name:'感冒'},
                {value:40, name:'肠胃病'},
                {value:30, name:'其他'}
            ]
        }
    ]
};

if (option_03 && typeof option_03 === "object") {
	myChart_03.setOption(option_03, true);
	
	var app_03 = {
		 currentIndex_03: -1
	};
	setInterval(function () {
		 var dataLen_03 = option_03.series[0].data.length;
		 // 取消之前高亮的图形
		 myChart_03.dispatchAction({
			 type: 'downplay',
			 seriesIndex: 0,
			 dataIndex: app_03.currentIndex_03
		 });
		 app_03.currentIndex_03 = (app_03.currentIndex_03 + 1) % dataLen_03;
		 // 高亮当前图形
		 myChart_03.dispatchAction({
			 type: 'highlight',
			 seriesIndex: 0,
			 dataIndex: app_03.currentIndex_03
		 });
	}, 3000);
}


var dom_04 = document.getElementById("count_04");
var myChart_04 = echarts.init(dom_04);
option_04 = {
	title: {
		text: '折线图堆叠',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['探温记录'],
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
			name:'探温总人数',
			type:'line',
			stack: '探温总人数',
			areaStyle: {color: ['rgba(4,203,245,0.3)']},
			data:[80,60,90,80,95,85,78,80,60,90],
			color:'#04cbf5',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},{
			name:'异常温度人数',
			type:'line',
			stack: '异常温度人数',
			areaStyle: {color: ['rgba(247,68,64,0.3)']},
			data:[8,3,5,5,7,10,1,2,0,5],
			color:'#f74440',
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
		text: '折线图堆叠',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['异常温度'],
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
			name:'异常温度人数',
			type:'line',
			stack: '异常温度人数',
			areaStyle: {color: ['rgba(247,68,64,0.3)']},
			data:[8,3,5,5,7,10,1,2,0,5],
			color:'#f74440',
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
}