import React from 'react';
import { NavLink } from 'react-router-dom';

export default class First extends React.Component {
    test() {
        console.log(this)
    }
    render() {
        return (
            <div className='nav'>
                <ul>
                    <li>
                        <NavLink to='/index'>首页</NavLink>
                    </li>
                    <li>
                        <NavLink to='/soft'>软件</NavLink>
                    </li>
                    <li>
                        <NavLink to='/game'>游戏</NavLink>
                    </li>
                    <li>
                        <NavLink to='/article'>文章</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}