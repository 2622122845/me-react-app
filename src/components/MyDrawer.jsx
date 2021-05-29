import React from 'react'
import { Drawer } from 'antd';
import store from '../radux/store.js'

export default class MyDrawer extends React.Component {
    render() {
        console.log('我是MyDrawer', this)
        return (
            <div className="drawer">
                <Drawer
                    //可用于设置 Drawer 内容部分的样式
                    bodyStyle={{ padding: '0', width: '100%', height: '100%' }}
                    //标题
                    title={this.props.name}
                    //是否显示右上角的关闭按钮
                    closable={true}
                    //	点击遮罩层或右上角叉或取消按钮的回调
                    onClose={() => {
                        store.dispatch({ type: 'close' })
                    }
                    }
                    //抽屉的方向
                    placement="right"
                    //Drawer 是否可见
                    visible={this.props.shouDrawer}
                    //指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom
                    getContainer={false}
                    //可用于设置 Drawer 最外层容器的样式，和 drawerStyle 的区别是作用节点包括 mask
                    style={{ position: 'absolute' }}
                    width='100%'
                >
                    {
                        this.props.component
                    }
                </Drawer>
            </div >
        );
    }
}
