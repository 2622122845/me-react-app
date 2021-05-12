import React from 'react'
export default class Baidu extends React.Component {
    componentDidMount() {
        console.log(this.refs.baidu)
        let { BMap } = window
        let map = new BMap.Map(this.refs.baidu);
        let point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);
    }
    render() {
        return (
            <div ref='baidu' id='baidu' style={{ backgroundColor: ' #f6f6f6', width: '100%', height: '100%' }}
            >
            </div>
        )
    }
}