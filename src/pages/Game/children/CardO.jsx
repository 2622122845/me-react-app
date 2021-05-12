import React from 'react'
import img from '../../../assets/images/round.png'
import chakan from '../../../assets/images/chakan.png'
import shoucang from '../../../assets/images/shoucang.png'
let arr = [];
for (let start = 1, end = 30; start < end; start++) {
    arr.push(
        <li className='application_content' key={start}>
            <div className="application_img_set">
                <a href="a">
                    <img src={img} alt="" className='small' />
                </a>
                <a href="a">
                    <img src={img} alt="" className='middle' />
                </a>
                <a href="a">
                    <img src={img} alt="" className='bigger' />
                </a>
            </div>
            <a href="xxx">
                <div className="application_app">
                    <div className='title'><span>解谜游戏佳作合集</span></div>
                    <div className='user'><span>蠢希baka</span></div>
                    <div className='oth'>
                        <span>
                            <img src={chakan} alt="" />
                光看人数
                </span>
                        <span>
                            <img src={shoucang} alt="" />
                12
            </span>
                        <span>20-20-20</span>
                    </div>
                </div>
            </a>
        </li>

    )
}
export default class Card extends React.Component {
    render() {
        return (
            <div className='application'>
                <div className='application_top'>
                    <span>汇汇精挑细选的应用集</span>
                    <span className='tn'>
                        <a href="www">推荐</a>
                    </span>
                </div>
                <ul>
                    {arr}
                </ul>
            </div>
        )
    }
}