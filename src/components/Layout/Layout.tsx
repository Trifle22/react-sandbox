import React from 'react';
import { Layout as AntLayout, theme } from 'antd';

import { Avatar } from './Avatar';
import { AppRouter } from 'router/AppRouter';
import { Menu } from './Menu';

const { Header, Content } = AntLayout;

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
				<Menu />
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
