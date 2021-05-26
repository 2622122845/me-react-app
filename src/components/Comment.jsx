import React from 'react'
import { Menu, Dropdown, Button, Input, message } from 'antd';
const { TextArea } = Input;
export default class Comment extends React.Component {
    state = {
        //http: 'http://cfs024zc14.talds.top/new/server.php',
        http: 'http://www.phpserver.com/new/server.php',
        alertShow: false,
        newData: false,
        commentData: []
    }

    componentDidMount() {
        this.ajax()
    }
    addState(obj) {
        let data = obj
        data.forEach((item, index) => {
            item.data.id = `'${index}'`
            item.state = {
                isBordered: false,
                isDisabled: true
            }
        })
        return data;
    }
    myAlert() {
        if (this.state.alertShow) {
            return <div className="alert" >
                <div className="box">
                    <div className="alert-header">
                        <p>数据添加</p>
                    </div>
                    <div className="body" >
                        <div>
                            <Input placeholder="作者/出自哪里" allowClear id='alert-input' />
                            <TextArea
                                placeholder="内容"
                                autoSize={{ minRows: 3, maxRows: 10 }}
                                id='alert-TextArea'
                            />
                        </div>
                        <div className='btn'>
                            <Button type="primary" onClick={() => {
                                let input = document.querySelector('#alert-input').value
                                let textArea = document.querySelector('#alert-TextArea').value
                                let newData = JSON.parse(JSON.stringify(this.state.commentData))
                                let date = new Date()
                                console.log(newData)
                                newData.push({
                                    data: {
                                        source: input,
                                        content: textArea,
                                        date: `${date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()}`,
                                    }
                                })
                                this.setState({ commentData: this.addState(newData) })
                            }} >
                                确定
            </Button>
                            <Button type="primary" onClick={() => {
                                this.setState({ alertShow: false })
                            }}>
                                取消
            </Button>
                        </div>
                    </div>
                </div>
            </div>
        }
    }
    menu() {
        return (
            <Menu id='antd-menu'>
                <Menu.Item>
                    <Button onClick={() => {
                        console.log(this)
                        this.setState({ alertShow: true })
                        //this.state.commentData[this.props.type].push()
                    }}>
                        新增数据
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={() => {
                        let newData = this.state.commentData
                        newData.forEach((item) => {
                            delete item.state;
                        })

                        let ajax = new XMLHttpRequest()
                        ajax.open('get',
                            `${this.state.http}?type=create&data=${JSON.stringify(newData)}&detail=${this.props.type}`);
                        ajax.send()
                        ajax.onreadystatechange = () => {
                            if (ajax.status == 200 && ajax.readyState == 4) {
                                message.success(ajax.responseText);
                            }
                        }
                    }}>
                        上传内容
            </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={() => {
                        window.location.href = 'http://wpa.qq.com/msgrd?v=3&uin=2622122845&site=qq&menu=yes'
                    }}>
                        联系作者
                    </Button>
                </Menu.Item>
            </Menu>
        )
    }
    ajax() {
        let t = this;
        let http = new XMLHttpRequest()
        http.open('get', `${this.state.http}?type=read&newData=${this.state.newData}&detail=${this.props.type}`);
        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                //解析数据
                t.setState({ commentData: t.addState(JSON.parse(http.responseText)) })
                message.success('获取数据成功');
            }
        }
        http.send()
    }

    local() {
        return this.renderComponent(this.state.commentData)
    }
    renderComponent(obj) {
        return obj.map((item, index) => {
            //console.log();
            return <article key={item.data.id}>
                <div className="body">
                    <div>
                        <div className='content'>
                            <TextArea
                                defaultValue={item.data.content}
                                placeholder="内容"
                                autoSize
                                bordered={item.state.isBordered}
                                disabled={item.state.isDisabled}
                            />
                        </div>
                        <div className="source">
                            <TextArea
                                defaultValue={item.data.source}
                                placeholder="作者/出自哪里/提供人"
                                autoSize
                                bordered={item.state.isBordered}
                                disabled={item.state.isDisabled}
                            />
                        </div>
                        <div className='detail'>
                            <span className='date'>
                                时间：{item.data.date}
                            </span>
                            <span className='submitter'>
                                上传者：站主
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className='update'>
                        <Button type="text" onClick={
                            () => {
                                let newTextArea = this.state.commentData
                                newTextArea[index].state.isDisabled = false;
                                newTextArea[index].state.isBordered = true;
                                this.setState({ commentData: newTextArea })
                            }
                        }>修改</Button>
                    </div>
                    <div className='save'>
                        <Button type="text" onClick={() => {
                            let newTextArea = this.state.commentData
                            newTextArea[index].state.isDisabled = true;
                            newTextArea[index].state.isBordered = false;
                            let comment = document.querySelector('.comment')
                            let source = comment.querySelectorAll('article')[index].querySelector('.source textarea').value
                            let content = comment.querySelectorAll('article')[index].querySelector('.content textarea').value
                            newTextArea[index].data.content = content;
                            newTextArea[index].data.source = source;
                            this.setState({ commentData: newTextArea })
                        }}>保存</Button>
                    </div>
                    <div className='delete'>
                        <Button type="text" danger onClick={() => {
                            let newTextArea = this.state.commentData
                            newTextArea.splice(index, 1)
                            this.setState({ commentData: newTextArea })
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
                    <Dropdown overlay={this.menu.bind(this)} placement="topCenter" arrow trigger={['click', 'hover']} >
                        <Button type="primary" shape="circle">
                            功能
                        </Button>
                    </Dropdown>
                </div>
                {
                    this.myAlert()
                }
            </div>
        );
    }
}