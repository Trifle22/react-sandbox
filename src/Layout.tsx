import React from 'react';
import { Layout as AntLayout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { DeleteOutlined, HomeOutlined } from '@ant-design/icons';
import { Avatar } from './Avatar';
import { AppRouter } from './router/AppRouter';

const { Header, Content, Sider } = AntLayout;

export function Layout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AntLayout style={{ height: '100vh' }}>
      <Header className="header">
        <div className="logo">
          <Avatar />
        </div>
      </Header>
      <AntLayout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="/">
              <HomeOutlined />
              <span>Домашняя</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="/dragndrop">
              <DeleteOutlined />
              <span>DragnDrop test</span>
              <Link to="/trash" />
            </Menu.Item>
          </Menu>
        </Sider>
        <AntLayout style={{ padding: '0 12px 12px' }}>
          <Content
            style={{
              padding: 12,
              margin: 0,
              background: colorBgContainer,
            }}
          >
            <AppRouter />
          </Content>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  );
}
