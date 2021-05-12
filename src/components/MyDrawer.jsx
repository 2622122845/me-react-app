import React from 'react'
import { Drawer } from 'antd';

export default class MyDrawer extends React.Component {
    render() {
        console.log('我是MyDrawer',  this)
        return (
            <div className="drawer">
                <Drawer
                    bodyStyle={{ padding: '0' ,width:'100%',height:'100%'}}
                    title={this.props.name}
                    closable={true}
                    onClose={() => {
                        return this.props.changeDrawerState('', null)
                    }}
                    placement="right"
                    visible={this.props.shouDrawer}
                    getContainer={false}
                    style={{ position: 'absolute' }}
                    width='100%'
                >
                    {
                        this.props.component
                    }
                </Drawer>
            </div>
        );
    }
}
