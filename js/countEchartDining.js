var dom_01 = document.getElementById("count_middle_001");
var myChart_01 = echarts.init(dom_01);
option_01 = {
    series: [{
        color:["#04cbf5","rgba(255,255,255,.2)"],
        name: '安全设备在线率',
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
                value: 90,
                name: '90%',
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
                value: 10,/*除了剩下的比例*/
                name: '安全设备在线率',
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
        name: '预警处理率',
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
                value: 98,
                name: '98%',
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
                value: 2,
                name: '预警处理率',
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
        name: '溯源记录上传率',
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
                name: '80%',
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
                name: '溯源记录上传率',
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
        name: '配料保质期内使用',
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
                value:85,
                name: '85%',
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
                value: 15,
                name: '配料保质期内使用',
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
        data:['菜色不合','菜中异物','餐具卫生','环境卫生','职工态度','其他'],
		show:false,
		textStyle: {
			fontSize: '12',
			color:'#ffffff'
		}
    },
    series: [
        {
            name:'投诉统计',
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
                {value:35, name:'菜色不合'},
                {value:60, name:'菜中异物'},
                {value:110, name:'餐具卫生'},
                {value:22, name:'环境卫生'},
                {value:22, name:'职工态度'},
                {value:52, name:'其他'}
            ]
        }
    ]
};

if (option_05 && typeof option_05 === "object") {
	myChart_05.setOption(option_05, true);
}
var app = {
     currentIndex: -1
};
setInterval(function () {
     var dataLen = option_05.series[0].data.length;
     // 取消之前高亮的图形
     myChart_05.dispatchAction({
         type: 'downplay',
         seriesIndex: 0,
         dataIndex: app.currentIndex
     });
     app.currentIndex = (app.currentIndex + 1) % dataLen;
     // 高亮当前图形
     myChart_05.dispatchAction({
         type: 'highlight',
         seriesIndex: 0,
         dataIndex: app.currentIndex
     });
     // 显示 tooltip
     /*myChart_05.dispatchAction({
         type: 'showTip',
         seriesIndex: 0,
         dataIndex: app.currentIndex
     });*/
 }, 3000);


var dom_06 = document.getElementById("count_06");
var myChart_06 = echarts.init(dom_06);
option_06 = {
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
	grid: {
		left: '3%',
		right: '4%',
		bottom: '8%',
		top:'5%',
		containLabel: true
	},
	xAxis: {
        type: 'category',
        data: ['2个月', '4个月', '6个月'],
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
    series: [{
        data: [120, 200, 150],
        type: 'bar',
		barWidth : 25,//柱图宽度
        itemStyle: {
            normal: {
                // 随机显示
                //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
              
                // 定制显示(按顺序)
                color: function(params) { 
                    var colorList = ['#8771f9','#19db80','#2fa6f9','#ff6c6e','#fd912a','#ae45f4','#ff3d44','#fc41ee' ]; 
                    return colorList[params.dataIndex] 
                }
            },
        },
    }]
};
if (option_07 && typeof option_07 === "object") {
	myChart_07.setOption(option_07, true);
}


var dom_08 = document.getElementById("count_08");
var myChart_08 = echarts.init(dom_08);
option_08 = {
	grid: {
		left: '3%',
		right: '4%',
		bottom: '8%',
		top:'5%',
		containLabel: true
	},
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: '',
        x: 'left',
		show:false,
		textStyle: {
			fontSize: '12',
			color:'#ffffff'
		}
    },
    series: [
        {
            name:'被访事由分析',
            type:'pie',
            radius: ['45%', '70%'],
			color:['#4fc66c','#dace48','#ff5959','#f9a33c','#88e743','#3e95f6','#bb5ef7','#41bbd2','#31e09d'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'left',
					formatter: '{b}:{c}',
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
                {value:35, name:'盐类'},
                {value:60, name:'醋类'},
                {value:110, name:'酱类'},
                {value:42, name:'酒类'},
                {value:32, name:'糖类'},
                {value:26, name:'腌制类'},
                {value:52, name:'粉类'},
                {value:36, name:'提鲜类'},
                {value:25, name:'油脂'}
            ]
        }
    ]
};

if (option_08 && typeof option_08 === "object") {
	myChart_08.setOption(option_08, true);
	
	var app_08 = {
		 currentIndex_08: -1
	};
	setInterval(function () {
		 var dataLen_08 = option_08.series[0].data.length;
		 // 取消之前高亮的图形
		 myChart_08.dispatchAction({
			 type: 'downplay',
			 seriesIndex: 0,
			 dataIndex: app_08.currentIndex_08
		 });
		 app_08.currentIndex_08 = (app_08.currentIndex_08 + 1) % dataLen_08;
		 // 高亮当前图形
		 myChart_08.dispatchAction({
			 type: 'highlight',
			 seriesIndex: 0,
			 dataIndex: app_08.currentIndex_08
		 });
	}, 3000);
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