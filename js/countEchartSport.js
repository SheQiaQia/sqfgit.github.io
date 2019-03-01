/* 体育课运动量分析 */
var dom_01 = document.getElementById("count_01");
var myChart_01 = echarts.init(dom_01);

var labelOption = {
	normal: {
        show: true, //开启显示,
		rotate: 90,
		align: 'left',
		verticalAlign: 'middle',
		position: 'insideBottom',
		textStyle: { //数值样式
			color: '#fff',
			fontSize: 12
		},
		formatter :'{a}'
    }
}
var itemOption = {
	normal: {
		show: true,
		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0,
			color: '#28c1ea'
		}, {
			offset: 1,
			color: '#3078e7'
		}]),
		barBorderRadius: [50,50,0,0],
		borderWidth: 0,
	}
}

option_01 = {
    legend: {show:false},
    tooltip: {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器,坐标轴触发有效
            type : 'shadow'        // 默认为直线,可选为:'line' | 'shadow'
        }
	},
    dataset: {
        source: [
            ['class', '101','201','301','401','501','601','701','801','901'],
            ['02-11', 4356, 8585, 9372, 7345, 5516, 8314, 7346, 5512, 4356],
            ['02-10', 8314, 7346, 5512, 4356, 8585, 6523, 8253, 8585, 9372],
            ['02-09', 8643, 6523, 8253, 8585, 9372, 5392, 3913, 7346, 5512],
            ['02-08', 7243, 5392, 3913, 7346, 5512, 9372, 7345, 5516, 8314]
        ]
    },
	grid: {
		top: '5%',
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }],
    xAxis: {
		type: 'category',
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
	},
    yAxis: {
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
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar',color:'#37a2da',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#32c5e9',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#67e0e3',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#66d18c',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#ebc642',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#ff9f7f',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#fb7293',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#e062ae',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#e690d1',label:labelOption,itemStyle:itemOption}
    ]
};


if (option_01 && typeof option_01 === "object") {
	myChart_01.setOption(option_01, true);
	/*var index_01 = 0; //播放所在下标
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
	},2000);*/
}

var dom_01_02 = document.getElementById("count_01_02");
var myChart_01_02 = echarts.init(dom_01_02);

var labelOption = {
	normal: {
        show: true, //开启显示,
		rotate: 90,
		align: 'left',
		verticalAlign: 'middle',
		position: 'insideBottom',
		textStyle: { //数值样式
			color: '#fff',
			fontSize: 12
		},
		formatter :'{a}'
    }
}
var itemOption = {
	normal: {
		show: true,
		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0,
			color: '#fec35f'
		}, {
			offset: 1,
			color: '#dd3635'
		}]),
		barBorderRadius: [50,50,0,0],
		borderWidth: 0,
	}
}

option_01_02 = {
    legend: {show:false},
    tooltip: {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器,坐标轴触发有效
            type : 'shadow'        // 默认为直线,可选为:'line' | 'shadow'
        }
	},
    dataset: {
        source: [
            ['class', '101','201','301','401','501','601','701','801','901'],
            ['02-11', 4356, 8585, 9372, 7345, 5516, 8314, 7346, 5512, 4356],
            ['02-10', 8314, 7346, 5512, 4356, 8585, 6523, 8253, 8585, 9372],
            ['02-09', 8643, 6523, 8253, 8585, 9372, 5392, 3913, 7346, 5512],
            ['02-08', 7243, 5392, 3913, 7346, 5512, 9372, 7345, 5516, 8314]
        ]
    },
	grid: {
		top: '5%',
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }],
    xAxis: {
		type: 'category',
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
	},
    yAxis: {
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
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar',color:'#37a2da',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#32c5e9',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#67e0e3',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#66d18c',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#ebc642',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#ff9f7f',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#fb7293',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#e062ae',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#e690d1',label:labelOption,itemStyle:itemOption}
    ]
};


if (option_01_02 && typeof option_01_02 === "object") {
	myChart_01_02.setOption(option_01_02, true);
	/*var index_01_02 = 0; //播放所在下标
	var mTime = setInterval(function() {
		myChart_01_02.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_01_02
		});
		index_01_02++;
		if(index_01_02 >= option_01_02.dataset.source[0].length) {
			index_01_02 = 0;
		}
	},2000);*/
}


var dom_01_03 = document.getElementById("count_01_03");
var myChart_01_03 = echarts.init(dom_01_03);

var labelOption = {
	normal: {
        show: true, //开启显示,
		rotate: 90,
		align: 'left',
		verticalAlign: 'middle',
		position: 'insideBottom',
		textStyle: { //数值样式
			color: '#fff',
			fontSize: 12
		},
		formatter :'{a}'
    }
}
var itemOption = {
	normal: {
		show: true,
		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0,
			color: '#94d66a'
		}, {
			offset: 1,
			color: '#07bbb9'
		}]),
		barBorderRadius: [50,50,0,0],
		borderWidth: 0,
	}
}

option_01_03 = {
    legend: {show:false},
    tooltip: {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器,坐标轴触发有效
            type : 'shadow'        // 默认为直线,可选为:'line' | 'shadow'
        }
	},
    dataset: {
        source: [
            ['class', '101','201','301','401','501','601','701','801','901'],
            ['02-11', 4356, 8585, 9372, 7345, 5516, 8314, 7346, 5512, 4356],
            ['02-10', 8314, 7346, 5512, 4356, 8585, 6523, 8253, 8585, 9372],
            ['02-09', 8643, 6523, 8253, 8585, 9372, 5392, 3913, 7346, 5512],
            ['02-08', 7243, 5392, 3913, 7346, 5512, 9372, 7345, 5516, 8314]
        ]
    },
	grid: {
		top: '5%',
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }],
    xAxis: {
		type: 'category',
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
	},
    yAxis: {
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
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar',color:'#37a2da',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#32c5e9',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#67e0e3',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#66d18c',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#ebc642',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#ff9f7f',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#fb7293',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#e062ae',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#e690d1',label:labelOption,itemStyle:itemOption}
    ]
};


if (option_01_03 && typeof option_01_03 === "object") {
	myChart_01_03.setOption(option_01_03, true);
	/*var index_01_03 = 0; //播放所在下标
	var mTime = setInterval(function() {
		myChart_01_03.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_01_03
		});
		index_01_03++;
		if(index_01_03 >= option_01_03.dataset.source[0].length) {
			index_01_03 = 0;
		}
	},2000);*/
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
        data:['优秀','良好','一般'],
		show:false,
		textStyle: {
			fontSize: '12',
			color:'#ffffff'
		}
    },
    series: [
        {
            name:'心率恢复率',
            type:'pie',
            radius: ['30%', '60%'],
			color:['#19db80','#46d9f8','#f69746'],
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
                {value:150, name:'优秀'},
                {value:30, name:'良好'},
                {value:20, name:'一般'}
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

var dom_03_01 = document.getElementById("count_03_01");
var myChart_03_01 = echarts.init(dom_03_01);

var labelOption = {
	normal: {
        show: true, //开启显示,
		rotate: 90,
		align: 'left',
		verticalAlign: 'middle',
		position: 'insideBottom',
		textStyle: { //数值样式
			color: '#fff',
			fontSize: 12
		},
		formatter :'{a}'
    }
}
var itemOption = {
	normal: {
		show: true,
		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0,
			color: '#94d66a'
		}, {
			offset: 1,
			color: '#07bbb9'
		}]),
		barBorderRadius: [50,50,0,0],
		borderWidth: 0,
	}
}

option_03_01 = {
    legend: {show:false},
    tooltip: {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器,坐标轴触发有效
            type : 'shadow'        // 默认为直线,可选为:'line' | 'shadow'
        }
	},
    dataset: {
        source: [
            ['class', '101','201','301','401','501','601','701','801','901'],
            ['02-11', 90, 85, 93.5, 89, 96, 98, 89, 92, 85],
            ['02-10', 83, 73, 82, 96, 85, 65, 83, 75, 92],
            ['02-09', 86, 65, 82, 85, 93, 92, 83, 76, 82],
            ['02-08', 72, 92, 93, 73, 75, 93, 73, 55, 83]
        ]
    },
	grid: {
		top: '5%',
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }],
    xAxis: {
		type: 'category',
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
        }
	},
    yAxis: {
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
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar',color:'#37a2da',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#32c5e9',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#67e0e3',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#66d18c',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#ebc642',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#ff9f7f',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#fb7293',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#e062ae',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#e690d1',label:labelOption,itemStyle:itemOption}
    ]
};


if (option_03_01 && typeof option_03_01 === "object") {
	myChart_03_01.setOption(option_03_01, true);
	/*var index_03_01 = 0; //播放所在下标
	var mTime = setInterval(function() {
		myChart_03_01.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index_03_01
		});
		index_03_01++;
		if(index_03_01 >= option_03_01.dataset.source[0].length) {
			index_03_01 = 0;
		}
	},2000);*/
}


var dom_03_02 = document.getElementById("count_03_02");
var myChart_03_02 = echarts.init(dom_03_02);

var labelOption = {
	normal: {
        show: true, //开启显示,
		rotate: 90,
		align: 'left',
		verticalAlign: 'middle',
		position: 'insideBottom',
		textStyle: { //数值样式
			color: '#fff',
			fontSize: 12
		},
		formatter :'{a}'
    }
}
var itemOption = {
	normal: {
		show: true,
		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0,
			color: '#94d66a'
		}, {
			offset: 1,
			color: '#07bbb9'
		}]),
		barBorderRadius: [50,50,0,0],
		borderWidth: 0,
	}
}

option_03_02 = {
    legend: {show:false},
    tooltip: {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器,坐标轴触发有效
            type : 'shadow'        // 默认为直线,可选为:'line' | 'shadow'
        }
	},
    dataset: {
        source: [
            ['class', '101','201','301','401','501','601','701','801','901'],
            ['02-11', 90, 85, 93.5, 89, 96, 98, 89, 92, 85],
            ['02-10', 83, 73, 82, 96, 85, 65, 83, 75, 92],
            ['02-09', 86, 65, 82, 85, 93, 92, 83, 76, 82],
            ['02-08', 72, 92, 93, 73, 75, 93, 73, 55, 83]
        ]
    },
	grid: {
		top: '5%',
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }],
    xAxis: {
		type: 'category',
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
        }
	},
    yAxis: {
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
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar',color:'#37a2da',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#32c5e9',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#67e0e3',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#66d18c',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#ebc642',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#ff9f7f',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#fb7293',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#e062ae',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#e690d1',label:labelOption,itemStyle:itemOption}
    ]
};


if (option_03_02 && typeof option_03_02 === "object") {
	myChart_03_02.setOption(option_03_02, true);
}



var dom_03_03 = document.getElementById("count_03_03");
var myChart_03_03 = echarts.init(dom_03_03);

var labelOption = {
	normal: {
        show: true, //开启显示,
		rotate: 90,
		align: 'left',
		verticalAlign: 'middle',
		position: 'insideBottom',
		textStyle: { //数值样式
			color: '#fff',
			fontSize: 12
		},
		formatter :'{a}'
    }
}
var itemOption = {
	normal: {
		show: true,
		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0,
			color: '#94d66a'
		}, {
			offset: 1,
			color: '#07bbb9'
		}]),
		barBorderRadius: [50,50,0,0],
		borderWidth: 0,
	}
}

option_03_03 = {
    legend: {show:false},
    tooltip: {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器,坐标轴触发有效
            type : 'shadow'        // 默认为直线,可选为:'line' | 'shadow'
        }
	},
    dataset: {
        source: [
            ['class', '101','201','301','401','501','601','701','801','901'],
            ['02-11', 90, 85, 93.5, 89, 96, 98, 89, 92, 85],
            ['02-10', 83, 73, 82, 96, 85, 65, 83, 75, 92],
            ['02-09', 86, 65, 82, 85, 93, 92, 83, 76, 82],
            ['02-08', 72, 92, 93, 73, 75, 93, 73, 55, 83]
        ]
    },
	grid: {
		top: '5%',
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }],
    xAxis: {
		type: 'category',
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
        }
	},
    yAxis: {
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
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar',color:'#37a2da',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#32c5e9',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#67e0e3',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#66d18c',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#ebc642',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#ff9f7f',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#fb7293',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#e062ae',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#e690d1',label:labelOption,itemStyle:itemOption}
    ]
};


if (option_03_03 && typeof option_03_03 === "object") {
	myChart_03_03.setOption(option_03_03, true);
}


var dom_03_04 = document.getElementById("count_03_04");
var myChart_03_04 = echarts.init(dom_03_04);

var labelOption = {
	normal: {
        show: true, //开启显示,
		rotate: 90,
		align: 'left',
		verticalAlign: 'middle',
		position: 'insideBottom',
		textStyle: { //数值样式
			color: '#fff',
			fontSize: 12
		},
		formatter :'{a}'
    }
}
var itemOption = {
	normal: {
		show: true,
		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0,
			color: '#94d66a'
		}, {
			offset: 1,
			color: '#07bbb9'
		}]),
		barBorderRadius: [50,50,0,0],
		borderWidth: 0,
	}
}

option_03_04 = {
    legend: {show:false},
    tooltip: {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器,坐标轴触发有效
            type : 'shadow'        // 默认为直线,可选为:'line' | 'shadow'
        }
	},
    dataset: {
        source: [
            ['class', '101','201','301','401','501','601','701','801','901'],
            ['02-11', 90, 85, 93.5, 89, 96, 98, 89, 92, 85],
            ['02-10', 83, 73, 82, 96, 85, 65, 83, 75, 92],
            ['02-09', 86, 65, 82, 85, 93, 92, 83, 76, 82],
            ['02-08', 72, 92, 93, 73, 75, 93, 73, 55, 83]
        ]
    },
	grid: {
		top: '5%',
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	dataZoom: [{
        type: 'inside',
        start: 0,
		end:50
    }],
    xAxis: {
		type: 'category',
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
        }
	},
    yAxis: {
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
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar',color:'#37a2da',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#32c5e9',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#67e0e3',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#66d18c',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#ebc642',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#ff9f7f',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#fb7293',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#e062ae',label:labelOption,itemStyle:itemOption},
        {type: 'bar',color:'#e690d1',label:labelOption,itemStyle:itemOption}
    ]
};


if (option_03_04 && typeof option_03_04 === "object") {
	myChart_03_04.setOption(option_03_04, true);
}




$(function(){
	myChart_resize();
});		
window.onresize = function(){
	myChart_resize();
}
function myChart_resize(){
	myChart_01.resize();
	myChart_01_02.resize();
	myChart_01_03.resize();
	myChart_02.resize();
	myChart_03_01.resize();
	myChart_03_02.resize();
	myChart_03_03.resize();
	myChart_03_04.resize();
}