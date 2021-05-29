import React from 'react'
import '../assets/css/KuwoMusic.scss'
import { Slider, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Card from '../../../components/Card'
import { appListData } from '../assets/js/kuwo/list-data.js'

export default class KugouMusic extends React.Component {
    state = {
        inputValue: 0
    }
    onChange = value => {
        this.setState({
            inputValue: value,
            size: 'large'
        });
    };

    render() {
        console.log('我是酷我音乐：',this)
        return (
            <div id='kuwo'>
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
                <div className="download">
                    <Button type="default" shape="round" icon={<DownloadOutlined />} size={this.state.size}>
                        Download
                    </Button>
                </div>
                { /*  <div className='nav-title'>
                    歌手与专辑
                </div>
                <ul className='SingerInfor'> </ul>*/
                }
                <div className='nav-title'>
                    精彩推荐
                </div>
                <div className='nav-list'>
                <Card {...this.props} data={appListData} />
                </div>
            </div>
        );
    }
}