import React from 'react'
import store from '../radux/store.js'

export default class NavO extends React.Component {
    render() {
        console.log('我是NavO', this)
        let arr = [];
        this.props.data.forEach((item, index) => {
            arr.push(
                <li key={index}>
                    <div onClick={() => {
                         store.dispatch({
                            type: 'changeDrawerState',
                            data: {
                                component:item.component,
                                name:item.describe,
                                shouDrawer:true
                            }
                        })
                    }}>
                        <span>
                            <img src={item.img} alt="" />
                        </span>
                        {item.describe}
                    </div>
                </li>
            )
        })
        return (
            <ul className='nav_o'>
                {
                    arr
                }
            </ul>
        )
    }
} 