import React from 'react'
import '../assets/css/KuwoMusic.scss'
import { Slider } from 'antd';
export default class KugouMusic extends React.Component {
    state = {
        inputValue: 0
    }
    onChange = value => {
        this.setState({
            inputValue: value,
        });
    };

    render() {
        return (
            <div className='kuwo'>
                <div className="song">
                    <div className="name">
                        只要有你陪在我身边
                    </div>
                    <div className="artist">
                        杨小曼
                    </div>
                    <div className="wrap">
                        <div className="pic">
                            <div className="rotate">
                                <img src="https://img3.kuwo.cn/star/albumcover/500/76/60/1808967538.jpg" alt="" />
                            </div>
                            <div className="lyric">
                                <ul>
                                    <li>1</li>
                                    <li className='select'>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Progress_body">
                    <div className='start'>{this.state.inputValue}</div>
                    <div className='slider'>
                        <Slider
                            min={0}
                            max={170}
                            value={typeof this.state.inputValue === 'number' ? this.state.inputValue : 0}
                            onChange={this.onChange}

                        />

                    </div>
                    <div className='end'>
                        170
                    </div>
                </div>
                <div className='progressba'></div>
                <div className="download"></div>
                <div className='nav-title'></div>
                <ul className='SingerInfor'>

                </ul>
                <div className='nav-title-t'></div>
                <div className='nav-list'></div>
            </div>
        );
    }
}