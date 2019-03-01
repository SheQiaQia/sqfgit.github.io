var dom_01 = document.getElementById("count_01");
var myChart_01 = echarts.init(dom_01);
option_01 = {
    title: {
        text: '',
		show:false
    },
    tooltip: {},
    legend: {
        data: ['校车安全'],
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
		radius:"70%",
        indicator: [
           { name: '校车及时年审', max: 100},
           { name: '校车零件安全检查', max: 100},
           { name: '出门前油量检查', max: 100},
           { name: '出门前轮胎检查', max: 100},
           { name: '消防安全检查', max: 100}
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
                color : 'rgba(255,255,255,.15)', // 设置网格的颜色
            },
        }
    },
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [100, 90, 95, 96,89],
                name : '校车状态检查结果'
            }
        ],itemStyle: {
                    normal: {
						areaStyle: {color: ['rgba(42,206,133,.6)']},
                        color: 'rgba(42,206,133,3)',
                        lineStyle: {
                            color: 'rgba(42,206,133,3)',
                        },
                    },
                },
    }]
};
if (option_01 && typeof option_01 === "object") {
	myChart_01.setOption(option_01, true);
}


var dom_02 = document.getElementById("count_02");
var myChart_02 = echarts.init(dom_02);
option_02 = {
	title: {
		text: '折线图堆叠',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['接送学生统计'],
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
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"人" + '<br/>' + "车次 : 5车次";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'接送学生人数',
			type:'line',
			stack: '接送学生人数',
			areaStyle: {color: ['rgba(42,207,132,0.3)']},
			data:[80,60,90,80,95,85,78,80,60,90],
			color:'#2acf84'
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
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
		itemWidth: 20,
        itemHeight: 10,
        itemGap: 10,
        orient: 'horizontal',/*horizontal*/
        x: 'center',
		y:'bottom',
        data:['超速','投诉','偏离轨迹','有上无下','久停未行','故障'],
		show:false,
		textStyle: {
			fontSize: '12',
			color:'#ffffff'
		}
    },
    series: [
        {
            name:'事件分类',
            type:'pie',
            radius: ['30%', '70%'],
			center:['50%','50%'],//圆形居中
			color:['#f69746','#f4d547','#46d9f8','#46adf1','#4576f4','#ae45f4','#ff3d44','#fc41ee'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'left',
					formatter: '{b}:{c}例',
                    textStyle: {
                        fontSize: '12'
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
                {value:35, name:'超速'},
                {value:60, name:'投诉'},
                {value:110, name:'偏离轨迹'},
                {value:22, name:'有上无下'},
                {value:22, name:'久停未行'},
                {value:52, name:'故障'}
            ]
        }
    ]
};

if (option_03 && typeof option_03 === "object") {
	myChart_03.setOption(option_03, true);
}
var app = {
     currentIndex: -1
};
setInterval(function () {
     var dataLen = option_03.series[0].data.length;
     // 取消之前高亮的图形
     myChart_03.dispatchAction({
         type: 'downplay',
         seriesIndex: 0,
         dataIndex: app.currentIndex
     });
     app.currentIndex = (app.currentIndex + 1) % dataLen;
     // 高亮当前图形
     myChart_03.dispatchAction({
         type: 'highlight',
         seriesIndex: 0,
         dataIndex: app.currentIndex
     });
     // 显示 tooltip
     /*myChart_03.dispatchAction({
         type: 'showTip',
         seriesIndex: 0,
         dataIndex: app.currentIndex
     });*/
 }, 3000);

var dom_04 = document.getElementById("count_04");
var myChart_04 = echarts.init(dom_04);
option_04 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
		itemWidth: 20,
        itemHeight: 10,
        itemGap: 10,
        orient: 'horizontal',/*horizontal*/
        x: 'center',
		y:'bottom',
        data:['不可抗力','理由合理','有错警告','有错处罚','其他'],
		show:false,
		textStyle: {
			fontSize: '12',
			color:'#ffffff'
		}
    },
    series: [
        {
            name:'处理分类',
            type:'pie',
            radius: ['30%', '70%'],
			center:['50%','50%'],//圆形居中
			color:['#f69746','#f4d547','#46d9f8','#46adf1','#4576f4','#ae45f4','#ff3d44','#fc41ee'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'left',
					formatter: '{b}:{c}例',
                    textStyle: {
                        fontSize: '12'
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
                {value:35, name:'不可抗力'},
                {value:60, name:'理由合理'},
                {value:110, name:'有错警告'},
                {value:22, name:'有错处罚'},
                {value:22, name:'其他'}
            ]
        }
    ]
};

if (option_04 && typeof option_04 === "object") {
	myChart_04.setOption(option_04, true);
	
	var app_04 = {
		 currentIndex_04: -1
	};
	setInterval(function () {
		 var dataLen_04 = option_04.series[0].data.length;
		 // 取消之前高亮的图形
		 myChart_04.dispatchAction({
			 type: 'downplay',
			 seriesIndex: 0,
			 dataIndex: app_04.currentIndex_04
		 });
		 app_04.currentIndex_04 = (app_04.currentIndex_04 + 1) % dataLen_04;
		 // 高亮当前图形
		 myChart_04.dispatchAction({
			 type: 'highlight',
			 seriesIndex: 0,
			 dataIndex: app_04.currentIndex_04
		 });
	}, 3000);
}


var dom_05 = document.getElementById("count_05");
var myChart_05 = echarts.init(dom_05);
option_05 = {
	title: {
		text: '实时监控',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['在线率'],
		textStyle: {
			color: 'rgba(255,255,255,.8)' 
		},
		show:false
	},
	grid: {
		top:'8%',
		left: '3%',
		right: '4%',
		bottom: '3%',
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
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"%";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'在线率',
			type:'line',
			stack: '在线率',
			areaStyle: {color: ['rgba(42,207,132,0.3)']},
			data:[80,60,90,80,95,85,78,80,60,90],
			color:'#2acf84',
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