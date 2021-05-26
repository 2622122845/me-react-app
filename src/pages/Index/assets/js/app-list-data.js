import Baidu from '../../components/Baidu'
import baiduIcon from '../images/baidu-map-icon.png'

import EchartsTest from '../../components/EchartsTest'
import echartsTest from '../images/echarts-test.png'

import EchartsLine from '../../components/EchartsLine'
import echartsLine from '../images/echarts-line.png'

import KuwoMusic from '../../components/KuwoMusic'

import Comment from '../../../../components/Comment'

import KugouMusic from '../../components/KugouMusic'


export let appListData = [
    {
        name: '佛系句子',
        des: '在快节奏的都市生活中，追求平和、淡然的生活方式的青年人',
        size: '00',
        good: '00',
        icon: 'https://p.ssl.qhimg.com/dmsmty/74_74_100/t012f1fd25516547afd.webp',
        component: <Comment type='foXi' />
    }, {
        name: '高冷句子',
        des: '形容自我感觉良好又对他人嗤之以鼻的姿态',
        size: '00',
        good: '00',
        icon: 'https://p.ssl.qhimg.com/dmsmty/74_74_100/t0189997ac2445c4ede.png',
        component: <Comment type='gaoLeng' />
    }, {
        name: '网抑云-感情-舔狗',
        des: '网抑云，是2020年爆发的一种“丧文化”梗。是指网易云音乐，网易云音乐的评论中总是充满了伤感、丧甚至负能量的内容，人称“人均抑郁症”。',
        size: '00',
        good: '00',
        icon: 'https://p1.ssl.qhimg.com/dmsmfl/120_119_/t019d2b9f04108ac6d1.webp?size=1920x1280',
        component: <Comment type='wangYiYun' />
    }, {
        name: '励志-阳光',
        des: 'lì zhì ，意思是奋志，集中心思致力于某种事业。',
        size: '00',
        good: '00',
        icon: 'https://p.ssl.qhimg.com/dmfd/120_120_80/t016ef77b3f06820d12.webp',
        component: <Comment type='liZhi' />
    }, {
        name: '时间规划',
        des: '合理的规划时间会让你事半功倍',
        size: '00',
        good: '00',
        icon: 'https://p.ssl.qhimg.com/dmsmty/74_74_100/t01ac38341d52038863.webp',
        component: <Comment type='shiJianGuiHuaJu' />
    }, {
        name: '英文句子',
        des: '英文散文、英文美文、英文诗歌、英文演讲、英文娱乐、英文故事、英文科普、英文行业、英文技巧',
        size: '00',
        good: '00',
        icon: 'https://p.ssl.qhimg.com/dmsmty/74_74_100/t01f5f762be24a41560.webp',
        component: <Comment type='English' />
    }, {
        name: '美文',
        des: '经典美文_美文欣赏_美文摘抄_美文网',
        size: '00',
        good: '00',
        icon: 'https://p.ssl.qhimg.com/dmsmty/74_74_100/t01a9ca9f95f10799ac.png',
        component: <Comment type='meiWen' />
    }, {
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
    }, {
        name: '酷我音乐',
        des: '好音质，用酷我',
        size: '00',
        good: '00',
        icon: 'http://static.yingyonghui.com/icon/128/6822152.png',
        component: <KuwoMusic />
    },/*{
        name: '酷狗音乐',
        des: '好音质，用酷我',
        size: '00',
        good: '00',
        icon: 'http://static.yingyonghui.com/icon/128/6822152.png',
        component: <KugouMusic />
    }*/
]
