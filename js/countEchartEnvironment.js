//var dom_01 = document.getElementById("count_01");
//var myChart_01 = echarts.init(dom_01);
//option_01 = {
//	title: {
//		text: ''
//	},
//	tooltip: {},
//	animationDurationUpdate: 3000,
//	animationEasingUpdate: 'quinticInOut',
//	color:['#83e0ff','#45f5ce','#b158ff'],
//	legend: {
//		show: false
//	},
//	textStyle: {
//		decoration: 'none',
//		fontFamily: 'Arial, Verdana, sans-serif',
//		fontFamily2: '微软雅黑',    // IE8- 字体模糊并且不支持不同字体混排,额外指定一份
//		fontSize: 14,
//		fontStyle: 'normal',
//		fontWeight: 'normal'
//	},
//	series: [
//		{
//			type: 'graph',
//			layout: 'force',
//			force:{
//				repulsion:300,
//				gravity : 0.12,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
//				repulsion : 320,//节点之间的斥力因子。支持数组表达斥力范围,值越大斥力越大。
//				edgeLength:20,//边的两个节点之间的距离,这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
//				layoutAnimation : true
//			},
//			symbolSize: 10,
//			roam : false,//是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
//			nodeScaleRatio : 0,//鼠标漫游缩放时节点的相应缩放比例,当设为0时节点不随着鼠标的缩放而缩放
//			draggable : true,//节点是否可拖拽,只在使用力引导布局的时候有用。
//			label: {
//				normal: {
//					show: true,
//					formatter: "{b}"
//				}
//			},
//			edgeSymbolSize: [4, 10],
//			edgeLabel: {
//				normal: {
//					show:true,
//					textStyle: {
//						fontSize: 13
//					},
//					formatter: "{c}"
//				}
//			},
//
//			data: [
//				{
//					id:0,
//					name: '温度\n[50°C]',
//					symbolSize: 100,
//					category: 1,
//					itemStyle: {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					}
//				},
//				{
//					id:1,
//					name: '湿度\n[50%]',
//					symbolSize: 80,
//					itemStyle: {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					},
//					category: 1,
//
//				},
//				{
//					id:2,
//					name: 'PM2.5\n[63]',
//					symbolSize: 120,
//					itemStyle:  {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					},
//					category: 1,
//
//				},
//				{
//					id:3,
//					name: 'PM10\n[50]',
//					symbolSize: 110,
//					itemStyle:  {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					},
//					category: 1,
//
//				},
//				{
//					id:4,
//					name: '噪音\n[50dB]',
//					symbolSize: 80,
//					itemStyle:  {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					},
//					category: 1,
//
//				},
//				{
//					id:5,
//					name: '风速\n[1m/s]',
//					symbolSize: 75,
//					itemStyle:  {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					},
//					category: 1,
//
//				},
//				{
//					id:6,
//					name: '风力\n[41.4m/s]',
//					symbolSize: 70,
//					itemStyle:  {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					},
//					category: 1,
//
//				},
//				{
//					id:7,
//					name: '风向\n[偏东风]',
//					symbolSize: 75,
//					itemStyle:  {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					},
//					category: 1,
//
//				},
//				{
//					id:8,
//					name: '气压\n[100kPa]',
//					symbolSize: 100,
//					itemStyle:  {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					},
//					category: 1,
//
//				},
//				{
//					id:9,
//					name: '二氧化碳\n[3%]',
//					symbolSize: 95,
//					itemStyle:  {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					},
//					category: 1,
//
//				},
//				{
//					id:10,
//					name: '雨量\n[2mm]',
//					symbolSize: 82,
//					itemStyle:  {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					},
//					category: 1,
//
//				},
//				{
//					id:11,
//					name: '土壤温湿度\n[50]',
//					symbolSize: 90,
//					itemStyle:  {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					},
//					category: 1,
//
//				},
//				{
//					id:12,
//					name: '氧气\n[10%]',
//					symbolSize: 82,
//					itemStyle:  {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					},
//					category: 1,
//
//				},
//				{
//					id:13,
//					name: '光照度\n[30Lux]',
//					symbolSize: 92,
//					itemStyle:  {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					},
//					category: 1,
//
//				},
//				{
//					id:14,
//					name: '紫外线\n[10nm]',
//					symbolSize: 72,
//					itemStyle:  {
//						normal: {
//							borderColor: '#04cbf5',
//							borderWidth: 2,
//							shadowBlur: 10,
//							shadowColor: '#04cbf5',
//							color: 'rgba(4,203,245,.1)',
//						}
//					},
//					category: 1,
//
//				}
//			], /*links : [ //edges是其别名代表节点间的关系数据。
//                  {
//                      source : 1,
//                      target : 0
//                  }, {
//                      source : 4,
//                      target : 0
//                  }, {
//                      source : 8,
//                      target : 0
//                  }, {
//                      source : 2,
//                      target : 1
//                  }, {
//                      source : 3,
//                      target : 1
//                  }, {
//                      source : 5,
//                      target : 4
//                  }, {
//                      source : 6,
//                      target : 4
//                  }, {
//                      source : 7,
//                      target : 4
//                  }, {
//                      source : 9,
//                      target : 8
//                  }, {
//                      source : 10,
//                      target : 8
//                  }, {
//                      source : 11,
//                      target : 8
//                  }, {
//                      source : 12,
//                      target : 8
//                  }, {
//                      source : 13,
//                      target : 6
//                  }, {
//                      source : 14,
//                      target : 6
//                  }, {
//                      source : 15,
//                      target : 2
//                  }, {
//                      source : 16,
//                      target : 15
//                  } ],*/
//			lineStyle: {
//				normal: {
//					opacity: 0.9,
//					width: 0,
//					curveness: 0
//				}
//			},
//			categories:[
//				{name: '一'},
//				{name: '二'},
//				{name: '三'}
//			]
//		}
//	]
//}
//
//if (option_01 && typeof option_01 === "object") {
//	setTimeout(function(){
//		myChart_01.setOption(option_01, true);
//	},1000);
//}


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
		data:['PM2.5','PM10'],
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
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
			name:'PM2.5',
			type:'line',
			stack: 'PM2.5',
			areaStyle: {color: ['rgba(60,199,56,0.3)']},
			data:[260, 300, 200, 100, 50, 30, 30,80,100,200,100,350,60, 350, 250, 210, 225, 201, 130,280,100],
			color:'#3cc738',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},
		{
			name:'PM10',
			type:'line',
			stack: 'PM10',
			areaStyle: {color: ['rgba(86,226,246,0.3)']},
			data:[230,260, 130, 80, 40, 25, 23, 50,80,80,30,200,50,360, 30, 200, 20, 125, 101, 100,80],
			color:'#56e2f6',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};

if (option_02 && typeof option_02 === "object") {
	myChart_02.setOption(option_02, true);
	var index = 0; //播放所在下标
	var mTime = setInterval(function() {
		myChart_02.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index
		});
		index++;
		if(index >= option_02.xAxis.data.length) {
			index = 0;
		}
	},2000);
}

/* 光照度分析 */
var dom_03 = document.getElementById("count_03");
var myChart_03 = echarts.init(dom_03);
option_03 = {
	title: {
		text: '折线图堆叠',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['光照度','紫外线'],
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
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
        max: 200,
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
			name:'光照度',
			type:'line',
			stack: '光照度',
			data:[160, 180, 140, 100, 80, 80, 80,80,100,200,100,250,60, 350, 250, 210, 225, 201, 130,280,100],
			color:'#f3f532',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		},
		{
			name:'紫外线',
			type:'line',
			stack: '紫外线',
			data:[130,160, 130, 80, 60, 75, 73, 50,80,80,70,200,50,260, 30, 200, 20, 125, 101, 100,80],
			color:'#ff911f',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};

if (option_03 && typeof option_03 === "object") {
	myChart_03.setOption(option_03, true);
	var index = 0; //播放所在下标
	var mTime = setInterval(function() {
		myChart_03.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index
		});
		index++;
		if(index >= option_03.xAxis.data.length) {
			index = 0;
		}
	},2000);
}


/* 温度 */
var dom_04 = document.getElementById("count_04");
var myChart_04 = echarts.init(dom_04);
option_04 = {
	title: {
		text: '温度',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['最高温','最低温'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '7%',
		right: '7%',
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
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
			},show:false
		},
        max: 40,/*最大最小值建议取最大最小加减5*/
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },show:false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            },show:false
        },
	},
	series: [
		{
			name:'最高温',
			type:'line',
			stack: '最高温',
			data:[20,25,22,23,25,28,30,20,25,22,23,25,28,30,20,25,22,23,25,28,30],
			color:'#ff911f' ,
			symbol: 'circle', // 拐点类型
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: true,
						formatter:'{c}°C',
						textStyle: {
							color: "#fff",
						}
					},
				}
			}
		},
		{
			name:'最低温',
			type:'line',
			stack: '最低温',
			data:[10,15,12,13,15,18,10,10,15,12,13,15,18,10,10,15,12,13,15,18,20],
			color:'#56e2f6',
			symbol: 'circle', // 拐点类型
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: true,
						formatter:'{c}°C',
						textStyle: {
							color: "#fff",
						},
						position:'bottom'
					},
				}
			}
		}
	]
};

if (option_04 && typeof option_04 === "object") {
	myChart_04.setOption(option_04, true);
}


/* 湿度 */
var dom_05 = document.getElementById("count_05");
var myChart_05 = echarts.init(dom_05);
option_05 = {
	title: {
		text: '湿度',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['湿度'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '7%',
		right: '7%',
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
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
			},show:false
		},
        max: 100,/*最大最小值建议取最大最小加减5*/
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },show:false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            },show:false
        },
	},
	series: [
		{
			name:'湿度',
			type:'line',
			stack: '湿度',
			data:[20,55,42,63,35,48,50,20,45,62,43,65,38,50,20,45,32,33,25,58,40],
			color:'#3cc738' ,
			symbol: 'circle', // 拐点类型
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: true,
						formatter:'{c}%',
						textStyle: {
							color: "#fff",
						}
					},
				}
			}
		}
	]
};

if (option_05 && typeof option_05 === "object") {
	myChart_05.setOption(option_05, true);
}

/* 风向 */
var dom_06 = document.getElementById("count_fx");
var myChart_06 = echarts.init(dom_06);
option_06 = {
    title: {
        text: '',
		show:false
    },
    tooltip: {},
    legend: {
        data: ['风向'],
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
		radius:"80%",
        indicator: [
           { name: '北风', max: 100},
           { name: '东北方', max: 100},
           { name: '东风', max: 100},
           { name: '东南风', max: 100},
           { name: '南风', max: 100},
           { name: '西南风', max: 100},
           { name: '西风', max: 100},
           { name: '西北风', max: 100}
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
                value : [60,50,20,10,20,50,60,70],
                name : '风向'
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
if (option_06 && typeof option_06 === "object") {
	myChart_06.setOption(option_06, true);
}

/* PM2.5 */
var dom_07 = document.getElementById("count_pm25");
var myChart_07 = echarts.init(dom_07);
option_07 = {
	title: {
		text: '折线图堆叠',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['PM2.5'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '3%',
		right: '8%',
		bottom: '0%',
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
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
			name:'PM2.5',
			type:'line',
			stack: 'PM2.5',
			areaStyle: {color: ['rgba(54, 188, 155,0.3)']},
			data:[260, 300, 200, 100, 50, 30, 30,80,100,200,100,350,60, 350, 250, 210, 225, 201, 130,280,100],
			color:'#36bc9b',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};

if (option_07 && typeof option_07 === "object") {
	myChart_07.setOption(option_07, true);
	var index = 0; //播放所在下标
	var mTime = setInterval(function() {
		myChart_07.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index
		});
		index++;
		if(index >= option_07.xAxis.data.length) {
			index = 0;
		}
	},2000);
}


/* PM2.5 */
var dom_08 = document.getElementById("count_pm10");
var myChart_08 = echarts.init(dom_08);
option_08 = {
	title: {
		text: '折线图堆叠',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['PM10'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '3%',
		right: '8%',
		bottom: '0%',
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
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
        max: 120,
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
			name:'PM10',
			type:'line',
			stack: 'PM10',
			areaStyle: {color: ['rgba(54, 188, 155,0.3)']},
			data:[26, 30, 20, 10, 50, 30, 30,80,10,20,80,50,60, 100, 60, 210, 75, 51, 60,80,100],
			color:'#36bc9b',
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
		}
	]
};

if (option_08 && typeof option_08 === "object") {
	myChart_08.setOption(option_08, true);
	var index = 0; //播放所在下标
	var mTime = setInterval(function() {
		myChart_08.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index
		});
		index++;
		if(index >= option_08.xAxis.data.length) {
			index = 0;
		}
	},2000);
}

/* 温度 */
var dom_09 = document.getElementById("count_wd");
var myChart_09 = echarts.init(dom_09);
option_09 = {
	title: {
		text: '温度',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['最高温','最低温'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '7%',
		right: '7%',
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
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
			},show:false
		},
        max: 40,/*最大最小值建议取最大最小加减5*/
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },show:false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            },show:false
        },
	},
	series: [
		{
			name:'最高温',
			type:'line',
			stack: '最高温',
			data:[20,25,22,23,25,28,30,20,25,22,23,25,28,30,20,25,22,23,25,28,30],
			color:'#ff911f' ,
			symbol: 'circle', // 拐点类型
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: true,
						formatter:'{c}°C',
						textStyle: {
							color: "#fff",
						}
					},
				}
			}
		},
		{
			name:'最低温',
			type:'line',
			stack: '最低温',
			data:[10,15,12,13,15,18,10,10,15,12,13,15,18,10,10,15,12,13,15,18,20],
			color:'#56e2f6',
			symbol: 'circle', // 拐点类型
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: true,
						formatter:'{c}°C',
						textStyle: {
							color: "#fff",
						},
						position:'bottom'
					},
				}
			}
		}
	]
};

if (option_09 && typeof option_09 === "object") {
	myChart_09.setOption(option_09, true);
}

/* 湿度 */
var dom_010 = document.getElementById("count_sd");
var myChart_010 = echarts.init(dom_010);
option_010 = {
	title: {
		text: '湿度',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['湿度'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '7%',
		right: '7%',
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
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
			},show:false
		},
        max: 100,/*最大最小值建议取最大最小加减5*/
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },show:false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            },show:false
        },
	},
	series: [
		{
			name:'湿度',
			type:'line',
			stack: '湿度',
			data:[20,55,42,63,35,48,50,20,45,62,43,65,38,50,20,45,32,33,25,58,40],
			color:'#3cc738' ,
			symbol: 'circle', // 拐点类型
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: true,
						formatter:'{c}%',
						textStyle: {
							color: "#fff",
						}
					},
				}
			}
		}
	]
};

if (option_010 && typeof option_010 === "object") {
	myChart_010.setOption(option_010, true);
}


/* 湿度 */
var dom_011 = document.getElementById("count_zy");
var myChart_011 = echarts.init(dom_011);
option_011 = {
	title: {
		text: '噪音',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['噪音'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '7%',
		right: '7%',
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
		boundaryGap: true,
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
			},show:false
		},
        max: 100,/*最大最小值建议取最大最小加减5*/
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },show:true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            },show:true
        },
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"分贝";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'噪音',
			type:'line',
			stack: '噪音',
			areaStyle: {color: ['rgba(189,27,10,0.3)']},
			data:[20,55,42,63,35,48,50,20,45,62,43,65,38,50,20,45,32,33,25,58,40],
			color:'#bd1b0a' ,
			//symbol: 'circle', // 拐点类型
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: false,
						formatter:'{c}分贝',
						textStyle: {
							color: "#fff",
						}
					},
				}
			}
		}
	]
};

if (option_011 && typeof option_011 === "object") {
	myChart_011.setOption(option_011, true);
	var index_011 = 0; //播放所在下标
	var mTime_011 = setInterval(function() {
		myChart_011.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_011
		});
		index_011++;
		if(index_011 >= option_011.xAxis.data.length) {
			index_011 = 0;
		}
	},2000);
}


/* 风速 */
var dom_012 = document.getElementById("count_fs");
var myChart_012 = echarts.init(dom_012);
option_012 = {
	title: {
		text: '风速',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['风速'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '7%',
		right: '7%',
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
		boundaryGap: true,
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
			},show:false
		},
        max: 100,/*最大最小值建议取最大最小加减5*/
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },show:true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            },show:true
        },
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"米/秒";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'风速',
			type:'line',
			stack: '风速',
			areaStyle: {color: ['rgba(0,193,248,0.3)']},
			data:[20,55,42,63,35,48,50,20,45,62,43,65,38,50,20,45,32,33,25,58,40],
			color:'#00c1f8' ,
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: false,
						formatter:'{c}米/秒',
						textStyle: {
							color: "#fff",
						}
					},
				}
			}
		}
	]
};
if (option_012 && typeof option_012 === "object") {
	myChart_012.setOption(option_012, true);
	var index_012 = 0; //播放所在下标
	var mTime_012 = setInterval(function() {
		myChart_012.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_012
		});
		index_012++;
		if(index_012 >= option_012.xAxis.data.length) {
			index_012 = 0;
		}
	},2000);
}


/* 气压 */
var dom_013 = document.getElementById("count_qy");
var myChart_013 = echarts.init(dom_013);
option_013 = {
	title: {
		text: '气压',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['气压'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '7%',
		right: '7%',
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
		boundaryGap: true,
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
			},show:false
		},
        max: 100,/*最大最小值建议取最大最小加减5*/
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },show:true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            },show:true
        },
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"Pa";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'气压',
			type:'line',
			stack: '气压',
			areaStyle: {color: ['rgba(0,193,248,0.3)']},
			data:[20,25,32,33,35,48,50,70,85,62,43,65,38,50,20,45,32,33,25,58,40],
			color:'#00c1f8' ,
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: false,
						formatter:'{c}Pa',
						textStyle: {
							color: "#fff",
						}
					},
				}
			}
		}
	]
};
if (option_013 && typeof option_013 === "object") {
	myChart_013.setOption(option_013, true);
	var index_013 = 0; //播放所在下标
	var mTime_013 = setInterval(function() {
		myChart_013.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_013
		});
		index_013++;
		if(index_013 >= option_013.xAxis.data.length) {
			index_013 = 0;
		}
	},2000);
}


/* 二氧化碳 */
var dom_014 = document.getElementById("count_eyht");
var myChart_014 = echarts.init(dom_014);
option_014 = {
	title: {
		text: '二氧化碳',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['二氧化碳'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '7%',
		right: '7%',
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
		boundaryGap: true,
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
			},show:false
		},
        max: 100,/*最大最小值建议取最大最小加减5*/
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },show:true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            },show:true
        },
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
			name:'二氧化碳',
			type:'line',
			stack: '二氧化碳',
			areaStyle: {color: ['rgba(255,145,31,0.3)']},
			data:[20,25,32,33,35,48,50,70,85,62,43,65,38,50,20,45,32,33,25,58,40],
			color:'#ff911f' ,
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: false,
						formatter:'{c}%',
						textStyle: {
							color: "#fff",
						}
					},
				}
			}
		}
	]
};
if (option_014 && typeof option_014 === "object") {
	myChart_014.setOption(option_014, true);
	var index_014 = 0; //播放所在下标
	var mTime_014 = setInterval(function() {
		myChart_014.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_014
		});
		index_014++;
		if(index_014 >= option_014.xAxis.data.length) {
			index_014 = 0;
		}
	},2000);
}

/* 雨量 */
var dom_015 = document.getElementById("count_yl");
var myChart_015 = echarts.init(dom_015);
option_015 = {
	title: {
		text: '雨量',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['雨量'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '7%',
		right: '7%',
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
		boundaryGap: true,
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
			},show:false
		},
        max: 100,/*最大最小值建议取最大最小加减5*/
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },show:true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            },show:true
        },
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"毫米";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'雨量',
			type:'line',
			stack: '雨量',
			areaStyle: {color: ['rgba(0,193,248,0.3)']},
			data:[20,35,62,43,25,48,50,70,85,62,43,65,38,50,20,45,32,33,25,58,40],
			color:'#00c1f8' ,
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: false,
						formatter:'{c}毫米',
						textStyle: {
							color: "#fff",
						}
					},
				}
			}
		}
	]
};
if (option_015 && typeof option_015 === "object") {
	myChart_015.setOption(option_015, true);
	var index_015 = 0; //播放所在下标
	var mTime_015 = setInterval(function() {
		myChart_015.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_015
		});
		index_015++;
		if(index_015 >= option_015.xAxis.data.length) {
			index_015 = 0;
		}
	},2000);
}


/* 土壤温度 */
var dom_016 = document.getElementById("count_trwd");
var myChart_016 = echarts.init(dom_016);
option_016 = {
	title: {
		text: '土壤温度',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['土壤温度'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '7%',
		right: '7%',
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
		boundaryGap: true,
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
			},show:false
		},
        max: 100,/*最大最小值建议取最大最小加减5*/
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },show:true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            },show:true
        },
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"°C";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'土壤温度',
			type:'line',
			stack: '土壤温度',
			areaStyle: {color: ['rgba(255,145,31,0.3)']},
			data:[20,35,62,43,25,48,50,70,85,62,43,65,38,50,20,45,32,33,25,58,40],
			color:'#ff911f' ,
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: true,
						formatter:'{c}°C',
						textStyle: {
							color: "#fff",
						}
					},
				}
			}
		}
	]
};
if (option_016 && typeof option_016 === "object") {
	myChart_016.setOption(option_016, true);
	var index_016 = 0; //播放所在下标
	var mTime_016 = setInterval(function() {
		myChart_016.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_016
		});
		index_016++;
		if(index_016 >= option_016.xAxis.data.length) {
			index_016 = 0;
		}
	},2000);
}

/* 土壤湿度 */
var dom_017 = document.getElementById("count_trsd");
var myChart_017 = echarts.init(dom_017);
option_017 = {
	title: {
		text: '土壤湿度',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['土壤湿度'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '7%',
		right: '7%',
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
		boundaryGap: true,
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
			},show:false
		},
        max: 100,/*最大最小值建议取最大最小加减5*/
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },show:true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            },show:true
        },
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
			name:'土壤湿度',
			type:'line',
			stack: '土壤湿度',
			areaStyle: {color: ['rgba(60,199,56,0.3)']},
			data:[20,35,62,43,25,48,50,70,85,62,43,65,38,50,20,45,32,33,25,58,40],
			color:'#3cc738' ,
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: true,
						formatter:'{c}%',
						textStyle: {
							color: "#fff",
						}
					},
				}
			}
		}
	]
};
if (option_017 && typeof option_017 === "object") {
	myChart_017.setOption(option_017, true);
	var index_017 = 0; //播放所在下标
	var mTime_017 = setInterval(function() {
		myChart_017.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_017
		});
		index_017++;
		if(index_017 >= option_017.xAxis.data.length) {
			index_017 = 0;
		}
	},2000);
}


/* 氧气 */
var dom_018 = document.getElementById("count_yq");
var myChart_018 = echarts.init(dom_018);
option_018 = {
	title: {
		text: '氧气',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['氧气'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '7%',
		right: '7%',
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
		boundaryGap: true,
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
			},show:false
		},
        max: 100,/*最大最小值建议取最大最小加减5*/
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },show:true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            },show:true
        },
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
			name:'氧气',
			type:'line',
			stack: '氧气',
			areaStyle: {color: ['rgba(60,199,56,0.3)']},
			data:[48,50,70,20,35,62,43,25,85,62,43,65,38,50,20,45,32,33,25,58,40],
			color:'#3cc738' ,
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: true,
						formatter:'{c}%',
						textStyle: {
							color: "#fff",
						}
					},
				}
			}
		}
	]
};
if (option_018 && typeof option_018 === "object") {
	myChart_018.setOption(option_018, true);
	var index_018 = 0; //播放所在下标
	var mTime_018 = setInterval(function() {
		myChart_018.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_018
		});
		index_018++;
		if(index_018 >= option_018.xAxis.data.length) {
			index_018 = 0;
		}
	},2000);
}


/* 光照度 */
var dom_019 = document.getElementById("count_gzd");
var myChart_019 = echarts.init(dom_019);
option_019 = {
	title: {
		text: '光照度',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['光照度'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '7%',
		right: '7%',
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
		boundaryGap: true,
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
			},show:false
		},
        max: 100,/*最大最小值建议取最大最小加减5*/
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },show:true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            },show:true
        },
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"lux";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'光照度',
			type:'line',
			stack: '光照度',
			areaStyle: {color: ['rgba(243,245,50,0.3)']},
			data:[20,35,62,48,50,70,43,25,85,62,43,65,38,50,20,45,32,33,25,58,40],
			color:'#f3f532' ,
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: true,
						formatter:'{c}lux',
						textStyle: {
							color: "#fff",
						}
					},
				}
			}
		}
	]
};
if (option_019 && typeof option_019 === "object") {
	myChart_019.setOption(option_019, true);
	var index_019 = 0; //播放所在下标
	var mTime_019 = setInterval(function() {
		myChart_019.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_019
		});
		index_019++;
		if(index_019 >= option_019.xAxis.data.length) {
			index_019 = 0;
		}
	},2000);
}



/* 紫外线 */
var dom_020 = document.getElementById("count_zwx");
var myChart_020 = echarts.init(dom_020);
option_020 = {
	title: {
		text: '紫外线',
		show:false
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['紫外线'],
		textStyle: {
			color: '#ffffff' 
		}
	},
	grid: {
		left: '7%',
		right: '7%',
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
		boundaryGap: true,
		data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'],
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.8)',
				width:1,
			}
		},
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
		end:30
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
			},show:false
		},
        max: 100,/*最大最小值建议取最大最小加减5*/
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            },show:true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            },show:true
        },
	},
	tooltip : {  
        trigger: 'axis',  
        formatter:function(params)  
        {  
           var relVal = params[0].name;  
           for (var i = 0, l = params.length; i < l; i++) {  
                relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"uw/cm2";  
            }  
           return relVal;  
        }
	},
	series: [
		{
			name:'紫外线',
			type:'line',
			stack: '紫外线',
			areaStyle: {color: ['rgba(243,245,50,0.3)']},
			data:[25,85,62,43,65,38,50,20,35,62,48,50,70,43,20,45,32,33,25,58,40],
			color:'#f3f532' ,
			symbol: 'circle', // 拐点类型
            smooth: true, // 当为true时,就是光滑的曲线(默认为true);当为false,就是折线不是曲线的了,那这个设为true,下面的(吃饭)数据中设置smooth为false,这个就不是光滑的曲线了。
            symbolSize: 5, // 拐点圆的大小
			// 显示数值
        	itemStyle : { 
				normal: {
					label : {
						show: true,
						formatter:'{c}',
						textStyle: {
							color: "#fff",
						}
					},
				}
			}
		}
	]
};
if (option_020 && typeof option_020 === "object") {
	myChart_020.setOption(option_020, true);
	var index_020 = 0; //播放所在下标
	var mTime_020 = setInterval(function() {
		myChart_020.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_020
		});
		index_020++;
		if(index_020 >= option_020.xAxis.data.length) {
			index_020 = 0;
		}
	},2000);
}

$(function(){
	myChart_resize();
	myChart_resize_02();
});
window.onresize = function(){
	myChart_resize();
	myChart_resize_02();
}
function myChart_resize(){
//	myChart_01.resize();
	myChart_02.resize();
	myChart_03.resize();
	myChart_04.resize();
	myChart_05.resize();
}
function myChart_resize_02(){
	myChart_06.resize();
	myChart_07.resize();
	myChart_08.resize();
	myChart_09.resize();
	myChart_010.resize();
	myChart_011.resize();
	myChart_012.resize();
	myChart_013.resize();
	myChart_014.resize();
	myChart_015.resize();
	myChart_016.resize();
	myChart_017.resize();
	myChart_018.resize();
	myChart_019.resize();
	myChart_020.resize();
}