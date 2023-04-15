import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'components';
import { AnimatedTodoList } from 'components/AnimatedTodoList';
import { RealTimeWeather } from 'components/RealtimeWeather';
import { IPInfo } from 'components/IPInfo';
import { GSAPTests } from 'components/GSAPTests/GSAPTests';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} index />
			<Route path="/animatedTodoList" element={<AnimatedTodoList />} />
			<Route path="/weather" element={<RealTimeWeather />} />
			<Route path="/ipInfo" element={<IPInfo />} />
			<Route path="/gsap" element={<GSAPTests />} />
		</Routes>
	);
};
