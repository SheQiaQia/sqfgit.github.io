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
		data:['总来访人数','实名制人数'],
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
        max: 400,
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
			name:'总来访人数',
			type:'line',
			stack: '总来访人数',
			areaStyle: {color: ['rgba(60,199,56,0.3)']},
			data:[260, 300, 200, 100, 50, 30, 30,80,100,200,100,350,60, 350, 250, 210, 225, 201, 130,280,100],
			color:'#3cc738'
		},
		{
			name:'实名制人数',
			type:'line',
			stack: '实名制人数',
			areaStyle: {color: ['rgba(86,226,246,0.3)']},
			data:[230,260, 130, 80, 40, 25, 23, 50,80,80,30,200,50,360, 30, 200, 20, 125, 101, 100,80],
			color:'#56e2f6'
		}
	]
};

if (option_01 && typeof option_01 === "object") {
	myChart_01.setOption(option_01, true);
	var index = 0; //播放所在下标
	var mTime = setInterval(function() {
		myChart_01.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index
		});
		index++;
		if(index >= option_01.xAxis.data.length) {
			index = 0;
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
        data:['工程实施','业务需要','教师约谈','其他'],
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
			color:['#f69746','#f4d547','#46d9f8','#46adf1','#4576f4','#ae45f4','#ff3d44','#fc41ee'],
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
                {value:35, name:'工程实施'},
                {value:60, name:'业务需要'},
                {value:110, name:'教师约谈'},
                {value:42, name:'其他'}
            ]
        }
    ]
};

if (option_02 && typeof option_02 === "object") {
	myChart_02.setOption(option_02, true);
	
	var app_02 = {
		 currentIndex_02: -1
	};
	setInterval(function () {
		 var dataLen_02 = option_02.series[0].data.length;
		 // 取消之前高亮的图形
		 myChart_02.dispatchAction({
			 type: 'downplay',
			 seriesIndex: 0,
			 dataIndex: app_02.currentIndex_02
		 });
		 app_02.currentIndex_02 = (app_02.currentIndex_02 + 1) % dataLen_02;
		 // 高亮当前图形
		 myChart_02.dispatchAction({
			 type: 'highlight',
			 seriesIndex: 0,
			 dataIndex: app_02.currentIndex_02
		 });
	}, 3000);
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
        data:['软件研发部','行政部','人事部','其他','总经理办公室'],
		show:false,
		textStyle: {
			fontSize: '12',
			color:'#ffffff'
		}
    },
    series: [
        {
            name:'被访部门分析',
            type:'pie',
            radius: ['20%', '70%'],
            roseType : 'radius',
			color:['#8771f9','#19db80','#2fa6f9','#f86364','#fd912a','#efdf00','#ff3d44','#fc41ee'],
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
                {value:85, name:'软件研发部'},
                {value:60, name:'行政部'},
                {value:50, name:'人事部'},
                {value:42, name:'其他'},
                {value:20, name:'党政办公室'}
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
}