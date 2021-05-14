import React from 'react'
import { Menu, Dropdown, Button, Input} from 'antd';
import commentData from '../assets/data/comment.json'
const { TextArea } = Input;
export default class Comment extends React.Component {
    state = {
        commentData: `{
            "yxlmCommentData": [{
                "data": {
                    "auther": "wary",
                    "content": "wary",
                    "date": "2021-4-11",
                    "id": 0
                },
                "state": {
                    "isBordered": false,
                    "isDisabled": true
                }
            }],
            "wzryCommentData": [{
                "data": {
                    "auther": "0",
                    "content": "wary",
                    "date": "2021-4-11",
                    "id": 0
                },
                "state": {
                    "isBordered": false,
                    "isDisabled": true
                }
        
            }]
        }`

    }

    componentDidMount() {
        /* 获取本地数据 */
        // this.ajax(this.props.type)
        /* 获取网路数据 */
        setTimeout(() => {
            this.setState({
                commentData: JSON.stringify(commentData),
            })
        });
    }
    menu() {
        return (
            <Menu>
                <Menu.Item>
                    <Button>
                        新增
            </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button>
                        上传
            </Button>
                </Menu.Item>
            </Menu>
        )
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

    local() {
        return this.renderComponent(JSON.parse(this.state.commentData)[this.props.type])
    }
    renderComponent(obj) {
        console.log(obj,JSON.parse(this.state.commentData))
        return obj.map((item, index) => {
            return <article key={item.data.auther}>
                <div className="body">
                    <div>
                        <div className='content'>
                            <TextArea
                                defaultValue={item.data.content}
                                placeholder="Autosize height with minimum and maximum number of lines"
                                autoSize
                                bordered={item.state.isBordered}
                                disabled={item.state.isDisabled}
                            />
                        </div>
                        <div className="source">
                            <TextArea
                                defaultValue={item.data.auther}
                                placeholder="Autosize height with minimum and maximum number of lines"
                                autoSize
                                bordered={item.state.isBordered}
                                disabled={item.state.isDisabled}
                            />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className='update'>
                        <Button type="text" onClick={
                            () => {
                                let newTextArea = JSON.parse(this.state.commentData)
                                newTextArea[this.props.type][index].state.isDisabled = false;
                                newTextArea[this.props.type][index].state.isBordered = true;
                                this.setState({ commentData: JSON.stringify(newTextArea) })
                            }
                        }>修改</Button>
                    </div>
                    <div className='save'>
                        <Button type="text"  onClick={() => {
                            let newTextArea = JSON.parse(this.state.commentData)
                            newTextArea[this.props.type][index].state.isDisabled = true;
                            newTextArea[this.props.type][index].state.isBordered = false;
                            this.setState({ commentData: JSON.stringify(newTextArea) })
                        }}>保存</Button>
                    </div>
                    <div className='delete'>
                        <Button type="text" danger onClick={() => {
                            let newTextArea = JSON.parse(this.state.commentData)
                            console.log(newTextArea[this.props.type].splice(index, 1))
                            this.setState({ commentData: JSON.stringify(newTextArea) })
                        }}>删除</Button>
                    </div>
                </div>
            </article >
        })
    }
    render() {
        console.log('我是Comment', this)
        return (
            <div className='comment'>
                {
                    this.local()
                }
                <div className="uploading">
                    <Dropdown overlay={this.menu} placement="topCenter" arrow >
                        <Button type="primary" shape="circle">
                            功能
                        </Button>
                    </Dropdown>
                </div>
            </div>
        );
    }
}