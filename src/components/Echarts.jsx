import React from 'react'
import * as echarts from 'echarts';

export default class EchartsTest extends React.Component {
    componentDidMount() {
        var myChart = echarts.init(this.refs.baidu);
        // 绘制图表
        myChart.setOption(this.props.data)
    }
    render() {
        return (
            <div ref='baidu' id='baidu' style={{ backgroundColor: ' #f6f6f6', width: '100%', height: '100%' }}
            >
            </div>
        )
    }
}