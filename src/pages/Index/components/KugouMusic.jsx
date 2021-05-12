import React from 'react'
/*import '../assets/js/kugou-music.js'*/
import '../assets/css/kugouMusic.scss'
export default class KuwoMusic extends React.Component {
    render() {
        return (
            <div className='kuwo'>
                <div className="wrap">
                    <div className="play">
                        <p className="title">体面</p>
                        <p className="singer">于文文</p>
                        <p className="cover"></p>
                    </div>
                    <div className="lrc">
                        <div className="lyric">
                            <p style="color:#000;">体面</p>
                            <p style="color:#000;">于文文</p>
                        </div>
                        <p className=" more">查看完整歌词</p>
                    </div>
                    <div className="down">
                        <p className="down1">收藏歌曲</p>
                        <p className="down1">下载歌曲</p>
                    </div>
                    <div className="similar">
                        <div>
                            <h4>相似歌曲</h4>
                        </div>
                        <ul>
                            <li>
                                <div className="default"
                                    style="background-image: url(http://y.gtimg.cn/music/photo_new/T002R300x300M000001ChGIP09nZod.jpg);">

                                </div>
                                <div className="text">
                                    <p>告白</p>
                                    <p>吴雨霏</p>
                                </div>
                            </li>
                            <li>
                                <div className="default" style="background-image: url(http://y.gtimg.cn/music/photo_new/T002R300x300M000004OJu1Y1IrNZi.jpg);">
                                </div>
                                <div className="text">
                                    <p>坚强</p>
                                    <p>小沈阳</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <audio preload="auto">
                    <source src="documents/timian.mp3" type="audio/mpeg" />
                        您的浏览器不支持 audio 元素。
                </audio>
            </div>
        );
    }
}

