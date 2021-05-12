import Baidu from '../../components/Baidu'
import baiduIcon from '../images/baidu-map-icon.png'

import EchartsTest from '../../components/EchartsTest'
import echartsTest from '../images/echarts-test.png'

import EchartsLine from '../../components/EchartsLine'
import echartsLine from '../images/echarts-line.png'

import KuwoMusic from '../../components/KuwoMusic'

import KugouMusic from '../../components/KugouMusic'


export let appListData = [
    {
        name: '百度地图',
        des: '鹿晗代言，国内第一的导航地图',
        size: '00',
        good: '00',
        icon: baiduIcon,
        component: <Baidu />
    }, {
        name: 'Echarts',
        des: 'Charts是一款基于JavaScript的数据可视化图表库',
        size: '00',
        good: '00',
        icon: echartsTest,
        component: <EchartsTest />
    }, {
        name: '折线图堆叠',
        des: 'Charts是一款基于JavaScript的数据可视化图表库',
        size: '00',
        good: '00',
        icon: echartsLine,
        component: <EchartsLine />
    },{
        name: '酷我音乐',
        des: '好音质，用酷我',
        size: '00',
        good: '00',
        icon: 'http://static.yingyonghui.com/icon/128/6822152.png',
        component: <KuwoMusic />
    },{
        name: '酷狗音乐',
        des: '好音质，用酷我',
        size: '00',
        good: '00',
        icon: 'http://static.yingyonghui.com/icon/128/6822152.png',
        component: <KugouMusic />
    }
]
