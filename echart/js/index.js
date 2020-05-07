/* 左上 湖北省部分市疫情指数 */
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置和数据
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['累计确诊', '累计死亡', '累计治愈'],
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        grid: {
            left: '0%',
            right: '4%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,.6)",

                fontSize: "12"
            }
        },
        yAxis: {
            type: 'category',
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },

            data: ['孝感', '黄冈', '荆州', '鄂州', '随州']
        },
        series: [{
                name: '累计确诊',
                type: 'bar',
                stack: '总量',
                label: {
                    position: 'insideRight'
                },
                data: [3518, 2907, 1580, 1394, 1307]
            },
            {
                name: '累计死亡',
                type: 'bar',
                stack: '总量',
                label: {
                    position: 'insideRight'
                },
                data: [129, 125, 52, 59, 45]
            },

            {
                name: '累计治愈',
                type: 'bar',
                stack: '总量',
                label: {
                    position: 'insideRight'
                },
                data: [3389, 2782, 1528, 1335, 1262]
            }
        ]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });

    // 数据变化
    var dataAll = [
        { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
        { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    ];

    $(".bar h2 ").on("click", "a", function() {
        option.series[0].data = dataAll[$(this).index()].data;
        myChart.setOption(option);
    });
})();

/* 左中 湖北武汉死亡率对比 */
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line .chart"));

    // (1)准备数据
    var data = {
        year: [
            [0.0258,
                0.0535,
                0.0546,
                0.0571,
                0.0603,
                0.0597,
                0.0545,
                0.0515,
                0.0490,
                0.0433,
                0.0409,
                0.0411,
                0.0401,
                0.0406,
                0.0403,
                0.0405,
                0.0419,
                0.0314,
                0.0282,
                0.0296,
                0.0312,
                0.0318,
                0.0323,
                0.0337
            ],
            [0.0534,
                0.0368,
                0.0352,
                0.0330,
                0.0351,
                0.0348,
                0.0323,
                0.0313,
                0.0306,
                0.0287,
                0.0279,
                0.0279,
                0.0280,
                0.0288,
                0.0294,
                0.0307,
                0.0320,
                0.0272,
                0.0254,
                0.0267,
                0.0284,
                0.0291,
                0.0296,
                0.0311
            ]
        ]
    };

    // 2. 指定配置和数据
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#4c9bfd"
            }
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                '01-27',
                '01-28',
                '01-29',
                '01-30',
                '01-31',
                '02-01',
                '02-02',
                '02-03',
                '02-04',
                '02-05',
                '02-06',
                '02-07',
                '02-08',
                '02-09',
                '02-10',
                '02-11',
                '02-12',
                '02-13',
                '02-14',
                '02-15',
                '02-16',
                '02-17',
                '02-18',
                '02-19'

            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
                name: "武汉",
                type: "line",

                // 是否让线条圆滑显示
                smooth: true,
                data: data.year[0]
            },
            {
                name: "湖北",
                type: "line",

                smooth: true,
                data: data.year[1]
            }
        ]
    };
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
/* 右上 武汉疫情指数 */
(function() {
    /* 实例化对象 */
    var MyChart = echarts.init(document.querySelector('.bar1 .chart'));
    /* 指定配置项和数据 */
    var option = {

        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            },
            data: ['确诊人数', '死亡人数', '治愈人数']

        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            data: ['01-22',
                '01-23',
                '01-24',
                '01-25',
                '01-26',
                '01-27',
                '01-28',
                '01-29',
                '01-30',
                '01-31',
                '02-01',
                '02-02',
                '02-03',
                '02-04',
                '02-05',
                '02-06',
                '02-07',
                '02-08',
                '02-09',
                '02-10',
                '02-11',
                '02-12',
                '02-13',
                '02-14',
                '02-15',
                '02-16',
                '02-17',
                '02-18',
                '02-19',
            ]
        },
        yAxis: {
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            type: 'value'
        },
        series: [{
                name: '确诊人数',
                type: 'line',
                data: [444,
                    444,
                    549,
                    730,
                    1058,
                    1423,
                    2714,
                    3554,
                    4903,
                    5806,
                    7153,
                    9074,
                    11177,
                    13522,
                    16678,
                    19665,
                    22112,
                    24953,
                    27100,
                    29631,
                    31728,
                    33366,
                    48206,
                    51986,
                    54406,
                    56249,
                    58182,
                    59989,
                    61682,
                ]
            },
            {
                name: '死亡人数',
                type: 'line',
                data: [17,
                    17,
                    24,
                    39,
                    52,
                    76,
                    100,
                    125,
                    162,
                    204,
                    249,
                    294,
                    350,
                    414,
                    479,
                    549,
                    618,
                    699,
                    780,
                    871,
                    974,
                    1068,
                    1310,
                    1318,
                    1457,
                    1596,
                    1696,
                    1789,
                    1921,
                ]
            },

            {
                name: '治愈人数',
                type: 'line',
                data: [28,
                    28,
                    31,
                    32,
                    42,
                    45,
                    52,
                    87,
                    90,
                    141,
                    168,
                    267,
                    300,
                    397,
                    536,
                    712,
                    867,
                    1218,
                    1480,
                    1854,
                    2310,
                    2686,
                    3459,
                    3900,
                    4821,
                    5666,
                    6693,
                    7943,
                    9237,
                ]
            }
        ]
    };

    /* 把配置项给实例对象 */
    MyChart.setOption(option);
    /* 让图表自适应 */
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
// 右中 全国治愈率死亡率折线
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line1 .chart"));

    option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                lineStyle: {
                    color: "#dddc6b"
                }
            }
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },

        xAxis: [{
                type: "category",
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                },

                data: [
                    '01-22',
                    '01-23',
                    '01-24',
                    '01-25',
                    '01-26',
                    '01-27',
                    '01-28',
                    '01-29',
                    '01-30',
                    '01-31',
                    '02-01',
                    '02-02',
                    '02-03',
                    '02-04',
                    '02-05',
                    '02-06',
                    '02-07',
                    '02-08',
                    '02-09',
                    '02-10',
                    '02-11',
                    '02-12',
                    '02-13',
                    '02-14',
                    '02-15',
                    '02-16',
                    '02-17',
                    '02-18',
                    '02-19'

                ]
            },
            {
                axisPointer: { show: false },
                axisLine: { show: false },
                position: "bottom",
                offset: 20
            }
        ],

        yAxis: [{
            type: "value",
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },

            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
                name: "治愈率",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: "#0184d5",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1, [{
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#0184d5",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [
                    0.051,
                    0.003,
                    0.007,
                    0.002,
                    0.005,
                    0.002,
                    0.004,
                    0.008,
                    0.002,
                    0.008,
                    0.005,
                    0.011,
                    0.005,
                    0.009,
                    0.012,
                    0.013,
                    0.012,
                    0.018,
                    0.014,
                    0.016,
                    0.018,
                    0.017,
                    0.019,
                    0.014,
                    0.021,
                    0.018,
                    0.021,
                    0.024,
                    0.024

                ]
            },
            {
                name: "死亡率",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1, [{
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#00d887",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [
                    0.024,
                    0.000,
                    0.010,
                    0.011,
                    0.007,
                    0.009,
                    0.005,
                    0.004,
                    0.005,
                    0.004,
                    0.004,
                    0.003,
                    0.003,
                    0.003,
                    0.003,
                    0.003,
                    0.002,
                    0.003,
                    0.002,
                    0.002,
                    0.003,
                    0.002,
                    0.004,
                    0.000,
                    0.002,
                    0.002,
                    0.001,
                    0.001,
                    0.002

                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();