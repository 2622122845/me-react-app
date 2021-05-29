import React from 'react'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import store from '../radux/store.js'

export default class Card extends React.Component {
    render() {
        console.log('我是card', this)
        const arr = [];
        this.props.data.forEach((item, index) => {
            //console.log(item.name)
            arr.push(
                <li key={index}>
                    <div onClick={() => {
                        store.dispatch({
                            type: 'changeDrawerState',
                            data: {
                                component: item.component,
                                name: item.name,
                                shouDrawer: true
                            }
                        })
                    }} className='img-box'>
                        <img src={item.icon} alt="" />
                    </div>
                    <div className='details'>
                        <div className="name">
                            <h2>
                                <div onClick={() => {
                                    store.dispatch({
                                        type: 'changeDrawerState',
                                        data: {
                                            component: item.component,
                                            name: item.name,
                                            shouDrawer: true
                                        }
                                    })
                                }}>
                                    {item.name}
                                </div>
                            </h2>
                        </div>
                        <div className="des">
                            <h3>{item.des}</h3>
                        </div>
                        <div className="info">
                            <div>
                                <DownloadOutlined />&nbsp;
                                <span>{item.size + '查看'}</span>
                            </div>
                            <div>
                                <DownloadOutlined />&nbsp;
                                <span>{item.good + '收藏'}</span>
                            </div>
                        </div>
                    </div>
                    <div className='download'>
                        <Button type="primary" onClick={() => {
                            store.dispatch({
                                type: 'changeDrawerState',
                                data: {
                                    component: item.component,
                                    name:item.name,
                                    shouDrawer: true
                                }
                            })
                        }}>进入</Button>
                    </div>
                </li>
            )
        })
        return (
            <ul id='card'>
                {
                    arr
                }
            </ul>
        )
    }
}
