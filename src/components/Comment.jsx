import React from 'react'
import { Menu, Dropdown, Button, Input, message, Modal } from 'antd';
import store from '../radux/store.js'
const { TextArea } = Input;

export default class Comment extends React.Component {
    state = {
        //http: 'http://cfs024zc14.talds.top/new/server.php',
        http: 'http://www.phpserver.com/new/server.php',
        alertShow: false,
        displayData: [],
        sourceData: null,
        isShowConfirm: false
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
                isDisabled: true,
                isShow: Boolean(item.data.source)
            }
        })
        data.reverse();
        return data;
    }
    myAlert() {
        if (this.state.alertShow) {
            return <div className="alert" >
                <div className="box">
                    <div className="head">
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
                                let newData = this.state.displayData
                                let date = new Date()
                                newData.push({
                                    data: {
                                        source: input,
                                        content: textArea,
                                        date: `${date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()}`,
                                    }
                                })
                                this.setState({
                                    displayData: this.addState(newData),
                                })
                                message.success('成功添加一条数据')
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
    showConfirm() {
        if (this.state.isShowConfirm) {
            return <div className="confirm" >
                <div className="box">
                    <div className="head">
                        <p>请选择操作</p>
                    </div>
                    <div className="body" >
                        <div className='btn'>
                            <Button type="primary" onClick={
                                () => {

                                    this.setState({
                                        isShowConfirm: false,
                                        displayData: this.addState(this.state.sourceData.old.daily)
                                    })
                                    message.success('以为你展示内容');
                                }
                            } >
                                查看
                            </Button>
                            <Button type="primary" onClick={() => {
                                let newData = this.state.sourceData
                                newData.old.daily = this.state.displayData;
                                this.setState({
                                    isShowConfirm: false,
                                    sourceData: newData
                                })
                                message.success('修改成功');
                            }}>
                                修改

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
                    }}>
                        新增数据
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={() => {
                        let newData = this.state.sourceData
                        switch (this.props.type) {
                            case 'shiJianGuiHuaJu':
                                newData.new = this.state.displayData
                                newData.new.forEach((item) => {
                                    delete item.state;
                                })
                                break;
                            default:
                                newData.forEach((item) => {
                                    delete item.state;
                                })
                                break;
                        }
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
                <Menu.Item>
                    {
                        (() => {
                            if (this.props.type == 'shiJianGuiHuaJu') {
                                return (<Button onClick={
                                    () => {
                                        this.setState({ isShowConfirm: true })
                                    }
                                }>
                                    时间规划
                                </Button>)
                            }
                        })()
                    }

                </Menu.Item>
            </Menu>
        )
    }
    ajax() {
        let t = this;
        let http = new XMLHttpRequest()
        http.open('get', `${this.state.http}?type=read&detail=${this.props.type}`);
        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                //解析数据
                let txt = JSON.parse(http.responseText)
                let date = new Date()
                switch (t.props.type) {
                    case 'shiJianGuiHuaJu':
                        if (txt.old.date !== date.getDate()) {
                            txt.old.date = date.getDate()
                            let newDaily = txt.old.daily.map(function (item) {
                                item.data.date = `${date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()}`
                                return item;
                            })
                            txt.new.push(...newDaily)
                        }
                        t.addState(txt.new);
                        t.setState({
                            sourceData: JSON.parse(JSON.stringify(txt)),
                            displayData: JSON.parse(JSON.stringify(t.addState(txt.new)))
                        })
                        break;
                    default:
                        t.setState({
                            sourceData: JSON.parse(JSON.stringify(txt)),
                            displayData: JSON.parse(JSON.stringify(t.addState(txt)))
                        })
                        break;
                }
                message.success('获取数据成功');
            }
        }
        http.send()
    }

    local() {

        return this.renderComponent(this.state.displayData);
    }
    renderComponent(obj) {
        return obj.map((item, index) => {
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
                        {
                            (function () {
                                if (item.state.isShow) {
                                    return <div className="source">
                                        <TextArea
                                            defaultValue={item.data.source}
                                            placeholder="作者/出自哪里/提供人"
                                            autoSize
                                            bordered={item.state.isBordered}
                                            disabled={item.state.isDisabled}
                                        />
                                    </div>
                                }
                            })()
                        }
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
                                let newTextArea = this.state.displayData
                                newTextArea[index].state.isDisabled = false;
                                newTextArea[index].state.isBordered = true;
                                newTextArea[index].state.isShow = true;
                                this.setState({
                                    displayData: newTextArea
                                })
                            }}>修改</Button>
                    </div>
                    <div className='save'>
                        <Button type="text" onClick={() => {
                            let newTextArea = this.state.displayData
                            if (newTextArea[index].state.isDisabled !== true && newTextArea[index].state.isBordered !== false) {
                                newTextArea[index].state.isDisabled = true;
                                newTextArea[index].state.isBordered = false;
                                let comment = document.querySelector('.comment')
                                let source = comment.querySelectorAll('article')[index].querySelector('.source textarea').value
                                let content = comment.querySelectorAll('article')[index].querySelector('.content textarea').value
                                newTextArea[index].state.isShow = Boolean(source)
                                newTextArea[index].data.content = content;
                                newTextArea[index].data.source = source;
                                this.setState({
                                    displayData: newTextArea,
                                })
                            }
                        }}>保存</Button>
                    </div>
                    <div className='delete'>
                        <Button type="text" danger onClick={() => {
                            let newTextArea = this.state.displayData;
                            newTextArea.splice(index, 1)
                            this.setState({
                                displayData: newTextArea,
                            })
                        }}>删除</Button>
                    </div>
                </div>
            </article >
        })
    }
    render() {
        console.log('我是Comment', this)
    console.log(store.getState({ type: 'c', data: '1' }));
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
                {
                    this.showConfirm()
                }
            </div>
        );
    }
}