import React from 'react'
import * as echarts from 'echarts';

export default class EchartsTest extends React.Component {
    componentDidMount() {
        var myChart = echarts.init(this.refs.baidu);
        // 绘制图表
        myChart.setOption({
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        })
    }
    render() {
        return (
            <div ref='baidu' id='baidu' style={{ backgroundColor: ' #f6f6f6', width: '100%', height: '100%' }}
            >
            </div>
        )
    }
}