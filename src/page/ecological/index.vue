<template>
  <div id="container">
   <header class="header">
    <p class="title">XXXXX监测平台</p>
   </header>
   <section class="clearfix">
    <div class="left-wrap">
        <div class="year-on-year chart-wrap">
            <div class="box-title">
                <div class="title-text clearfix">
                    <i></i>
                    <span>数据同比图</span>
                </div>
            </div>
            <div class="dataScalogram wrap">
                <div class="scalogramItem">
                    <div class="scalogramTitle">站点在线率</div>
                    <div id="onlineProbability" class="chart"></div>
                    <div class="summary clearfix">
                        <div class="fl">
                            <div><span class="online"></span>在线</div>
                            <div class="blue">151/h</div>
                        </div>
                        <div class="fr">
                            <div><span class="offline"></span>离线</div>
                            <div class="yellow">17/h</div>
                        </div>
                    </div>
                </div>
                <div class="scalogramItem">
                    <div class="scalogramTitle">数据完整率</div>
                    <div id="onlineProbability1" class="chart"></div>
                    <div class="summary clearfix">
                        <div class="fl">
                            <div><span class="upload"></span>上传量</div>
                            <div class="blue">1000</div>
                        </div>
                        <div class="fr">
                            <div><span class="miss"></span>缺失量</div>
                            <div class="yellow">120</div>
                        </div>
                    </div>
                </div>
                <div class="scalogramItem">
                    <div class="scalogramTitle">数据有效率</div>
                    <div id="onlineProbability2" class="chart"></div>
                    <div class="summary clearfix">
                        <div class="fl">
                            <div><span class="effective"></span>有效</div>
                            <div class="blue">2000</div>
                        </div>
                        <div class="fr">
                            <div><span class="invalid"></span>无效</div>
                            <div class="yellow">240</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="water-quality-radar chart-wrap">
            <div class="box-title">
                <div class="title-text clearfix">
                    <i></i>
                    <span>水质等级雷达图</span>
                </div>
            </div>
            <div class="radarWrap wrap clearfix">
                <div class="radarLegend">
                    <div>
                        <span class="radarLine1"></span>
                        <span>本周水质等级</span>
                    </div>
                    <p>III类</p>
                    <div>
                        <span class="radarLine2"></span>
                        <span>上周水质等级</span>
                    </div>
                    <p>IV类</p>
                </div>
                <div id="wqRadarChart" class="chart">

                </div>
            </div>

        </div>
        <div class="water-quality-trend chart-wrap">
            <div class="box-title">
                <div class="title-text clearfix">
                    <i></i>
                    <span>水质等级整体趋势</span>
                </div>
            </div>
            <div id="wqTrendChart" class="wrap chart">

            </div>
        </div>
        <div class="water-quality-latest chart-wrap">
            <div class="box-title">
                <div class="title-text clearfix">
                    <i></i>
                    <span>最近7天水质状况</span>
                    <img class="legend-img" src="../../assets/img/visualization/legend.png" alt="">
                </div>
            </div>
            <div id="wqLatestChart" class="wrap chart">
                <img src="../../assets/img/visualization/zjqt.png" alt="">
            </div>
        </div>

    </div>
    <div class="center-wrap">
        <div class="map">
            <!-- <video src="${basePath}/ftl/ecological/zh.mp4" autoplay loop width="907" height="666"></video> -->
        </div>
        <div class="footerFrame clearfix ">
            <div class="thisWeekOfExceed chart-wrap" style="float: left;">
                <div class="box-title">
                    <div class="title-text clearfix">
                        <i></i>
                        <span>本周污染指标超标率</span>
                    </div>
                </div>
                <div id="thisWeekOfExceedChart" class="wrap chart">

                </div>
            </div>
            <div class="thisWeekOfParams chart-wrap" style="float: right;">
                <div class="box-title">
                    <div class="title-text clearfix">
                        <i></i>
                        <span>本周高锰酸盐、总磷、氨氮沿程变化</span>
                        <img  class="legend-img" src="../../assets/img/visualization/legend1.png" alt="">
                    </div>
                </div>
                <div id="thisWeekOfParamsChart" class="wrap chart">

                </div>
            </div>
        </div>
    </div>
    <div class="right-wrap">
        <div class="latest-five-weeks chart-wrap">
            <div class="box-title">
                <div class="title-text clearfix">
                    <i></i>
                    <span>最新5周整体达标率</span>
                </div>
            </div>
            <div id="latestFiveChart" class="wrap chart">

            </div>
            <img src="../../assets/img/visualization/dottedLine.png" alt="" class="dotted-line">
        </div>
        <div class="achievement-rate chart-wrap">
            <div class="box-title">
                <div class="title-text clearfix">
                    <i></i>
                    <span>本周水质等级达标率环比</span>
                    <img class="legend-img" src="../../assets/img/visualization/ysts.png" alt="">
                </div>
            </div>
            <div id="achievementRateChart" class="wrap chart">
                <div id="amplitudeChart">

                </div>
                <div id="comRateBar">

                </div>
            </div>
        </div>
        <div class="lowestSite chart-wrap">
            <div class="box-title">
                <div class="title-text clearfix">
                    <i></i>
                    <span>达标率最低的5个站点列表</span>
                </div>
            </div>
            <div id="lowestSiteChart" class="wrap chart table-wrap">
                <div class="alarmTitle clearfix">
                    <div>站点名称</div>
                    <div>超标参数</div>
                    <div>标准要求</div>
                    <div>超标倍数</div>
                </div>
                <div  class="swiper-container1" id="swiper_container1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <span>站点1</span><span>氨氮</span><span>1.47mg/L</span><span>1.8</span>
                        </div>
                        <div class="swiper-slide">
                            <span>站点2</span><span>CODcr</span><span>22.50mg/L</span><span>1.4</span>
                        </div>
                        <div class="swiper-slide">
                            <span>站点3</span><span>CODcr</span><span>22.50mg/L</span><span>1.4</span>
                        </div>
                        <div class="swiper-slide">
                            <span>站点4</span><span>CODcr</span><span>22.50mg/L</span><span>1.4</span>
                        </div>
                        <div class="swiper-slide">
                            <span>站点5</span><span>CODcr</span><span>22.50mg/L</span><span>1.4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="realTimeAlarm chart-wrap">
            <div class="box-title">
                <div class="title-text clearfix">
                    <i></i>
                    <span>实时告警</span>
                </div>
            </div>
            <div id="realTimeAlarmChart" class="wrap chart">
                <div class="alarmTitle clearfix">
                    <div>站点名称</div>
                    <div>告警描述</div>
                    <div>同级次数</div>
                    <div>历史</div>
                </div>
                <div  class="swiper-container" id="swiper_container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <span>1</span><span>站点1</span><span>超标</span><span>2</span><span>30分钟</span>
                        </div>
                        <div class="swiper-slide">
                            <span>2</span><span>站点2</span><span>超标</span><span>2</span><span>30分钟</span>
                        </div>
                        <div class="swiper-slide">
                            <span>3</span><span>站点3</span><span>超标</span><span>2</span><span>30分钟</span>
                        </div>
                        <div class="swiper-slide">
                            <span>4</span><span>站点4</span><span>超标</span><span>2</span><span>30分钟</span>
                        </div>
                        <div class="swiper-slide">
                            <span>5</span><span>站点5</span><span>超标</span><span>2</span><span>30分钟</span>
                        </div>
                        <div class="swiper-slide">
                            <span>6</span><span>站点6</span><span>超标</span><span>2</span><span>30分钟</span>
                        </div>
                        <div class="swiper-slide">
                            <span>7</span><span>站点7</span><span>超标</span><span>2</span><span>30分钟</span>
                        </div>
                        <div class="swiper-slide">
                            <span>8</span><span>站点8</span><span>超标</span><span>2</span><span>30分钟</span>
                        </div>
                        <div class="swiper-slide">
                            <span>9</span><span>站点9</span><span>超标</span><span>2</span><span>30分钟</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="videoMonitor chart-wrap">
            <div class="box-title">
                <div class="title-text clearfix">
                    <i></i>
                    <span>视频监控</span>
                </div>
            </div>
            <div id="videoMonitorWrap" class="wrap clearfix">
                <div class="videoSite fl">
                    站点：<br/> 南淝河与亳州路<br/> 桥交叉口
                </div>
                <div class="videoDisplay fl">

                </div>
            </div>
        </div>
    </div>
</section>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  components: {
       
  },
  data: function() {
    return {
      message: "Welcome",
      value3: '',
     
    };
  },
  created(){
      
    },
  methods: {
  creatCharts(){
      this.chart = echarts.init(document.getElementById('wqTrendChart'));
      this.chart.clear();
      var option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        textStyle: {
            color: '#71c9d7',
            fontSize: 12
        },
        legend: {
            data:['现状值','累计值'],
            textStyle: {
                color: '#fcfbf9',
                fontSize: 10
            },
            itemWidth: 20,
            itemHeight: 7,
            x: '310px',
            y: '15px',
        },
        grid: [
            {
                top: 55,
                left: 22,
                right: 22,
                bottom: 24,
                containLabel: true
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: ['15\n周','16\n周','17\n周','18\n周','19\n周','20\n周','21\n周','22\n周','23\n周','24\n周','25\n周','26\n周','27\n周'],
                axisLabel: {
                    lineHeight: 40,
                    textStyle: {
                        color: '#ced9d5',
                        fontSize:10
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#304c71',
                    }
                },
            }
        ],
        yAxis: [

            {
                type: 'value',
                min: 0,
                max: 4,
                interval: 1,
                axisLabel:{
                    formatter: function (value) {
                        var texts = [];
                        if(value == 0){
                            texts.push('重度污染');
                        }
                        else if (value == 1) {
                            texts.push('中度污染');
                        }
                        else if (value == 2) {
                            texts.push('轻度污染');
                        }
                        else if(value == 3){
                            texts.push('良好');
                        }
                        else{
                            texts.push('优');
                        }
                        return texts;
                    },
                    textStyle: {
                        color: '#71c9d7',
                        fontSize:10
                    }

                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#47809b',
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#304c71 ',
                    }
                },
            },

        ],
        series: [

            {
                name:'现状值',
                type:'bar',
                data:[2, 4, 2, 2, 3,2,3,4,1,3,1,2,3],
                // xAxisIndex: 1,
                // yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#75ddc6'
                        }, {
                            offset: 1,
                            color: '#6fcfdd'
                        }]),
                        barBorderRadius: [0,0,0,300],
                        borderWidth: 0,
                    }
                },
                barWidth: 4,
                barGap: 0.6
            },
            {
                name:'累计值',
                type:'bar',
                data:[4, 2, 1, 3, 4,4, 2, 1, 3, 4,4, 2, 2],
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5969f2'
                        }, {
                            offset: 1,
                            color: '#97a7fe'
                        }]),
                        barBorderRadius: [0,0,300,0],
                        borderWidth: 0,
                    }
                },
                barWidth: 4,
            },
        ]
    };

                        this.chart.setOption(option);
  }
  },
  mounted() {
    this.creatCharts();
  },


};
</script>

<style lang="less" scoped>
.clearfix:after{
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.clearfix{
  zoom:1;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
#container{
    width: 100%;
    height: 100%;
    position: relative;
    background-size: 100% 100%;
    color: #fff;
    background: url("../../assets/img/visualization/bg.png") no-repeat center #00002c;
    .header {
        width: 100%;
        height: 82px;
        position: absolute;
        left: 0;
        top: 0;
        text-align: center;
        font-size: 28px;
        background: url("../../assets/img/visualization/header.png") no-repeat center;
        background-size: cover;
        z-index: 99;
        .title {
            line-height: 1;
            margin: 25px 0 0 0;
        }
    }
section{
  .left-wrap{
    width: 456px;
    height: 976px;
    position: absolute;
    top: 98px;
    left: 30px;
    background: url("../../assets/img/visualization/frame.png")no-repeat center;

    .year-on-year{
      height: 206px;
      width: 100%;
      .dataScalogram{
        width: 100%;
        display: flex;
        height: 166px;
        .scalogramItem{
          flex: 1;
          .scalogramTitle{
            font-size: 12px;
            text-align: center;
            color:#00ebff ;
            margin-top: 12px;
          }
          .chart{
            height: 90px;
          }
          .summary{
            width: 110px;
            margin: 0 auto;
            font-size: 12px;
            span{
              width: 8px;height: 8px;display: inline-block;margin-right: 6px;
            }
            .online{
              background: url("../../assets/img/visualization/online.png")no-repeat;
            }
            .offline{
              background: url("../../assets/img/visualization/offline.png")no-repeat;
            }
            .upload{
              background: url("../../assets/img/visualization/upload.png")no-repeat;
            }
            .miss{
              background: url("../../assets/img/visualization/miss.png")no-repeat;
            }
            .effective{
              background: url("../../assets/img/visualization/effective.png")no-repeat;
            }
            .invalid{
              background: url("../../assets/img/visualization/invalid.png")no-repeat;
            }
            .blue{
              color: #00ebff;text-align: center;
            }
            .yellow{
              color: #ffff00;text-align: center;
            }
          }
        }
      }
    }
    .water-quality-radar{
      height: 200px;
      .radarWrap{
        width: 100%;
        height: 160px;
        .radarLegend{
          width: 130px;
          height: 110px;
          margin: 29px 0 0 21px;
          padding: 21px 0 0 12px;
          box-sizing: border-box;
          background-color: #00234b;
          border-radius: 10px;
          float: left;font-size: 12px;
          .radarLine1{
            width: 20px;height: 2px;display: inline-block;
            background: url("../../assets/img/visualization/radarLegend1.png") no-repeat;
            vertical-align: super;
          }
          .radarLine2{
            width: 20px;height: 2px;display: inline-block;
            background: url("../../assets/img/visualization/radarLegend2.png") no-repeat;
            vertical-align: super;
          }
          p{color: #00ebff;height: 10px;margin: 0 0 14px 24px;}
        }
        #wqRadarChart{
          width: 240px;
          height: 160px;
          float: right;
          margin-right: 30px;
        }

      }
    }
    .water-quality-trend{
      height: 220px;
      #wqTrendChart{
        width: 100%;
        height: 220px;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .water-quality-latest{
      height: 330px;
      #wqLatestChart{
        width: 100%;
        height: 300px;
        img {
          width: 415px;
          height: 286px;
          display: block;
          margin: 10px auto;
        }
      }
    }


  }
  .center-wrap{
    width: 907px;
    position: absolute;
    top: 98px;
    left: 506px;
    .map{
      width: 907px;
      height: 666px;
      border: dashed 1px rgba(0, 255, 255, 0.3);
    }
    .footerFrame{
      width:877px;
      height: 288px;
      margin: 21px auto 0;
      background: url("../../assets/img/visualization/footerFrame.png")no-repeat center;
      .thisWeekOfExceed{
        width: 360px;
        height: 280px;
        #thisWeekOfExceedChart{
          width: 100%;
          height: 280px;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      .thisWeekOfParams{
        width: 510px;
        height: 168px;
        #thisWeekOfParamsChart{
          width: 100%;
          height: 240px;
        }
      }
    }

  }
  .right-wrap{
    width: 457px;
    height: 976px;
    position: absolute;
    top: 98px;
    left: 1436px;
    background: url("../../assets/img/visualization/frame1.png")no-repeat center;
    .latest-five-weeks{
      position: relative;
      height: 164px;
      #latestFiveChart{
        width: 100%;
        height: 124px;
      }
      .dotted-line {
        position: absolute;
        top: 51px;
        left: 159px;
        width: 159px;
        height: 83px;
      }
    }
    .achievement-rate{
      height: 267px;
      #achievementRateChart{
        width: 100%;
        height: 227px;
        #amplitudeChart {
          width: 100%;
          height: 80px;
        }
        #comRateBar {
          width: 100%;
          height: 147px
        }
      }
    }
    .lowestSite{
      height: 160px;
      #lowestSiteChart{
        width: 100%;
        height: 120px;
        .alarmTitle{
          color: #00ebff;
          width: 414px;font-size: 12px;height: 22px;line-height: 22px;
          margin: 0 auto;
          background: url("../../assets/img/visualization/listTheadbg.png") no-repeat center;
          display: flex;
          div{
            flex: 1;text-align: center;
          }
          //div:nth-child(1){
          //  width: 138px;
          //  text-align: right;
          //  padding-right: 30px;
          //  box-sizing: border-box;
          //}
          //div:nth-child(2){
          //  width: 168px;text-align: center;
          //}
          //div:nth-child(3){
          //  width: 50px;text-align: center;
          //}
          //div:nth-child(4){
          //  width: 45px;text-align: center;
          //}
        }
      }
    }
    .realTimeAlarm{
      height: 170px;
      #realTimeAlarmChart{
        width: 100%;

        height: 120px;
        .alarmTitle{
          color: #00ebff;
          width: 414px;font-size: 12px;height: 22px;line-height: 22px;
          margin: 0 auto;
          background: url("../../assets/img/visualization/listTheadbg.png") no-repeat center;
          div{
            float: left;
          }
          div:nth-child(1){
            width: 138px;
            text-align: right;
            padding-right: 30px;
            box-sizing: border-box;
          }
          div:nth-child(2){
            width: 168px;text-align: center;
          }
          div:nth-child(3){
            width: 50px;text-align: center;
          }
          div:nth-child(4){
            width: 45px;text-align: center;
          }
        }
      }
    }
    .videoMonitor{
      height: 210px;font-size: 12px;
      #videoMonitorWrap{
        width: 100%;
        height: 210px;
        position: absolute;
        left: 0;
        top: 0;
        .videoSite{
          margin: 40px 0 0 20px;
        }
        .videoDisplay{
          width: 310px;
          height: 170px;
          background: #132d60;
          border: 5px solid #0c1f5c;
          margin: 10px 0 0 10px;
        }
      }
    }
  }
}
.title-text {
  .clearfix;
  > i {
    float: left;
    width: 16px;
    height: 13px;
    margin-top: 16px;
    margin-left: 10px;
    background:url("../../assets/img/visualization/titleIcon.png")no-repeat;
  }
  > span {
    float: left;
    margin-top: 13px;
    margin-left: 10px;
    color: #00ebff;
    font-size: 14px;
  }
}
.chart-wrap {
  position: relative;
  .box-title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 20px;
  }
  .wrap{
    position: absolute;
    top: 40px;left: 0;
  }
}
.legend-img {
  float: right;
  margin: 16px 24px 0 0;
}

//达标率最低的5个站点轮播
.swiper-container1{
  width: 414px;font-size: 12px;margin: 0 auto;
  height: 80px;overflow: hidden;
  .swiper-slide{
    width: 100%;
    height: 20px!important;line-height: 20px;display: flex;
    span{
      display: inline-block;
      text-align: center;
      flex: 1;
    }
  }
}
.swiper-container{
  width: 414px;font-size: 12px;margin: 0 auto;
  height: 100px;overflow: hidden;
  .swiper-slide{
    width: 100%;
    height: 24px;line-height: 24px;
    span{
      display: inline-block;
      text-align: center;
    }
  }
  .swiper-slide span:nth-child(1){
    width: 40px;background: #072f68;color: #00ebff;
  }
  .swiper-slide span:nth-child(2){
    width: 98px;
    text-align: right;
    padding-right: 38px;
    box-sizing: border-box;

  }
  .swiper-slide span:nth-child(3){
    width: 168px;text-align: center;

  }
  .swiper-slide span:nth-child(4){
    width: 50px;text-align: center;
  }
  .swiper-slide span:nth-child(5){
    width: 45px;text-align: center;
  }
}
}

</style>