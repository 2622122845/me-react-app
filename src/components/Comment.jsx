import React from 'react'
import { wzryCommentData } from '../assets/js/wzry-comment-data.js'
import { yxlmCommentData } from '../assets/js/yxlm-comment-data.js'
//import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
export default class Comment extends React.Component {
    state = {
        component: null
    }
    //componentDidMount render后 适合渲染前异步请求
    componentDidMount() {
        /* 获取本地数据 */
        this.ajax(this.props.type)
        /* 获取网路数据 */
         /*setTimeout(() => {
             this.local()
         }, 200);
        /* */
    }
    ajax(string) {
        let t = this;
        let http = new XMLHttpRequest()
        http.open('get', `http://host105094139.s746.pppf.com.cn/my-react-app/js/${string}.txt`)
        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                //console.log(typeof http.responseText,JSON.parse(http.responseText), t)
                t.setState({ component: t.renderComponent(JSON.parse(http.responseText)) })
            }
        }
        http.send()
    }
    /*local() {
        switch (this.props.type) {
            case 'wzry':
                this.setState({ component: this.renderComponent(wzryCommentData) })
                break;
            case 'yxlm':
                this.setState({ component: this.renderComponent(yxlmCommentData) })
                break;
            case 'polite':
                this.setState({ component: this.renderComponent(politeCommentData) })
                break;
            case 'essays':
                this.setState({ component: this.renderComponent(essaysCommentData) })
                break;
        }
    }*/
    renderComponent(obj) {
        console.log(obj)
        return obj.map((item, index) => {
            return <article key={index}>
                <div className="body">
                    <div>
                        <div className='content'>
                            <span>{item.content}</span>
                        </div>
                        <div className="source">
                            <span>----  </span>
                            <span className='auther'>{item.auther}</span>
                        </div>
                    </div>
                </div>
                {/* <div className="footer">
            <div>
                <i></i>
            </div>
        </div> */}
            </article>
        })
    }
    render() {
        console.log(this.state.component)
        console.log('我是Comment', this)
        return (
            <div className='comment'>
                {
                    this.state.component
                }
            </div>
        );
    }
}