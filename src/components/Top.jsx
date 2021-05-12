import React from 'react'
import { Input } from 'antd';

export default class Top extends React.Component {
    onSearch = value => console.log(value);
    render() {
        const { Search } = Input;
        return (
            <div className='top'>
                <a href="www.baidu.com" className='logo'>无可</a>
                <div className='searchBox'>
                    <Search placeholder="input search text"
                        onSearch={this.onSearch}
                        enterButton />
                </div>
            </div>
        )
    }
}