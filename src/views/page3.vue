<template>
    <Row class="page3">
        <Col :span="7">
            <div class="left">
                <span class="title"
                    ><span class="title-text">出勤情况分析</span></span
                >
                <span class="angle1"></span>
                <span class="angle2"></span>
                <span class="angle3"></span>
                <span class="angle4"></span>
                <div class="left1" style="height: 50%">
                    <div style="height: 100%; padding-top: 10%">
                        <chart1
                            id="left_1"
                            title="表扬统计"
                            :data="data1"
                            ref="channelBar1"
                        ></chart1>
                        <chart2
                            id="left_2"
                            :data="data2"
                            ref="distributionSolider1"
                        ></chart2>
                    </div>
                </div>
                <div class="data-col">
                    <div class="data-item">
                        <span class="data-title">应到人数</span>
                        <span class="data-digit">133</span>
                    </div>
                    <div class="data-item">
                        <span class="data-title">实到人数</span>
                        <span class="data-digit">131</span>
                    </div>
                    <div class="data-item">
                        <span class="data-title">病假数</span>
                        <span class="data-digit">2</span>
                    </div>
                    <div class="data-item">
                        <span class="data-title">事假数</span>
                        <span class="data-digit">0</span>
                    </div>
                </div>
                <div class="left1" style="height: 40%; padding-top: 3%">
                    <chart3 class="maring: 40px" ref="redPocket"></chart3>
                </div>
            </div>
        </Col>
        <Col :span="10" style="padding: 0 1%">
            <div class="center-top">
                <china-map ref="chinaMap"></china-map>
            </div>
            <div class="center-bottom">
                <span class="title"
                    ><span class="title-text">训练结果分析</span></span
                >
                <!-- <span class="angle1"></span>
                <span class="angle2"></span>
                <span class="angle3"></span>
                <span class="angle4"></span> -->
                <Row class="bottom-radars height-full">
                    <Col span="12" class="radar-col height-full">
                        <radar
                            class="height-full"
                            id="bottom_1_1"
                            :data="data5"
                            ref="chart1"
                        ></radar>
                    </Col>
                    <Col span="12" class="radar-col height-full">
                        <radar
                            class="height-full"
                            id="bottom_1_2"
                            :data="data6"
                            ref="chart2"
                        ></radar>
                    </Col>
                    <!-- <Col span="6">
                        <radar
                            id='bottom_1_3'
                            :data=data7
                            ref="chart3"
                        ></radar>
                    </Col>
                    <Col span="6">
                        <radar
                            id='bottom_1_4'
                            :data=data8
                            ref="chart4"
                        ></radar>
                    </Col> -->
                </Row>
                <!-- <Row class="bottom-bars">
                    <Col span="6">
                        <chart4
                            id="bottom_2_1"
                            :data="data9"
                            ref="chart5"
                        ></chart4>
                    </Col>
                    <Col span="6">
                        <chart4
                            id="bottom_2_2"
                            :data="data10"
                            ref="chart6"
                        ></chart4>
                    </Col>
                    <Col span="6">
                        <chart4
                            id="bottom_2_3"
                            :data="data11"
                            ref="chart7"
                        ></chart4>
                    </Col>
                    <Col span="6">
                        <chart4
                            id="bottom_2_4"
                            :data="data12"
                            ref="chart8"
                        ></chart4>
                    </Col>
                </Row> -->
            </div>
        </Col>
        <Col :span="7">
            <div class="right-1">
                <div class="right1-1">
                    <span class="title"
                        ><span class="title-text">模块三分析</span></span
                    >
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <chart5 ref="webcastsRisk"></chart5>
                </div>
            </div>
            <div class="right-1">
                <div class="right1-1">
                    <span class="title"
                        ><span class="title-text">模块四分析</span></span
                    >
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <chart6 ref="deviceSafeRisk"></chart6>
                </div>
            </div>
            <div class="right-2">
                <div class="right1-1">
                    <span class="title"
                        ><span class="title-text">模块五分析</span></span
                    >
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <div class="circular">
                        <div class="canvas">
                            <div class="subtitle">标题1</div>
                            <div class="canvasList">
                                <chart7
                                    id="canvas_1"
                                    title="分类1"
                                    color="#00CCFF"
                                    ref="ring1"
                                ></chart7>
                                <chart7
                                    id="canvas_2"
                                    title="分类2"
                                    color="#EDCE43"
                                    ref="ring2"
                                ></chart7>
                                <chart7
                                    id="canvas_3"
                                    title="分类3"
                                    color="#F83552"
                                    ref="ring3"
                                ></chart7>
                            </div>
                        </div>
                        <chart8 ref="hotWords"></chart8>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
</template>

<script>
const chinaMap = () => import("./components/page3/chinaMap");
const pie = () => import("./components/pie");
const radar = () => import("./components/radar");
const chart1 = () => import("./components/page3/chart1");
const chart2 = () => import("./components/page3/chart2");
const chart3 = () => import("./components/page3/chart3");
const chart4 = () => import("./components/page3/chart4");
const chart5 = () => import("./components/page3/chart5");
const chart6 = () => import("./components/page3/chart6");
const chart7 = () => import("./components/page3/chart7");
const chart8 = () => import("./components/page3/chart8");

export default {
    name: "page3",
    components: {
        chinaMap,
        chart1,
        chart2,
        pie,
        chart3,
        radar,
        chart4,
        chart5,
        chart6,
        chart7,
        chart8,
    },
    data() {
        return {
            //分析标题数据
            data1: [
                {
                    subtitle: "45人次",
                    top: "21%",
                    data: { name: "队列表扬", value: 45, color: "#0E4CFF" },
                },
                {
                    subtitle: "60人次",
                    top: "33%",
                    data: { name: "内务表扬", value: 60, color: "#B405FD" },
                },
                {
                    subtitle: "12人次",
                    top: "45%",
                    data: { name: "合唱表扬", value: 12, color: "#FE9900" },
                },
                {
                    subtitle: "24人次",
                    top: "58%",
                    data: { name: "宣传表扬", value: 24, color: "#FF6600" },
                },
                {
                    subtitle: "33人次",
                    top: "71%",
                    data: { name: "学习表扬", value: 33, color: "#7F05FD" },
                },
                {
                    subtitle: "45人次",
                    top: "83%",
                    data: { name: "政治表扬", value: 45, color: "#7F05FD" },
                },
            ],
            data2: [
                // 分析标题1用户排名数据
                {
                    top: "8%",
                    color: "14,73,245",
                    data: [
                        { name: "曹博洋", value: 10 },
                        { name: "曹瀚文", value: 9 },
                        { name: "曹建豪", value: 8 },
                        { name: "常家睿", value: 7 },
                        { name: "陈搏展", value: 6 },
                        { name: "陈承诺", value: 5 },
                        { name: "陈骏鸣", value: 4 },
                        { name: "陈可昕", value: 3 },
                        { name: "陈林沛汐", value: 2 },
                        { name: "陈汝霖", value: 1 },
                    ],
                },
                {
                    top: "22%",
                    color: "170,6,243",
                    data: [
                        { name: "陈思翰", value: 10 },
                        { name: "陈维嘉", value: 9 },
                        { name: "陈响", value: 8 },
                        { name: "陈依倩", value: 7 },
                        { name: "陈姿伊", value: 6 },
                        { name: "董鉴", value: 5 },
                        { name: "董益嘉", value: 4 },
                        { name: "段程议", value: 3 },
                        { name: "范静雅", value: 2 },
                        { name: "范天泓", value: 1 },
                    ],
                },
                {
                    top: "36%",
                    color: "254,153,0",
                    data: [
                        { name: "方华扬", value: 10 },
                        { name: "方睿洋", value: 9 },
                        { name: "方尉丞", value: 8 },
                        { name: "符慧跃", value: 7 },
                        { name: "高思恒", value: 6 },
                        { name: "高原祺", value: 5 },
                        { name: "高子玉", value: 4 },
                        { name: "郭家铄", value: 3 },
                        { name: "郭名扬", value: 2 },
                        { name: "贺炳鑫", value: 1 },
                    ],
                },
                {
                    top: "50%",
                    color: "255,102,0",
                    data: [
                        { name: "贺淼", value: 10 },
                        { name: "侯爵", value: 9 },
                        { name: "胡抒扬", value: 8 },
                        { name: "黄勃", value: 7 },
                        { name: "黄雨晨", value: 6 },
                        { name: "蒋濡涵", value: 5 },
                        { name: "金远豪", value: 4 },
                        { name: "靳梦茹", value: 3 },
                        { name: "赖梓桐", value: 2 },
                        { name: "郎梓宁", value: 1 },
                    ],
                },
                {
                    top: "64%",
                    color: "127,5,253",
                    data: [
                        { name: "李金熙", value: 10 },
                        { name: "李奇泽", value: 9 },
                        { name: "李岳潭", value: 8 },
                        { name: "廖望轩", value: 7 },
                        { name: "林奕汝", value: 6 },
                        { name: "刘灿宇", value: 5 },
                        { name: "刘佳鸣", value: 4 },
                        { name: "刘嘉阳", value: 3 },
                        { name: "刘谨睿", value: 2 },
                        { name: "刘景昀", value: 1 },
                    ],
                },
                {
                    top: "78%",
                    color: "127,5,253",
                    data: [
                        { name: "苏阳果", value: 10 },
                        { name: "苏子皓", value: 9 },
                        { name: "孙奕凡", value: 8 },
                        { name: "唐悠洋", value: 7 },
                        { name: "童博雅", value: 6 },
                        { name: "王涵", value: 5 },
                        { name: "王嘉祥", value: 4 },
                        { name: "王若同", value: 3 },
                        { name: "王思涵", value: 2 },
                        { name: "王歆雅", value: 1 },
                    ],
                },
            ],
            // 分析标题1 用户排名
            data4: [
                {
                    top: "30%",
                    color: "14,73,245",
                    data: [
                        { name: "刘天洋", value: 10 },
                        { name: "刘新杰", value: 9 },
                        { name: "刘轩霆", value: 8 },
                        { name: "刘雨桐", value: 7 },
                        { name: "刘泽宇", value: 6 },
                        { name: "刘卓玥", value: 5 },
                        { name: "柳皓", value: 4 },
                        { name: "路子轩", value: 3 },
                        { name: "倪晨", value: 2 },
                        { name: "聂紫怡", value: 1 },
                    ],
                },
                {
                    top: "57%",
                    color: "254,153,0",
                    data: [
                        { name: "彭政瀚", value: 9 },
                        { name: "钱单阳", value: 8 },
                        { name: "乔鑫渊", value: 7 },
                        { name: "邱晨曦", value: 6 },
                        { name: "邱天辰", value: 5 },
                        { name: "全炳旭", value: 4 },
                        { name: "施为然", value: 3 },
                        { name: "史芮华", value: 2 },
                        { name: "司煦", value: 1 },
                    ],
                },
                {
                    top: "83%",
                    color: "127,5,253",
                    data: [
                        { name: "苏阳果", value: 10 },
                        { name: "苏子皓", value: 9 },
                        { name: "孙奕凡", value: 8 },
                        { name: "唐悠洋", value: 7 },
                        { name: "童博雅", value: 6 },
                        { name: "王涵", value: 5 },
                        { name: "王嘉祥", value: 4 },
                        { name: "王若同", value: 3 },
                        { name: "王思涵", value: 2 },
                        { name: "王歆雅", value: 1 },
                    ],
                },
            ],
            // 模块二雷达图数据1
            data5: {
                title: "队列优缺点",
                position: ["5%", "14%"],
                center: ["50%", "60%"],
                indicator: [
                    { text: "整齐度" },
                    { text: "和谐度" },
                    { text: "口号声" },
                    { text: "行进速度" },
                    { text: "标准度" },
                ],
                data: [
                    {
                        name: "1排",
                        color: "#0DE4EE",
                        value: [55, 64, 78, 80, 46],
                    },
                    {
                        name: "2排",
                        color: "#0D88F3",
                        value: [67, 45, 43, 72, 51],
                    },
                ],
            },
            // 模块二雷达图数据2
            data6: {
                title: "合唱优缺点",
                position: ["5%", "14%"],
                center: ["50%", "60%"],
                indicator: [
                    { text: "音准" },
                    { text: "音高" },
                    { text: "节奏" },
                    { text: "表情" },
                    { text: "音色" },
                    { text: "站姿" },
                    { text: "和谐" },
                    { text: "响度" },
                ],
                data: [
                    {
                        name: "高声部",
                        color: "#6514FF",
                        value: [91, 45, 56, 35, 76, 45, 86, 45],
                    },
                    {
                        name: "低声部",
                        color: "#B370FD",
                        value: [33, 56, 45, 75, 34, 65, 76, 84],
                    },
                ],
            },
            // 模块二雷达图数据3
            data7: {
                title: "雷达图数据3",
                position: ["5%", "14%"],
                center: ["50%", "60%"],
                indicator: [
                    { text: "分类1" },
                    { text: "分类2" },
                    { text: "分类3" },
                    { text: "分类4" },
                    { text: "分类5" },
                    { text: "分类6" },
                    { text: "分类7" },
                    { text: "分类8" },
                    { text: "分类9" },
                    { text: "分类10" },
                    { text: "分类11" },
                    { text: "分类12" },
                ],
                data: [
                    {
                        name: "数值1",
                        color: "#0096FE",
                        value: [
                            100, 8, 0.4, -80, 2000, 345, 123, 21, 34, 54, 431,
                            876,
                        ],
                    },
                    {
                        name: "数值2",
                        color: "#9EEAFF",
                        value: [
                            60, 5, 0.3, -100, 1500, 232, 78, 32, 567, 43, 765,
                            432,
                        ],
                    },
                ],
            },
            // 模块二雷达图数据4
            data8: {
                title: "雷达图数据4",
                position: ["5%", "14%"],
                center: ["50%", "60%"],
                indicator: [
                    { text: "分类1" },
                    { text: "分类2" },
                    { text: "分类3" },
                    { text: "分类4" },
                    { text: "分类5" },
                    { text: "分类6" },
                ],
                data: [
                    {
                        name: "分类1",
                        color: "#FD9800",
                        value: [100, 8, 0.4, -80, 2000, 345],
                    },
                    {
                        name: "分类2",
                        color: "#FDC673",
                        value: [60, 5, 0.3, -100, 1500, 232],
                    },
                ],
            },
            // 模块二柱图数据1
            data9: {
                title: "柱图数据1",
                data: [
                    {
                        name: "人数",
                        color: "#00CCFF",
                        value: ["112", "212", "42", "232", "123", "67"],
                    },
                    {
                        name: "次数",
                        color: "#142AFE",
                        value: ["112", "212", "42", "232", "123", "67"],
                    },
                ],
            },
            // 模块二柱图数据1
            data10: {
                title: "柱图数据2",
                data: [
                    {
                        name: "个数",
                        color: "#6514FF",
                        value: ["112", "212", "42", "232", "123", "67"],
                    },
                    {
                        name: "条数",
                        color: "#B370FD",
                        value: ["112", "212", "42", "232", "123", "67"],
                    },
                ],
            },
            data11: {
                title: "柱图数据3",
                data: [
                    {
                        name: "主动",
                        color: "#05467D",
                        value: ["112", "212", "42", "232", "123", "67"],
                    },
                    {
                        name: "被动",
                        color: "#52B8FF",
                        value: ["112", "212", "42", "232", "123", "67"],
                    },
                ],
            },
            data12: {
                title: "柱图数据4",
                data: [
                    {
                        name: "个数",
                        color: "#FD9800",
                        value: ["112", "212", "42", "232", "123", "67"],
                    },
                    {
                        name: "人数",
                        color: "#FDC673",
                        value: ["112", "212", "42", "232", "123", "67"],
                    },
                ],
            },
            pieData1: {
                // 饼图数据1
                title: "TOP数据1",
                color: "#2C7BFE",

                data: [
                    {
                        value: 60,
                        name: "分类1",
                        itemStyle: {
                            color: "#1456FE",
                        },
                    },
                    {
                        value: 20,
                        name: "分类2",
                        itemStyle: {
                            color: "#00CCFF",
                        },
                    },
                    {
                        value: 80,
                        name: "分类3",
                        itemStyle: {
                            color: "#142AFE",
                        },
                    },
                    {
                        value: 40,
                        name: "分类4",
                        itemStyle: {
                            color: "#1493FE",
                        },
                    },
                    {
                        value: 40,
                        name: "分类5",
                        itemStyle: {
                            color: "#252448",
                        },
                    },
                ],
            },
            pieData2: {
                // 饼图数据1
                title: "TOP数据2",
                color: "#2C7BFE",

                data: [
                    {
                        value: 60,
                        name: "分类1",
                        itemStyle: {
                            color: "#142AFE",
                        },
                    },
                    {
                        value: 20,
                        name: "分类2",
                        itemStyle: {
                            color: "#1493FE",
                        },
                    },
                    {
                        value: 80,
                        name: "分类3",
                        itemStyle: {
                            color: "#252448",
                        },
                    },
                    {
                        value: 40,
                        name: "分类4",
                        itemStyle: {
                            color: "#00CCFF",
                        },
                    },
                    {
                        value: 40,
                        name: "分类5",
                        itemStyle: {
                            color: "#1456FE",
                        },
                    },
                ],
            },
            pieData3: {
                // 饼图数据1
                title: "TOP数据3",
                color: "#2C7BFE",

                data: [
                    {
                        value: 60,
                        name: "分类1",
                        itemStyle: {
                            color: "#1493FE",
                        },
                    },
                    {
                        value: 20,
                        name: "分类2",
                        itemStyle: {
                            color: "#142AFE",
                        },
                    },
                    {
                        value: 80,
                        name: "分类3",
                        itemStyle: {
                            color: "#1456FE",
                        },
                    },
                    {
                        value: 40,
                        name: "分类4",
                        itemStyle: {
                            color: "#00CCFF",
                        },
                    },
                    {
                        value: 40,
                        name: "分类5",
                        itemStyle: {
                            color: "#252448",
                        },
                    },
                ],
            },
            resizeFn: null,
        };
    },
    mounted() {
        this.resizeFn = this.$debounce(() => {
            // 通过捕获系统的onresize事件触发我们需要执行的事件
            this.$refs.channelBar1.setChart();
            this.$refs.distributionSolider1.setChart();
            this.$refs.channelBar2.setChart();
            this.$refs.distributionSolider2.setChart();
            //this.$refs.pies.setPies();
            this.$refs.redPocket.setPocket();
            this.$refs.webcastsRisk.setWebcasts();
            this.$refs.deviceSafeRisk.setDeviceSafe();
            this.$refs.ring1.drawRing();
            this.$refs.ring2.drawRing();
            this.$refs.ring3.drawRing();
            for (let i = 1; i < 9; i++) {
                this.$refs["chart" + i].setChart();
            }
            this.$refs.chinaMap.setMap();
            this.$refs.hotWords.setChart();
        }, 500);
        window.addEventListener("resize", this.resizeFn);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.resizeFn);
    },
};
</script>

<style lang="less" scoped>
.data-col {
    display: flex;
}

.data-item {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    margin-top: 20px;
    .data-title {
        color: #6eddf1;
        font-size: 12px;
    }
    .data-digit {
        color: #fff;
        font-size: 24px;
    }
}

.radar-col {
    height: 600px;
    padding: 40px 0;
}

.height-full {
    height: 100% !important;
}

.page3 {
    height: 100%;
    width: 100%;
    padding: 14px 20px 20px;
    background: #03044a;
    overflow: hidden;
    .ivu-col {
        height: 100%;
    }

    .left,
    .right1-1,
    .center-bottom {
        height: 100%;
        border: 1px solid #0d2451;
        position: relative;
        background: #151456;

        #left_5 {
            height: 100%;
            width: 45%;
            float: left;
        }

        #left_6 {
            height: 100%;
            width: 55%;
            float: left;
        }

        .circular {
            height: 100%;

            .canvas {
                height: 100%;
                width: 30%;
                float: left;

                .subtitle {
                    font-size: 12px;
                    font-weight: bold;
                    color: #fff;
                    height: 25px;
                    padding: 10px 0;
                    text-align: center;
                }

                .canvasList {
                    height: calc(~"100% - 25px");
                    text-align: center;
                }
            }
        }

        .left1 {
            border-bottom: 1px solid #0d2451;
            background: #151456;
        }

        .title {
            position: absolute;
            display: inline-block;
            color: #6eddf1;
            border: 2px solid #6eddf1;
            height: 18px;
            padding: 0 2px;
            left: 50%;
            transform: translate(-50%, -50%);

            .title-text {
                position: relative;
                font-size: 16px;
                background: #09102e;
                display: inline-block;
                padding: 0 4px;
                transform: translateY(-5px);
            }
        }
    }

    .center-top {
        height: 60%;
    }

    .center-bottom {
        height: 40%;

        .bottom-radars {
            height: 55%;
        }

        .bottom-bars {
            height: 45%;
        }
    }

    .right-1 {
        height: 30%;

        .right1-1 {
            height: 92%;
        }
    }

    .right-2 {
        height: 40%;
    }
}
</style>
