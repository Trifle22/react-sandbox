import * as React from 'react';
import { Menu as AntdMenu, theme, Layout as AntLayout } from 'antd';

import { Link } from 'react-router-dom';
import {
	AntCloudOutlined,
	BuildOutlined,
	DeleteOutlined,
	HomeOutlined,
	InfoCircleOutlined,
} from '@ant-design/icons';

const { Sider } = AntLayout;

export const Menu = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Sider width={200} style={{ background: colorBgContainer }}>
			<AntdMenu
				mode="inline"
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				style={{ height: '100%', borderRight: 0 }}
			>
				<AntdMenu.Item key="/">
					<HomeOutlined />
					<span>Домашняя</span>
					<Link to="/" />
				</AntdMenu.Item>
				<AntdMenu.Item key="/animatedTodoList">
					<DeleteOutlined />
					<span>AnimatedTodoList</span>
					<Link to="/animatedTodoList" />
				</AntdMenu.Item>
				<AntdMenu.Item key="/weather">
					<AntCloudOutlined />
					<span>Погода</span>
					<Link to="/weather" />
				</AntdMenu.Item>
				<AntdMenu.Item key="/ipInfo">
					<InfoCircleOutlined />
					<span>Информация по IP</span>
					<Link to="/ipInfo" />
				</AntdMenu.Item>
			</AntdMenu>
		</Sider>
	);
};
