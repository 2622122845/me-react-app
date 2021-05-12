import React from 'react'
export default class NavO extends React.Component {
    render() {
        console.log('我是NavO', this)
        console.log('我是NavOtest',typeof this.props)
        let arr = [];
        this.props.data.forEach((item, index) => {
            arr.push(
                <li key={index}>
                    <div onClick={() => {
                        console.log(item.describe, item.component,123)
                        return this.props.changeDrawerState(item.describe, item.component)
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