<template>
    <div class='deviceSafeRisk'></div>
</template>

<script>
export default {
    name: 'deviceSafeRisk',
    data() {
        return {
            myChart:null
        }
    },
    methods: {
        setDeviceSafe() {
            let option = {
                title: [
                    {
                        text: '稿件得分排行榜',
                        textStyle: {
                            color: "#fff",
                            fontSize: 12
                        },
                        top: '4%',
                        left: '4%'
                    },
                    {
                        text: "稿件类型统计",
                        textStyle: {
                            color: "#fff",
                            fontSize: 12
                        },
                        top: '4%',
                        left: '55%'
                    },
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: [
                        {name: '人数', icon: 'circle'},
                        {name: '得分', icon: 'circle'},

                    ],
                    gridIndex: 3,
                    orient: 'vertical',
                    right: "44%",
                    bottom: "6%",
                    itemWidth: 7,
                    itemHeight: 7,
                    textStyle: {
                        color: '#00CCFF',
                        fontSize: 10
                    }
                },
                grid: {
                    top: '15%',
                    left: '3%',
                    right: '50%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLabel: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false},
                    axisLine: {show: false}
                },
                yAxis: {
                    type: 'category',
                    axisTick: {show: false},
                    splitLine: {show: false},
                    axisLine: {show: false},
                    axisLabel: {
                        color: '#fff',
                        backgroundColor: '#A34FFA',
                        borderRadius: 3,
                        margin: 0,
                        padding: [1, 3, 1, 3]
                    },
                    inverse: true,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
                },
                angleAxis: {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: '#172E6E'
                        }
                    },
                    startAngle: 135,
                    axisLabel: {
                        color: '#04E8EB',
                        fontSize: 10
                    },
                    axisTick: {show: false},
                    data: ['通讯稿', '艺术稿', '代码作品', '其他'],
                    z: 10
                },
                radiusAxis: {
                    splitLine: {
                        lineStyle: {
                            color: '#172E6E'
                        }
                    },
                    axisTick: {show: false},
                    axisLabel: {show: false},
                    axisLine: {
                        show: false
                    }
                },
                polar: {
                    center: ['72%', '55%'],
                    radius: "65%",
                },
                series: [
                    {
                        name: '通讯稿',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 8,
                        itemStyle: {
                            color: '#5304EC',
                            borderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            show: false,

                            position: 'insideRight'
                        },
                        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 15]
                    },
                    {
                        name: '艺术稿',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 8,
                        itemStyle: {
                            color: '#6829EE',
                            borderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            show: false,
                            position: 'insideRight'
                        },
                        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 15]
                    },
                    {
                        name: '代码作品',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 8,
                        itemStyle: {
                            color: '#8040ED',
                            borderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            show: false,
                            position: 'insideRight'
                        },
                        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 15]
                    },
                    {
                        name: '其他',
                        type: 'bar',
                        barWidth: 8,
                        stack: '总量',
                        itemStyle: {
                            color: '#9D50EC',
                            borderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            show: false,
                            position: 'insideRight'
                        },
                        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 15]
                    },
                    {
                        name: '其他',
                        type: 'bar',
                        barWidth: 8,
                        stack: '总量',
                        itemStyle: {
                            color: '#A77BDE',
                            borderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            show: false,
                            position: 'insideRight'
                        },
                        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 15]
                    },
                    {
                        type: 'bar',
                        data: [1, 2, 3, 4],
                        coordinateSystem: 'polar',
                        name: '得分',
                        itemStyle: {
                            color: '#0AB9FE'
                        },
                        stack: 'a'
                    }, {
                        type: 'bar',
                        data: [2, 4, 6, 1],
                        coordinateSystem: 'polar',
                        name: '人数',
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(104,18,147,1)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#1D2584' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        },
                        stack: 'a'
                    }

                ]
            };
            if (!this.myChart) this.myChart = this.$echarts(this.$el);

            this.myChart.clear();
            this.myChart.resize()
            this.myChart.setOption(option);
        },
    },
    mounted() {
        this.setDeviceSafe();
    },
}
</script>

<style lang="less" scoped>
.deviceSafeRisk {
    height: 90%;
}
</style>
