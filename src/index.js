//组件
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './assets/js/reportWebVitals';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
//antd依赖 
import 'antd/dist/antd.css';
//自定义组件
import './assets/css/sass.scss';
import Top from './components/Top';
import Nav from './components/Nav.jsx';
import Scroll from './components/Scroll';
import MyDrawer from './components/MyDrawer';
import { routers } from './route'
class Container extends React.Component {
  state = {
    //是否显示
    shouDrawer: false,
    //显示的模板
    component:null,
    //模板名字
    name:''
  }
//更新模板
  changeDrawerState(name,component) {
    this.setState(
      {
        shouDrawer: !this.state.shouDrawer,
        component:component,
        name:name
      }
    )
    return this
  }
  render() {
    console.log(this)
    return (
      <div>
        <div className="header">
          <Top />
          <Nav />
        </div>
        <div className="min">
          {/* 路由 */}
          <Switch>
            <Redirect from='/' to='index' exact />
            {
              routers.map((item, index) => {
                return (
                  <Route key={index}
                  path={item.path}
                  //component={item.component}
                  exact={item.exact}
                  render={(props) => {
                    return <item.component routers={item.children}
                     changeDrawerState={this.changeDrawerState.bind(this)}
                      />
                  }}
                />
                )
              })
            }
          </Switch>
          {/* 抽屉 */}
          <MyDrawer 
          shouDrawer={this.state.shouDrawer} 
          component={this.state.component}
           changeDrawerState={this.changeDrawerState.bind(this)}
           name={this.state.name}
           />
           {/* 顶部 */}
          <Scroll />
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <Router>
    <Container />
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
