import React, {Component} from 'react'
import { NavLink, withRouter } from "react-router-dom";
import {Layout, Menu} from 'antd';
import {HeartFilled} from '@ant-design/icons'
import 'antd/dist/antd.css';
import classes from './MainLayout.module.scss';
import { ROUTES } from '../../../constants';

const {Header, Content, Footer} = Layout;

class MainLayout extends Component {
  render() {
    const pathName = this.props.location.pathname;
    const route = Object.values(ROUTES).find(route => pathName === route.path);
    const key = route ? route.key : ROUTES.home.key;
    return (
      <Layout className={classes.MainLayout}>
        <Header className={classes.Header}>
          <Menu className={classes.HeaderMenu} theme="dark" mode="horizontal" selectedKeys={[key]}>
            <Menu.Item key={ROUTES.home.key}>
              <NavLink exact to="/">
                Test
              </NavLink>
            </Menu.Item>

          </Menu>
        </Header>
        <Content className={classes.ContentWrapper}>
          <div className={classes.Content}>
            {this.props.children}
          </div>
        </Content>
        <Footer className={classes.Footer}>Created by <b>Hoang Nguyen</b> with <HeartFilled className={classes.HeartIcon}/></Footer>
      </Layout>
    )
  }
}

export default withRouter(MainLayout);