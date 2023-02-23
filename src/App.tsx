import ConfigProvider from 'antd/es/config-provider';
import theme from 'antd/es/theme';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
export const App = () => {
	return (
		<ConfigProvider
			theme={{
				algorithm: theme.darkAlgorithm,
			}}
		>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</ConfigProvider>
	);
};
