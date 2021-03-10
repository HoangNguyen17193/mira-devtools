import React, {Component} from 'react'
import {NavLink, withRouter} from "react-router-dom";
import {Layout, Menu} from 'antd';
import {HeartFilled} from '@ant-design/icons'
import 'antd/dist/antd.css';
import classes from './MainLayout.module.scss';
import {ROUTES} from '../../../constants';
import {FundOutlined, CloudServerOutlined, ToolOutlined, ControlOutlined} from '@ant-design/icons';

const {Header, Content, Footer, Sider} = Layout;

class MainLayout extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  logout = () => {
    this.props.logout();
  };
  render() {
    const pathName = this.props.location.pathname;
    const route = Object.values(ROUTES).find(route => pathName === route.path);
    const key = route ? route.key : ROUTES.home.key;
    return (
      <Layout className={classes.MainLayout}>
        <Sider width={230} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" mode="inline" selectedKeys={[key]}>
            <Menu.Item icon={<CloudServerOutlined/>} key={ROUTES.home.key}>
              <NavLink exact to={ROUTES.home.path}>
                JSON Parser
              </NavLink>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>} key="">
              <NavLink to="">
                JWT Parser
              </NavLink>
            </Menu.Item>
            <Menu.Item icon={<ToolOutlined/>} key="">
              <NavLink to="">
                UUID generator
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className={classes.Header}>
                  Mira Devtools
          </Header>
          <Content className={classes.ContentWrapper}>
            <div className={classes.Content}>
              {this.props.children}
            </div>
          </Content>
          <Footer className={classes.Footer}>Created by <b>Hoang Nguyen</b> with <HeartFilled
            className={classes.HeartIcon}/></Footer>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(MainLayout);