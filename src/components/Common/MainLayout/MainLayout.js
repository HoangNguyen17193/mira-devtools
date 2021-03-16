import React, {Component} from 'react'
import {NavLink, withRouter} from "react-router-dom";
import {Layout, Menu} from 'antd';
import 'antd/dist/antd.css';
import classes from './MainLayout.module.scss';
import {ROUTES} from '../../../constants';
import {
  CodeOutlined,
  ClockCircleOutlined,
  HeartFilled,
  UnlockOutlined,
  UndoOutlined
} from '@ant-design/icons';
import './MainLayout.scss';
const {Header, Content, Footer, Sider} = Layout;

class MainLayout extends Component {
  state = {
    collapsed: true,
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
        <Header className={classes.Header}>
          Mira Devtools
        </Header>
        <Layout className="site-layout MainLayout">
          <Sider width={200} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <Menu theme="dark" mode="inline" selectedKeys={[key]}>
              <Menu.Item icon={<CodeOutlined/>} key={ROUTES.home.key}>
                <NavLink exact to={ROUTES.home.path}>
                  JSON Parser
                </NavLink>
              </Menu.Item>
              <Menu.Item icon={<UnlockOutlined/>} key="">
                <NavLink to="">
                  JWT Parser
                </NavLink>
              </Menu.Item>
              <Menu.Item icon={<UndoOutlined/>} key="">
                <NavLink to="">
                  UUID generator
                </NavLink>
              </Menu.Item>
              <Menu.Item icon={<ClockCircleOutlined/>} key="">
                <NavLink to="">
                  UnixTime Converter
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className={classes.ContentWrapper}>
            <div className={classes.Content}>
              {this.props.children}
            </div>
            <Footer className={classes.Footer}>Created by <b>Hoang Nguyen</b> with <HeartFilled
              className={classes.HeartIcon}/></Footer>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(MainLayout);