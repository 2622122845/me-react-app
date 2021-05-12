import React from 'react';
import banner from '../../assets/images/banner.jpg'

let arr = [];
for (let start = 1, end = 30; start < end; start++) {
    arr.push(
        <li className='article' key={start}>
            <div className="banner">
                <div className="banner_box">
                    <img src={banner} alt="" />
                </div>
            </div>
            <div className="stack">
                <div className="content">
                    <span className='title'>
                        道聚城，集优惠道具，聚大神女神
                        </span>
                </div>
                <div className="data">
                    <span className="txt">
                        06月30日 10:01
                        </span>
                </div>
                <div className="quotation">
                    游戏迷们，总有那么一款游戏让你废寝忘食。而在游戏决斗中，你肯定需要帮助你提升战斗力的道具。而道聚城就是一款集合了众多游戏道具的聚焦地，有了它，轻松拿下游戏不是问题。
                     </div>
            </div>
        </li>
    )
}
export default class Article extends React.Component {
    render() {
        return (
            <ul>
                {arr}
            </ul>

        )
    }
}