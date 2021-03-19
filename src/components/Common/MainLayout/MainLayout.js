import React, {Component} from 'react'
import {isEmpty} from 'lodash';
import {NavLink, withRouter} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import 'antd/dist/antd.css';
import classes from './MainLayout.module.scss';
import {ROUTES} from '../../../utils/constants';
import {
  CodeOutlined,
  ClockCircleOutlined,
  HeartFilled,
  UnlockOutlined,
  RedoOutlined
} from '@ant-design/icons';
import './MainLayout.scss';

const {Header, Content, Footer, Sider} = Layout;

class MainLayout extends Component {
  state = {
    collapsed: true,
  };

  onCollapse = collapsed => {
    this.setState({collapsed});
  };
  logout = () => {
    this.props.logout();
  };

  render() {
    const pathName = this.props.location.pathname;
    const activeRoute = Object.values(ROUTES).find(route => pathName === route.path);
    const route = !isEmpty(activeRoute) ? activeRoute : ROUTES.Home;
    const key = route.key;
    return (
      <Layout className={classes.MainLayout}>
        <Header className={classes.Header}>
          Mira Devtools
        </Header>
        <Layout className='site-layout MainLayout'>
          <Sider width={200} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <Menu theme='dark' mode='inline' selectedKeys={[key]}>
              <Menu.Item icon={<CodeOutlined/>} key={ROUTES.Home.key}>
                <NavLink exact to={ROUTES.Home.path}>
                  JSON Parser
                </NavLink>
              </Menu.Item>
              <Menu.Item icon={<UnlockOutlined/>} key={ROUTES.JWTParser.key}>
                <NavLink to={ROUTES.JWTParser.path}>
                  JWT Parser
                </NavLink>
              </Menu.Item>
              <Menu.Item icon={<RedoOutlined/>} key={ROUTES.UUIDGenerator.key}>
                <NavLink to={ROUTES.UUIDGenerator.path}>
                  UUID generator
                </NavLink>
              </Menu.Item>
              <Menu.Item icon={<ClockCircleOutlined/>} key={ROUTES.UnixTimeConverter.key}>
                <NavLink to={ROUTES.UnixTimeConverter.path}>
                  UnixTime Converter
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className={classes.ContentWrapper}>
            <div className={classes.Actions}>
              <div className={classes.Title}>
                {route.name}
              </div>
            </div>
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