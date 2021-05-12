import React from 'react'
import { Button } from 'antd';
export default class Card extends React.Component {
    render() {
        console.log('我是card', this)
        const arr = [];
        this.props.data.forEach((item, index) => {
            arr.push(
                <li key={index}>
                    <div onClick={() => {
                        return this.props.changeDrawerState(item.name, item.component)
                    }}>
                        <img src={item.icon} alt="" />
                    </div>
                    <div className='details'>
                        <div className="name">
                            <h2>
                                <div onClick={() => {
                                    return this.props.changeDrawerState(item.name, item.component)
                                }}>
                                    {item.name}
                                </div>
                            </h2>
                        </div>
                        <div className="des">
                            <h3>{item.des}</h3>
                        </div>
                        <div className="info">
                            <div>{item.size + '查看'}</div>
                            <div>{item.good + '收藏'}</div>
                        </div>
                    </div>
                    <div className='download'>
                        <Button type="primary" onClick={() => {
                            return this.props.changeDrawerState(item.name, item.component)
                        }}>进入</Button>
                    </div>
                </li>
            )
        })
        return (
            <ul className='list'>
                {
                    arr
                }
            </ul>
        )
    }
}
