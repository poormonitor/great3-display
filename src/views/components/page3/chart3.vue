<template>
    <div class="redPocket"></div>
</template>

<script>
export default {
    name: "redPocket",
    data() {
        return {
            myChart: null,
        };
    },
    methods: {
        // 红包装账
        setPocket() {
            let option = {
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                    },
                },
                title: {
                    text: "每日训练时长",
                    top: "1%",
                    left: "2%",
                    textStyle: {
                        color: "#fff",
                        fontSize: 14,
                    },
                },
                grid: {
                    top: "23%",
                    bottom: "10%",
                },
                xAxis: {
                    scale: true,
                    name: "日期",
                    data: [
                        "2024-08-19",
                        "2024-08-20",
                        "2024-08-21",
                        "2024-08-22",
                        "2024-08-23",
                        "2024-08-24",
                        "2024-08-25",
                        "2024-08-26",
                        "2024-08-27",
                        "2024-08-28",
                    ],
                    nameTextStyle: {
                        color: "#0FB9CD",
                        fontSize: 10,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        color: "#0FB9CD",
                        fontSize: 8,
                    },
                    axisTick: {
                        color: "#14336D",
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#14336D",
                        },
                    },
                },
                yAxis: {
                    scale: true,
                    name: "时间",
                    nameTextStyle: {
                        color: "#0FB9CD",
                        fontSize: 10,
                        padding: [0, 65, -10, 0],
                    },
                    axisTick: { show: false },
                    axisLabel: {
                        color: "#0FB9CD",
                        fontSize: 8,
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#134076",
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#14336D",
                        },
                    },
                },
                series: [
                    {
                        type: "line",
                        data: [
                            5.5, 5.2, 5.7, 5.9, 6.5, 6.7, 6.2, 6.8, 6.3, 7.3,
                        ],
                    },
                ],
            };
            if (!this.myChart) this.myChart = this.$echarts(this.$el);

            this.myChart.clear();
            this.myChart.resize();
            this.myChart.setOption(option);
        },
    },
    mounted() {
        this.setPocket();
    },
};
</script>F

<style lang="less" scoped>
.redPocket {
    height:90%;
}
</style>